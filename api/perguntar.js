// Assistente da Comissão Técnica — Brasil Sub-12, Pan-Americano 2026
// Responde dúvidas de regra com base no livro oficial da WBSC (2025-2026) e
// interpreta registros de arremessos ("Davi 32, Heitor 18").
// Requer a variável de ambiente ANTHROPIC_API_KEY no projeto da Vercel.

const PAGINAS = require("./_regras.json");
const INFO = require("./_info.js");
const CONGRESSO = require("./_congresso.js");

const MODELO_RAPIDO = process.env.U12_MODELO_RAPIDO || "claude-haiku-5-5";
const MODELO_RESPOSTA = process.env.U12_MODELO_RESPOSTA || "claude-sonnet-5-5";
const APENDICE_U12 = [159, 160, 162, 163, 164, 166, 167, 168, 172, 173];

async function claude(model, system, messages, max_tokens) {
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({ model, system, messages, max_tokens })
  });
  const j = await r.json();
  if (!r.ok) throw new Error((j.error && j.error.message) || "Falha na API (" + r.status + ")");
  const txt = (j.content || []).filter(b => b.type === "text").map(b => b.text).join("").trim();
  if (!txt) throw Object.assign(new Error("Resposta vazia (" + (j.stop_reason || "?") + ")"), { vazio: true });
  return txt;
}
async function claudeSeguro(model, system, messages, max_tokens) {
  try { return await claude(model, system, messages, max_tokens); }
  catch (e) { if (e.vazio) return await claude(model, system, messages, max_tokens * 2); throw e; }
}

function json(txt) {
  const m = txt.match(/\{[\s\S]*\}/);
  if (!m) throw new Error("Resposta sem JSON");
  return JSON.parse(m[0]);
}

