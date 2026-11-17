/* Conteúdo curado das regras — fonte: WBSC Official Rules of Baseball 2025-2026.
   Cada item: c = categoria, t = título, r = resposta curta, d = detalhes, ref = regra, p = página do PDF, k = palavras-chave extras, u = específico do U-12 */
window.REGRAS = [
  /* ---------- U-12 ---------- */
  { c: "U-12", u: 1, t: "Duração do jogo", r: "6 entradas.",
    d: ["Jogo interrompido vale como regulamentar com 4 entradas completas, ou 3½ se o mandante estiver vencendo.",
        "Antes de encerrar um jogo interrompido, os árbitros esperam no mínimo 60 e no máximo 90 minutos."],
    ref: "A1.2 · A1.6.1.6", p: "159, 163", k: "innings entradas regulamentar chuva tempo" },

  { c: "U-12", u: 1, t: "Regra de diferença de placar (mercy)", r: "Fim de jogo com 15 ou mais corridas de diferença depois de o time que perde rebater 4 entradas, ou com 10 ou mais depois de rebater 5.",
    d: ["Conta as entradas em que o time que está perdendo já completou o ataque.",
        "Não vale no jogo do título. Vale na disputa de 3º lugar."],
    ref: "A1.4.1.1 · 6.71.1", p: "159, 32", k: "mercy run rule nocaute diferença 10 15 corridas knockout" },

  { c: "U-12", u: 1, t: "Entradas extras (tie-break)", r: "A partir da 7ª entrada, cada time começa o ataque com corredores na 1ª e na 2ª base, sem outs.",
    d: ["A ordem de rebatedores segue normalmente. Se a 6ª terminou com o nº 8, a 7ª começa com o nº 9 rebatendo, o nº 7 na 2ª base e o nº 8 na 1ª (ou corredores substitutos deles).",
        "Visitante ataca primeiro, mandante depois, até haver vencedor.",
        "Corridas desses corredores colocados (\"fantasmas\") são sempre não limpas e ficam na conta do arremessador que começa a entrada.",
        "Visitas ao montinho: +1 visita livre a cada 3 entradas extras. Visitas não usadas no tempo normal não passam para as extras."],
    ref: "A1.4.2.1 · 13.11.1", p: "160, 102", k: "extra innings empate desempate gerente corredor fantasma ghost runner" },

  { c: "U-12", u: 1, t: "Rebatedor designado (DH)", r: "Não existe DH no U-12. O arremessador rebate na sua posição do line-up.",
    d: [], ref: "A1.1", p: "159", k: "designated hitter dh bateador designado" },

  { c: "U-12", u: 1, t: "Roubo de base, lead-off e pickoff", r: "Permitidos. Proibido deslizar de cabeça no home.",
    d: ["Quem desliza de cabeça no home é out. A bola continua em jogo até a jogada terminar."],
    ref: "A1.5.3.1", p: "162", k: "steal roubo lead off pickoff deslizar cabeça slide headfirst home" },

  { c: "U-12", u: 1, t: "Comemoração de home run", r: "Ninguém do time pode tocar o rebatedor antes de ele pisar no home.",
    d: ["1ª vez: advertência ao manager.", "Reincidência: multa ao time e expulsão do manager."],
    ref: "A1.5.2", p: "162", k: "home run comemoração tocar celebração" },

  { c: "U-12", u: 1, t: "Tacos permitidos", r: "Comprimento máximo de 33 polegadas (83 cm).",
    d: ["Não madeira (uma peça ou várias) e madeira composta: BPF (Bat Performance Factor) igual ou menor que 1.",
        "Se o BPF não estiver impresso no taco, é preciso apresentar prova do fabricante ou certificação equivalente à Comissão Técnica.",
        "Madeira inteiriça: só modelos da lista oficial de tacos aprovados da WBSC do ano.",
        "Taco não aprovado ou alterado é retirado do jogo."],
    ref: "A1.7 · A1.7.1.1", p: "164", k: "bat taco bpf alumínio composto madeira 33 polegadas" },

  { c: "U-12", u: 1, t: "Campo U-12", r: "Bases a 75 pés (22,86 m). Placa do arremessador a 51 pés (15,54 m) do home.",
    d: ["Montinho: altura de 6 polegadas (15 cm), diâmetro de 14 pés (4,27 m).",
        "Home à 2ª base: 97 pés e 5 pol. (29,70 m). Home ao backstop: 25 pés (7,62 m).",
        "Cerca: 220 pés (67 m) nas laterais e 270 pés (82,30 m) no centro. Altura entre 3,5 e 6 pés (1,06 a 1,83 m).",
        "Caixa do rebatedor: 3 × 6 pés (0,91 × 1,82 m). Corredor de 3 pés: 35 pés (10,66 m).",
        "Box de coach: 4 × 8 pés (1,21 × 2,43 m)."],
    ref: "Dimensões oficiais", p: "11", k: "campo medidas distância montinho bases cerca field dimensions" },

  /* ---------- ARREMESSOS ---------- */
  { c: "Arremessos", u: 1, t: "Limite de arremessos e descanso", r: "Máximo de 85 arremessos por dia. O descanso obrigatório depende do total.",
    tabela: [["1 a 30", "sem descanso"], ["31 a 45", "1 dia"], ["46 a 60", "2 dias"], ["61 a 75", "3 dias"], ["76 a 85", "4 dias"]],
    d: ["Arremessos em dois jogos no mesmo dia são somados.",
        "Se chegar ao máximo no meio de um bastão, termina aquele rebatedor e sai.",
        "Em descanso, o atleta pode jogar em outra posição. Só não pode arremessar.",
        "A contagem oficial é do Comissário Técnico, com base nos anotadores oficiais. Os indisponíveis saem num relatório diário."],
    ref: "A1.8 · A.1.8.1", p: "166–168", k: "pitch count contagem limite descanso rest 85 arremessos lançamentos" },

  { c: "Arremessos", u: 1, t: "Arremessar em dias seguidos", r: "Só pode arremessar no 3º dia seguido se a soma dos 2 dias anteriores for de até 30. Nunca 4 dias seguidos.",
    d: ["Em dias seguidos, o limite do dia é 85 menos o que ele já arremessou na sequência. Ex.: 29 em dois dias → máximo de 56 no terceiro.",
        "O descanso é calculado pela soma dos dias seguidos. No exemplo, 29 + 56 = 85 → 4 dias de descanso.",
        "Se os dois primeiros dias somarem mais de 30, ele descansa pelo menos 1 dia."],
    ref: "A.1.8.1 notas c, d", p: "167", k: "consecutivos seguidos três dias quatro dias pitch count" },

  { c: "Arremessos", u: 1, t: "Punição por passar do limite", r: "Expulsão do manager, suspensão no jogo seguinte e multa mínima de US$ 2.000 à federação.",
    d: ["Se o manager não trocar o arremessador antes de passar do limite, o Comissário Técnico manda o árbitro parar o jogo e o arremessador é substituído."],
    ref: "A1.8 · A.1.8.1", p: "167–168", k: "multa penalidade expulsão pitch count violação" },

  { c: "Arremessos", t: "Visitas ao montinho", r: "3 visitas livres por jogo. Uma 2ª visita ao mesmo arremessador na mesma entrada obriga a trocá-lo.",
    d: ["Visita livre é a conferência em que o arremessador não é trocado.",
        "Ir até o catcher ou um infielder e ele levar o recado ao arremessador conta como visita.",
        "Com o mesmo rebatedor, não pode haver 2ª visita. Se o manager insistir depois do aviso, é expulso e o arremessador termina aquele rebatedor e sai.",
        "Exceção: se entrar um rebatedor substituto, pode ir ao montinho de novo, mas tem que trocar o arremessador.",
        "A visita termina quando o técnico sai do círculo de 18 pés (5,49 m) ao redor da placa.",
        "Já usou as 3 visitas? Qualquer nova ida ao montinho obriga a trocar o arremessador. Ir direto ao árbitro anunciar a troca também conta como visita."],
    ref: "13.11", p: "102–105", k: "visita montinho mound visit trip conferência" },

  { c: "Arremessos", t: "Troca de arremessador", r: "O novo arremessador tem que enfrentar pelo menos um rebatedor até o fim (out ou chegar à base), salvo lesão.",
    d: ["O arremessador que começa a entrada, ao cruzar a linha de falta, também tem que enfrentar o 1º rebatedor (salvo rebatedor substituto ou lesão).",
        "Arremessador que vai para outra posição só pode voltar a arremessar uma vez no jogo.",
        "Ele também não pode trocar de posição mais de uma vez na mesma entrada.",
        "Acenar para o bullpen já oficializa a troca."],
    ref: "7.6.2 · 7.6.5 · 13.11.5–6", p: "40, 41, 105", k: "troca substituição relevo reliever arremessador voltar" },

  { c: "Arremessos", t: "Aquecimento", r: "Até 8 arremessos de aquecimento, dentro do tempo do relógio.",
    d: ["Entre entradas, o catcher lança para a 2ª base quando faltarem 30 segundos.",
        "Arremessador que entra no jogo: 8 arremessos, parando quando faltarem 15 segundos.",
        "Substituto de jogador lesionado (que não seja arremessador): 5 arremessos.",
        "Violação: bola para o rebatedor."],
    ref: "13.4 · 7.6.8", p: "94, 42", k: "warm up aquecimento 8 arremessos" },

  { c: "Arremessos", t: "Balk", r: "Com corredor em base, ato ilegal do arremessador: todos os corredores avançam uma base.",
    d: ["Exceção: se o rebatedor e todos os corredores avançaram pelo menos uma base na jogada, ela vale e o balk é ignorado.",
        "Sem corredores, arremesso ilegal ou quick pitch é bola.",
        "Bola que cai da mão em contato com a placa: com corredor é balk. Sem corredor, não conta se não cruzar a linha de falta, e é bola se cruzar."],
    ref: "13.10 · 13.6.1–2", p: "96, 99", k: "balk ilegal arremesso quick pitch" },

  { c: "Arremessos", t: "Luva do arremessador", r: "Não pode ser branca nem cinza, nem ter material preso de outra cor.",
    d: ["O árbitro retira a luva por iniciativa própria ou por reclamação do manager adversário."],
    ref: "3.4.4", p: "16", k: "luva glove cor branca cinza" },

  /* ---------- JOGO ---------- */
  { c: "Jogo", t: "Relógios (pitch clock)", r: "Sem corredores, o arremessador tem 20 s. Visita ao montinho: 30 s. No U-12, troca de arremessador e intervalo entre entradas: 90 s.",
    d: ["O rebatedor tem 10 s para entrar na caixa e deve manter um pé dentro entre os arremessos. Exceções: rebateu, swing, check swing, bunt, wild pitch, \"time\" pedido, 3 bolas achando que foi bola.",
        "Violação do arremessador ou da defesa: bola. Do rebatedor ou do ataque: strike.",
        "Sair da placa não para o relógio, a menos que o árbitro conceda \"time\"."],
    ref: "13.5 · Apêndice 3 (C1–C4)", p: "94–96, 190–194", k: "pitch clock relógio tempo segundos 20 90 intervalo" },

  { c: "Jogo", t: "Line-up", r: "10 minutos antes do jogo, no home: o mandante entrega primeiro, depois o visitante, em 3 vias.",
    d: ["Nome, número e posição de cada titular.",
        "Liste os reservas, mas esquecer algum não o torna inelegível.",
        "Depois da entrega, o line-up é oficial e o árbitro assume o jogo. Ele também explica as regras de campo (ground rules)."],
    ref: "5.3 · 5.5", p: "21–22", k: "lineup line-up escalação súmula batting order" },

  { c: "Jogo", u: 1, t: "Treino antes do jogo", r: "Treino de rebatida: 20 min mandante + 20 min visitante. Infield: 10 + 10.",
    d: ["Pessoal da delegação deve sair do campo 60 minutos antes do horário do jogo. Descumprir causa perda de credencial e punição à federação."],
    ref: "5.2.6.1 · nota 4.1", p: "20, 18", k: "bp treino rebatida infield pré-jogo aquecimento" },

  { c: "Jogo", t: "Rebatedor fora da ordem", r: "Quem é out é o rebatedor correto, e só se a defesa apelar antes do próximo arremesso.",
    d: ["O rebatedor certo pode entrar antes de o errado virar corredor ou ser out, herdando a contagem.",
        "Apelo aceito: anula avanços e corridas causados pelo rebatedor errado. Roubo, balk, wild pitch e passed ball durante o bastão continuam valendo.",
        "Sem apelo antes do próximo arremesso, o errado vira legal e a ordem segue a partir dele.",
        "O árbitro não avisa ninguém: a responsabilidade é dos times."],
    ref: "9.8", p: "61–62", k: "ordem rebatedor errado batting out of turn" },

  { c: "Jogo", t: "Substituições", r: "Quem sai do jogo não volta.",
    d: ["Volta indevida percebida antes da jogada: o substituto ainda pode entrar. Percebida depois: os dois ficam fora. A jogada feita vale.",
        "Proibido corredor de cortesia.",
        "Substituto não anunciado vira oficial quando: o corredor assume a base, o arremessador pisa na placa, o defensor ocupa a posição e o jogo recomeça, ou o rebatedor entra na caixa.",
        "Quem saiu pode ficar no banco, aquecer arremessadores e ser coach de base.",
        "Dupla troca: informe o árbitro principal ANTES de pedir o novo arremessador."],
    ref: "7.6", p: "40–42", k: "substituição reentrada reentry cortesia courtesy runner dupla troca double switch" },

  { c: "Jogo", t: "Jogo suspenso ou interrompido", r: "Antes de virar jogo regulamentar, retoma do ponto exato em que parou.",
    d: ["Depois de regulamentar, é jogo completo. Exceção: se estiver empatado, ou se o visitante virou numa entrada não completada, o jogo fica suspenso e é retomado.",
        "Nenhum time joga mais de 2 jogos no mesmo dia, salvo circunstância excepcional.",
        "Falta de luz durante uma jogada: retoma da situação do início daquela jogada."],
    ref: "A1.6", p: "162–164", k: "chuva suspenso interrompido luz rain" },

  { c: "Jogo", t: "W.O. (forfeit)", r: "Placar oficial de 6 a 0.",
    d: ["Casos: não entrar em campo 5 minutos depois do \"play\", recusar-se a continuar, não ter 9 jogadores, ou não retirar um jogador quando o árbitro mandar."],
    ref: "A2.1 · 7.11", p: "172, 46", k: "wo forfeit perda abandono" },

  { c: "Jogo", u: 1, t: "Arremessador vencedor e ERA no U-12", r: "O titular precisa de 4 entradas para ganhar a vitória (3 em jogo regulamentar de 4 ou 5 entradas).",
    d: ["ERA no U-12 é calculado sobre 6 entradas: corridas limpas × 6 ÷ entradas arremessadas."],
    ref: "A2.2 · A2.3", p: "172", k: "era média vitória winning pitcher estatística" },

  /* ---------- LANCES ---------- */
  { c: "Lances", t: "Terceiro strike não agarrado", r: "O rebatedor pode correr para a 1ª se ela estiver vazia, ou com 2 outs.",
    d: ["Se ele não correr e sair do círculo do home, é out."],
    ref: "10.2.2", p: "66", k: "dropped third strike terceiro strike caído" },

  { c: "Lances", t: "Infield fly", r: "Com corredores na 1ª e 2ª (ou bases cheias) e menos de 2 outs, bola alta que um infielder pega com esforço normal: rebatedor out.",
    d: ["Não vale para line drive nem bunt.",
        "A bola segue viva: os corredores podem avançar por sua conta, ou retocar e avançar depois do toque.",
        "Perto da linha, o árbitro anuncia \"infield fly, if fair\". Se cair foul, é foul."],
    ref: "6.45", p: "29", k: "infield fly elevado" },

  { c: "Lances", t: "Colisão e bloqueio no home", r: "O corredor não pode buscar contato para derrubar a bola. Se buscar, é out (e expulso, se o contato for maldoso).",
    d: ["Catcher sem a bola não pode bloquear o caminho: obstrução, e o corredor ganha pelo menos uma base.",
        "Se o defensor com a bola bloqueia, o corredor pode deslizar ou colidir desde que esteja tentando de fato alcançar o home.",
        "Contato acima da cintura é considerado tentativa de derrubar a bola."],
    ref: "12.8 · 12.7", p: "90–91", k: "colisão collision bloqueio obstrução catcher home" },

  { c: "Lances", t: "Deslize em dupla jogada", r: "O deslize é legal se o corredor toca o chão antes da base, tenta alcançá-la e permanece nela.",
    d: ["Contato para quebrar a dupla jogada sem deslize legal é interferência."],
    ref: "10.6", p: "73", k: "slide deslize double play dupla jogada" },

  /* ---------- CONDUTA ---------- */
  { c: "Conduta", u: 1, t: "Celular e aparelhos eletrônicos", r: "Proibido usar durante os jogos para falar com campo, banco, bullpen, vestiário ou arquibancada.",
    d: ["Única exceção: comunicação entre banco e bullpen, com aparelho aprovado antes pela WBSC.",
        "Câmeras e microfones no banco, bullpen ou campo só com aprovação da WBSC."],
    ref: "A3.1", p: "173", k: "celular telefone eletrônico tablet rádio walkie" },

  { c: "Conduta", t: "Quem pode reclamar com o árbitro", r: "Só o manager discute, contesta ou protesta uma decisão.",
    d: ["Coaches nunca, a não ser que tenham sido indicados por um manager expulso ou ausente.",
        "Manager expulso indica o substituto. Se não indicar, o árbitro chefe indica.",
        "Assistentes não podem sair do banco ou do bullpen para apelar."],
    ref: "4.2.3–4.2.5 · 4.3", p: "18–19", k: "manager coach reclamar discutir árbitro expulsão" },

  { c: "Conduta", t: "Protesto", r: "Só sobre aplicação de regra. Nunca sobre decisão de julgamento do árbitro.",
    d: ["Feito ao árbitro principal na hora, antes do próximo lance.",
        "Se o jogo termina na jogada: até os infielders saírem do território fair e o catcher sair do círculo de terra.",
        "O árbitro anuncia que o jogo segue sob protesto e registra a situação.",
        "Se o protesto for aceito e puder ter mudado o resultado, o jogo é retomado do ponto do protesto.",
        "Manager expulso não protesta. Quem protesta é o substituto dele."],
    ref: "7.12", p: "46–47", k: "protesto protest reclamação" },

  { c: "Conduta", t: "Coaches de base", r: "Dois coaches de uniforme, dentro dos boxes.",
    d: ["No arremesso, não podem estar mais perto da linha que a borda interna do box, nem mais perto do home que a borda da frente.",
        "Podem sair do box para sinalizar deslize, avanço ou volta, sem interferir.",
        "Se o adversário reclamar, o árbitro adverte. Se o coach não voltar ao box, é retirado do jogo."],
    ref: "7.4", p: "39", k: "coach base box treinador primeira terceira" },

  { c: "Conduta", t: "Briga", r: "Tolerância zero. Suspensão mínima de 3 jogos e multa mínima de US$ 2.000.",
    d: ["Inclui sair da sua posição (banco, bullpen, box, base) para entrar numa confusão.",
        "Suspenso não pode ter nenhum contato com o time durante o jogo.",
        "Manager e coaches respondem pela conduta dos jogadores."],
    ref: "7.13", p: "47–48", k: "briga fight confusão expulsão suspensão" },

  /* ---------- EQUIPAMENTO ---------- */
  { c: "Equipamento", u: 1, t: "Capacete e proteção", r: "Capacete com dupla aba é obrigatório para rebatedor e corredores.",
    d: ["Catcher usa capacete e máscara, inclusive no aquecimento e no bullpen.",
        "Bat boys: capacete com dupla aba.",
        "Coaches de base: capacete recomendado, não obrigatório.",
        "Protetor de cotovelo: um só, de até 10 polegadas (25 cm)."],
    ref: "A1.3 · 3.5", p: "159, 16", k: "capacete helmet proteção catcher máscara cotovelo" }
];

window.PENDENCIAS = [
  "Critérios de desempate na classificação dos grupos (não estão neste livro de regras).",
  "Se haverá relógio de arremesso (pitch clock) e de intervalo no evento.",
  "Se a regra de diferença de placar vale na final do Pan.",
  "Lista de tacos aprovados e como será a checagem.",
  "Como a regra de eletrônicos (A3.1) será aplicada no banco.",
  "Horários e campos da Super Ronda e da Ronda de Classificação.",
  "Como sai o relatório diário de arremessadores indisponíveis."
];
