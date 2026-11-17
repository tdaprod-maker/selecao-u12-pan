/* Regra de limite de arremessos U-12 — WBSC Official Rules of Baseball 2025-2026, Apêndice 1, A1.8 e A.1.8.1 (pág. 166-168) */
(function (root) {
  var MAX = 85;
  var FAIXAS = [ // [até, dias de descanso]
    [30, 0], [45, 1], [60, 2], [75, 3], [85, 4]
  ];

  function diasDescanso(total) {
    if (total <= 0) return 0;
    for (var i = 0; i < FAIXAS.length; i++) if (total <= FAIXAS[i][0]) return FAIXAS[i][1];
    return 4;
  }

  function addDias(iso, n) {
    var d = new Date(iso + "T12:00:00Z");
    d.setUTCDate(d.getUTCDate() + n);
    return d.toISOString().slice(0, 10);
  }

  /* log: { "2026-11-20": 25, ... } (arremessos somados por dia)
     dia: "2026-11-21"
     Retorna a situação do atleta NAQUELE dia. */
  function situacao(log, dia) {
    var datas = Object.keys(log).filter(function (k) { return log[k] > 0; }).sort();
    var seqDias = 0, seqTotal = 0, descansoAte = null, ultimo = null;

    if (datas.length) {
      var d = datas[0];
      while (d < dia) {
        var p = log[d] || 0;
        if (p > 0) {
          if (ultimo && addDias(ultimo, 1) === d) { seqDias++; seqTotal += p; }
          else { seqDias = 1; seqTotal = p; }
          ultimo = d;
          var req = diasDescanso(seqTotal);
          if (seqDias >= 3) req = Math.max(req, 1);
          descansoAte = req > 0 ? addDias(d, req) : descansoAte;
        }
        d = addDias(d, 1);
      }
    }

    // A sequência só continua se ele arremessou no dia anterior
    if (!(ultimo && addDias(ultimo, 1) === dia)) { seqDias = 0; seqTotal = 0; }

    var hoje = log[dia] || 0;
    var r = {
      dia: dia,
      hoje: hoje,
      diasSeguidosAntes: seqDias,
      acumuladoAntes: seqTotal,
      descansoAte: descansoAte && descansoAte >= dia ? descansoAte : null
    };

    if (r.descansoAte) {
      r.estado = hoje > 0 ? "violacao" : "descanso";
      r.limiteDia = 0;
      r.restante = 0;
      r.voltaEm = addDias(r.descansoAte, 1);
      return r;
    }

    r.limiteDia = MAX - seqTotal;
    r.restante = Math.max(0, r.limiteDia - hoje);
    var totalComHoje = seqTotal + hoje;
    var seq = seqDias + (hoje > 0 ? 1 : 0);

    r.estado = hoje > r.limiteDia ? "violacao" : (seqTotal > 0 ? "limitado" : "livre");

    // Projeção: quantos descansos ele terá se parar agora, e quanto falta para a próxima faixa
    var req = diasDescanso(totalComHoje);
    if (seq >= 3 && hoje > 0) req = Math.max(req, 1);
    r.descansoSeParar = hoje > 0 ? req : null;
    r.proximaFaixa = null;
    for (var i = 0; i < FAIXAS.length - 1; i++) {
      if (totalComHoje <= FAIXAS[i][0]) {
        var margem = FAIXAS[i][0] - totalComHoje;
        if (margem < r.restante) r.proximaFaixa = { faltam: margem + 1, dias: FAIXAS[i + 1][1], ate: FAIXAS[i][0] };
        break;
      }
    }
    // 3º dia seguido: não arremessa no 4º
    r.terceiroDia = seqDias === 2;
    return r;
  }

  var api = { MAX: MAX, FAIXAS: FAIXAS, diasDescanso: diasDescanso, situacao: situacao, addDias: addDias };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.Arremessos = api;
})(typeof window !== "undefined" ? window : globalThis);