// Busca simples por relevância (TF-IDF) nas páginas do livro
const TOK = s => (s.toLowerCase().match(/[a-z0-9.]+/g) || []).filter(w => w.length > 2);
const DF = {};
const DOCS = PAGINAS.map(p => {
  const tf = {};
  TOK(p.t).forEach(w => { tf[w] = (tf[w] || 0) + 1; });
  Object.keys(tf).forEach(w => { DF[w] = (DF[w] || 0) + 1; });
  return { p: p.p, t: p.t, tf };
});
function buscar(termos, regras, n) {
  const ts = [].concat(...termos.map(TOK));
  const scores = DOCS.map(d => {
    let s = 0;
    ts.forEach(w => { if (d.tf[w]) s += (1 + Math.log(d.tf[w])) * Math.log(DOCS.length / DF[w]); });
    (regras || []).forEach(r => { if (r && d.t.includes(r + " ")) s += 6; });
    return { p: d.p, s };
  }).filter(x => x.s > 0).sort((a, b) => b.s - a.s);
  return scores.slice(0, n).map(x => x.p);
}
const PAG = Object.fromEntries(PAGINAS.map(p => [p.p, p.t]));

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  if (!process.env.ANTHROPIC_API_KEY) return res.status(503).json({ erro: "Assistente ainda não configurado (falta a chave da API)." });
  // Diagnóstico: GET /api/perguntar?ping=1 confere chave e modelos
  if (req.method === "GET" && req.query && req.query.ping) {
    const out = {};
    for (const m of [MODELO_RAPIDO, MODELO_RESPOSTA]) {
      try { await claude(m, "Responda apenas: ok", [{ role: "user", content: "ok?" }], 5); out[m] = "ok"; }
      catch (e) { out[m] = String(e.message).slice(0, 200); }
    }
    return res.status(200).json(out);
  }
  if (req.method === "GET" && req.query && req.query.q) {
    req.body = { pergunta: String(req.query.q), hoje: new Date(Date.now() - 4 * 3600e3).toISOString().slice(0, 10) };
  } else if (req.method !== "POST") return res.status(405).json({ erro: "Use POST" });

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const pergunta = String(body.pergunta || "").slice(0, 1500).trim();
    if (!pergunta) return res.status(400).json({ erro: "Pergunta vazia" });
    const elenco = Array.isArray(body.elenco) ? body.elenco.slice(0, 40) : [];
    const jogosBR = Array.isArray(body.jogosBR) ? body.jogosBR.slice(0, 20) : [];
    const situacao = String(body.situacao || "").slice(0, 4000);
    const hoje = String(body.hoje || "").slice(0, 10);
    const historico = Array.isArray(body.historico) ? body.historico.slice(-6) : [];

    // 1) Entender o pedido
    const sys1 = `Você roteia mensagens da comissão técnica da Seleção Brasileira de Beisebol Sub-12 no Pan-Americano 2026 (Santo Domingo).
Responda SOMENTE com JSON, sem texto fora dele.

Se a mensagem REGISTRA arremessos feitos por atletas do Brasil (ex.: "Davi 32, Heitor 18", "no jogo de hoje o Gabriel fez 45"), responda:
{"tipo":"arremessos","itens":[{"atleta":"<nome completo exato do elenco>","arremessos":<inteiro>,"data":"AAAA-MM-DD","jogo":<número ou null>}],"duvidas":["..."]}
- Associe cada nome falado ao atleta do elenco (por primeiro nome, sobrenome, apelido ou número da camisa). Se houver dois atletas possíveis (ex.: dois Heitor, dois Lucas, dois Pedro) e a mensagem não desambiguar, NÃO escolha: coloque em "duvidas".
- Data: se não for dita, use a data de hoje (${hoje}). "Ontem" = dia anterior. Jogo: use o jogo do Brasil nessa data, se houver.
- Nunca invente números.

Caso contrário (dúvida de regra, de disponibilidade de arremessadores, de calendário etc.), responda:
{"tipo":"pergunta","termos":["<6 a 12 palavras-chave EM INGLÊS como aparecem no livro oficial de regras de beisebol>"],"regras":["<números de regra prováveis, ex.: 13.11, A1.8>"]}

Elenco do Brasil (número – nome): ${elenco.map(a => a.num + " – " + a.nome).join("; ")}
Jogos do Brasil: ${jogosBR.map(g => g.data + " jogo " + g.n + " " + g.desc).join("; ")}`;
    const r1 = json(await claudeSeguro(MODELO_RAPIDO, sys1, [{ role: "user", content: pergunta }], 1500));

    if (r1.tipo === "arremessos") {
      const nomes = new Set(elenco.map(a => a.nome));
      const itens = (r1.itens || []).filter(i => nomes.has(i.atleta) && Number.isInteger(i.arremessos) && i.arremessos >= 0 && i.arremessos <= 150 && /^\d{4}-\d{2}-\d{2}$/.test(i.data));
      return res.status(200).json({ tipo: "arremessos", itens, duvidas: r1.duvidas || [] });
    }

    // 2) Montar contexto e responder
    const achadas = buscar([].concat(r1.termos || [], [pergunta]), r1.regras || [], 7);
    const vizinhas = [].concat(...achadas.slice(0, 4).map(p => [p - 1, p + 1]));
    const paginas = Array.from(new Set([...APENDICE_U12, ...achadas, ...vizinhas])).sort((a, b) => a - b);
    const contexto = paginas.filter(p => PAG[p]).map(p => `<pagina n="${p}">\n${PAG[p]}\n</pagina>`).join("\n");

    const sys2 = `Você é o consultor de regras da comissão técnica da Seleção Brasileira de Beisebol Sub-12 no Campeonato Pan-Americano U-12 2026 (WBSC Américas, Santo Domingo). Quem pergunta é técnico ou coordenador, muitas vezes à beira do campo, pelo celular.

O CONGRESSO TÉCNICO de 19/11 tem prioridade sobre o livro quando houver diferença (cite "Congresso técnico 19/11"). Para logística, datas, elegibilidade, delegação e organização do torneio, use as INFORMAÇÕES OFICIAIS DO TORNEIO abaixo (cite "Informações oficiais COPABE"). Para regras de jogo, a fonte de verdade são os trechos do livro "WBSC Official Rules of Baseball 2025-2026" abaixo. O Apêndice 1 traz as regras específicas do U-12 (6 entradas, sem DH, mercy, tie-break, limite de arremessos, tacos) e prevalece sobre as regras gerais.

Como responder:
- Português do Brasil, direto. Primeira linha: a resposta objetiva em uma frase.
- Depois, no máximo 3 itens curtos (uma linha cada) com o essencial: condição, exceção, penalidade. Nada de repetir a primeira linha.
- Termine com UMA linha de referência: "Regra X — pág. Y" (página do PDF, como no atributo n). Não comente sobre quais trechos você recebeu.
- Use SOMENTE o que está nos trechos. Se a resposta não estiver neles, diga claramente "Não encontrei isso no livro de regras" e sugira confirmar com o Comissário Técnico. Nunca invente regra, número ou página.
- Se o regulamento específico do torneio puder mudar a resposta (desempate, horários, relógio), avise em uma linha.
- Se a pergunta for sobre disponibilidade de arremessadores, use a situação calculada abaixo e as regras A1.8/A.1.8.1.
- Vocabulário do beisebol no Brasil: rebatedor (não "batedor"), arremessador, receptor/catcher, out (eliminação), base por bolas, entrada.
- Sem emojis, sem markdown pesado (no máximo **negrito** pontual).

Hoje (Santo Domingo): ${hoje}
Uniforme do Brasil: branco quando mandante, azul quando visitante. Banco: mandante na 3ª base, visitante na 1ª base.
Jogos do Brasil na fase de grupos: ${jogosBR.map(g => g.data + " jogo " + g.n + ": " + g.desc).join("; ")}
Situação atual dos arremessadores do Brasil (calculada pela página):
${situacao || "(nenhum arremesso registrado)"}

${CONGRESSO}

INFORMAÇÕES OFICIAIS DO TORNEIO:
${INFO}

Trechos do livro:
${contexto}`;
    const msgs = [];
    historico.forEach(h => { if (h && (h.role === "user" || h.role === "assistant") && h.content) msgs.push({ role: h.role, content: String(h.content).slice(0, 2000) }); });
    while (msgs.length && msgs[0].role !== "user") msgs.shift();
    msgs.push({ role: "user", content: pergunta });
    // garante alternância
    const alt = [];
    msgs.forEach(m => { if (alt.length && alt[alt.length - 1].role === m.role) alt[alt.length - 1].content += "\n" + m.content; else alt.push(m); });

    const resposta = await claudeSeguro(MODELO_RESPOSTA, sys2, alt, 2500);
    return res.status(200).json({ tipo: "resposta", texto: resposta, paginas });
  } catch (e) {
    return res.status(500).json({ erro: String(e.message || e).slice(0, 300) });
  }
};
