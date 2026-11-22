/* Conteúdo curado das regras — fonte: WBSC Official Rules of Baseball 2025-2026.
   Cada item: c = categoria, t = título, r = resposta curta, d = detalhes, ref = regra, p = página do PDF, k = palavras-chave extras, u = específico do U-12 */
window.REGRAS = [
  /* ---------- U-12 ---------- */
  { c: "U-12", u: 1, t: "Duração do jogo", r: "6 entradas.",
    d: ["O jogo passa a valer (regulamentar) a partir da 4ª entrada completa (confirmado no congresso técnico).",
        "Antes de encerrar um jogo interrompido, os árbitros esperam no mínimo 60 e no máximo 90 minutos."],
    ref: "A1.2 · A1.6.1.6", p: "159, 163", k: "innings entradas regulamentar chuva tempo" },

  { c: "U-12",
    u: 1,
    t: "Regra de diferença de placar (mercy)",
    r: "Fim de jogo com 15 ou mais corridas de diferença depois de 4 entradas, ou com 10 ou mais depois de 5.",
    d: ["Se o mandante estiver perdendo, ele precisa rebater o mesmo número de entradas que o visitante antes de o jogo acabar.", "NÃO vale no jogo final (confirmado no congresso técnico). Vale na disputa de 3º lugar."],
    ref: "A1.4.1.1 · Congresso técnico 19/11", p: "159", k: "mercy run rule nocaute diferença 10 15 corridas knockout final" },

  { c: "U-12", u: 1, t: "Entradas extras (tie-break)", r: "A partir da 7ª entrada, cada time começa o ataque com corredores na 1ª e na 2ª base, sem outs.",
    d: ["A ordem de rebatedores segue normalmente. Se a 6ª terminou com o nº 8, a 7ª começa com o nº 9 rebatendo, o nº 7 na 2ª base e o nº 8 na 1ª (ou corredores substitutos deles).",
        "Visitante ataca primeiro, mandante depois, até haver vencedor.",
        "Corridas desses corredores colocados (\"fantasmas\") são sempre não limpas e ficam na conta do arremessador que começa a entrada.",
        "Visitas ao montinho: +1 visita livre a cada 3 entradas extras. Visitas não usadas no tempo normal não passam para as extras."],
    ref: "A1.4.2.1 · 13.11.1", p: "160, 102", k: "extra innings empate desempate gerente corredor fantasma ghost runner" },

  { c: "U-12", u: 1, t: "Rebatedor designado (DH)", r: "Não existe DH no U-12. O arremessador rebate na sua posição do line-up. Por isso também não existe a regra Ohtani.",
    d: [], ref: "A1.1", p: "159", k: "designated hitter dh bateador designado" },

  { c: "U-12", u: 1, t: "Roubo de base, lead-off e pickoff", r: "Permitidos. Proibido deslizar de cabeça no home.",
    d: ["Quem desliza de cabeça no home é out. A bola continua em jogo até a jogada terminar.","Não há limite de pickoffs (tentativas de eliminar o corredor na base), confirmado no congresso técnico."],
    ref: "A1.5.3.1", p: "162", k: "steal roubo lead off pickoff limite tentativas deslizar cabeça slide headfirst home" },

  { c: "U-12", u: 1, t: "Comemoração de home run", r: "Ninguém do time pode tocar o rebatedor antes de ele pisar no home.",
    d: ["1ª vez: advertência ao manager.", "Reincidência: multa ao time e expulsão do manager."],
    ref: "A1.5.2", p: "162", k: "home run comemoração tocar celebração" },

  { c: "U-12",
    u: 1,
    t: "Tacos permitidos",
    r: "Comprimento máximo de 33 polegadas (0,83 m). Não madeira e madeira composta: BPF igual ou menor que 1.",
    d: ["O BPF caiu de 1.15 (Pan de 2024) para 1, o mesmo dos tacos de madeira de uma peça.", "Se o BPF não estiver visível no taco, apresentar prova do fabricante ou certificação equivalente à Comissão Técnica para aprovação.", "Madeira de uma peça: só modelos da lista oficial de tacos de madeira aprovados pela COPABE – WBSC Américas do ano.", "Taco não aprovado ou alterado é retirado do jogo."],
    ref: "A1.7.1 · Congresso técnico 19/11", p: "164", k: "bat taco bpf alumínio composto madeira 33 polegadas lista aprovada" },

  { c: "U-12",
    u: 1,
    t: "O que mudou desde o Pan de 2024",
    r: "Acabou a regra de reentrada, acabou o rebatedor designado e o BPF dos tacos caiu de 1.15 para 1.",
    d: ["Quem sai do jogo não volta mais, em nenhuma hipótese.", "O arremessador rebate na sua posição do line-up."],
    ref: "Congresso técnico 19/11", p: "—", k: "mudanças reentrada re-entry dh rebatedor designado bpf 2024 novidades" },

  { c: "U-12", u: 1, t: "Campo U-12", r: "Bases a 75 pés (22,86 m). Placa do arremessador a 51 pés (15,54 m) do home.",
    d: ["Montinho: altura de 6 polegadas (15 cm), diâmetro de 14 pés (4,27 m).",
        "Home à 2ª base: 97 pés e 5 pol. (29,70 m). Home ao backstop: 25 pés (7,62 m).",
        "Cerca: 220 pés (67 m) nas laterais e 270 pés (82,30 m) no centro. Altura entre 3,5 e 6 pés (1,06 a 1,83 m).",
        "Caixa do rebatedor: 3 × 6 pés (0,91 × 1,82 m). Corredor de 3 pés: 35 pés (10,66 m).",
        "Box de coach: 4 × 8 pés (1,21 × 2,43 m)."],
    ref: "Dimensões oficiais", p: "11", k: "campo medidas distância montinho bases cerca field dimensions" },

  /* ---------- ARREMESSOS ---------- */
  { c: "Arremessos",
    u: 1,
    t: "Limite de arremessos e descanso",
    r: "Máximo de 85 arremessos por dia. O descanso obrigatório depende do total.",
    tabela: [["1 a 30", "sem descanso"], ["31 a 45", "1 dia"], ["46 a 60", "2 dias"], ["61 a 75", "3 dias"], ["76 a 85", "4 dias"]],
    d: ["Aviso de cortesia: o Comissário Técnico avisa o árbitro de home e os managers quando o arremessador chega a 65 arremessos.", "Se chegar ao máximo no meio de um bastão, termina aquele rebatedor e sai.", "O manager/coach não pode visitar o arremessador duas vezes durante o mesmo rebatedor, mesmo que ele esteja no limite.", "Arremessos em dois jogos no mesmo dia são somados.", "Em descanso, o atleta pode jogar em outra posição. Só não pode arremessar.", "Se o line-up devolvido pelo Comissário Técnico tiver asterisco (*) ao lado de um arremessador, ele não pode arremessar naquele jogo por restrição de arremessos."],
    ref: "A1.8.1 · Congresso técnico 19/11", p: "166–168", k: "pitch count contagem limite descanso rest 85 65 aviso asterisco arremessos lançamentos" },

  { c: "Arremessos", u: 1, t: "Arremessar em dias seguidos", r: "Só pode arremessar no 3º dia seguido se a soma dos 2 dias anteriores for de até 30. Nunca 4 dias seguidos.",
    d: ["Em dias seguidos, o limite do dia é 85 menos o que ele já arremessou na sequência. Ex.: 29 em dois dias → máximo de 56 no terceiro.",
        "O descanso é calculado pela soma dos dias seguidos. No exemplo, 29 + 56 = 85 → 4 dias de descanso.",
        "Se os dois primeiros dias somarem mais de 30, ele descansa pelo menos 1 dia."],
    ref: "A.1.8.1 notas c, d", p: "167", k: "consecutivos seguidos três dias quatro dias pitch count" },

  { c: "Arremessos", u: 1, t: "Punição por passar do limite", r: "Expulsão do manager, suspensão no jogo seguinte e multa mínima de US$ 2.000 à federação.",
    d: ["Se o manager não trocar o arremessador antes de passar do limite, o Comissário Técnico manda o árbitro parar o jogo e o arremessador é substituído."],
    ref: "A1.8 · A.1.8.1", p: "167–168", k: "multa penalidade expulsão pitch count violação" },

  { c: "Arremessos",
    t: "Visitas ao montinho",
    r: "3 visitas defensivas livres por jogo, +1 a cada 3 entradas extras. Duas visitas ao mesmo arremessador na mesma entrada obrigam a trocá-lo.",
    d: ["Depois das 3 visitas livres, ou na 2ª visita da entrada, o técnico que vai fazer várias trocas envolvendo o arremessador tem que ir ANTES ao árbitro de home anunciar as trocas. Se for direto ao montinho, as mudanças não valem e o arremessador tem que sair do jogo.", "Não pode visitar o arremessador duas vezes durante o mesmo rebatedor, mesmo com ele no limite de arremessos.", "Ir até o catcher ou um infielder e ele levar o recado ao arremessador conta como visita.", "Relógio da visita: 30 segundos, ativado quando o técnico cruza a linha de foul."],
    ref: "13.11 · Congresso técnico 19/11", p: "102–105", k: "visita montinho mound visit trip conferência defensiva" },

  { c: "Jogo",
    u: 1,
    t: "Reuniões ofensivas",
    r: "3 reuniões ofensivas por jogo, +1 a cada 3 entradas extras.",
    d: [],
    ref: "Congresso técnico 19/11", p: "—", k: "reunião ofensiva offensive meeting conversa rebatedor corredor tempo ataque" },

  { c: "Arremessos", t: "Troca de arremessador", r: "O novo arremessador tem que enfrentar pelo menos um rebatedor até o fim (out ou chegar à base), salvo lesão.",
    d: ["O arremessador que começa a entrada, ao cruzar a linha de falta, também tem que enfrentar o 1º rebatedor (salvo rebatedor substituto ou lesão).",
        "Se o arremessador sai do montinho e continua no jogo em outra posição, conta como um pedido de tempo (visita). Confirmado no congresso técnico.",
        "Arremessador que vai para outra posição só pode voltar a arremessar uma vez no jogo.",
        "Ele também não pode trocar de posição mais de uma vez na mesma entrada.",
        "Acenar para o bullpen já oficializa a troca."],
    ref: "7.6.2 · 7.6.5 · 13.11.5–6", p: "40, 41, 105", k: "troca substituição relevo reliever arremessador voltar" },

  { c: "Arremessos",
    t: "Aquecimento entre entradas",
    r: "Entre entradas: 90 segundos OU 5 arremessos de aquecimento. O relógio começa no 3º out.",
    d: ["Arremessador que entra vindo do bullpen: relógio de 90 segundos, ativado quando ele pisa na faixa de advertência (warning track).", "Substituto de jogador lesionado (que não seja arremessador): 5 arremessos."],
    ref: "13.4 · Congresso técnico 19/11", p: "94", k: "warm up aquecimento arremessos entre entradas 5 90 segundos" },

  { c: "Arremessos", t: "Balk", r: "Com corredor em base, ato ilegal do arremessador: todos os corredores avançam uma base.",
    d: ["Exceção: se o rebatedor e todos os corredores avançaram pelo menos uma base na jogada, ela vale e o balk é ignorado.",
        "Sem corredores, arremesso ilegal ou quick pitch é bola.",
        "Bola que cai da mão em contato com a placa: com corredor é balk. Sem corredor, não conta se não cruzar a linha de falta, e é bola se cruzar."],
    ref: "13.10 · 13.6.1–2", p: "96, 99", k: "balk ilegal arremesso quick pitch" },

  { c: "Arremessos", t: "Luva do arremessador", r: "Não pode ser branca nem cinza, nem ter material preso de outra cor.",
    d: ["O árbitro retira a luva por iniciativa própria ou por reclamação do manager adversário."],
    ref: "3.4.4", p: "16", k: "luva glove cor branca cinza" },

  /* ---------- JOGO ---------- */
  { c: "Jogo",
    u: 1,
    t: "Relógios do jogo",
    r: "Entre entradas: 90 s ou 5 arremessos de aquecimento. Troca de arremessador: 90 s. Visita ao montinho: 30 s.",
    d: ["Entre entradas: ativado quando sai o 3º out.", "Troca de arremessador: ativado quando o arremessador vindo do bullpen pisa na faixa de advertência.", "Visita ao montinho: ativado quando o técnico cruza a linha de foul.", "No congresso só foram apresentados esses três relógios. Não foi apresentado relógio entre arremessos (20 s)."],
    ref: "13.5 · Apêndice 3 · Congresso técnico 19/11", p: "94–96, 190–194", k: "pitch clock relógio tempo segundos 90 30 intervalo" },

  { c: "Jogo",
    u: 1,
    t: "Line-up",
    r: "Entregar aos Comissários Técnicos 90 minutos antes do início do jogo.",
    d: ["Todos os atletas, incluindo os reservas, com nome completo e número do uniforme.", "Atleta que se lesionar no aquecimento pode ser trocado no line-up inicial pelo manager na reunião de home, sem contar como substituição. Avisar o Diretor Técnico/Comissário imediatamente, antes da reunião de home.", "Asterisco (*) ao lado de um arremessador no line-up devolvido pelo Comissário: ele não pode arremessar no jogo por restrição de arremessos."],
    ref: "5.3 · 5.5 · Congresso técnico 19/11", p: "21–22", k: "lineup line-up escalação súmula batting order 90 minutos comissário" },

  { c: "Jogo",
    u: 1,
    t: "Anúncio do arremessador inicial",
    r: "Informar no grupo de WhatsApp o arremessador inicial do próximo jogo até 1 hora depois do fim do último jogo do dia.",
    d: ["Depois do anúncio, não pode trocar o arremessador sem motivo válido e aprovação da Comissão Técnica.", "Não cumprir está sujeito a multa."],
    ref: "Congresso técnico 19/11", p: "—", k: "arremessador inicial abridor starting pitcher anúncio whatsapp multa" },

  { c: "Jogo",
    u: 1,
    t: "Treino antes do jogo",
    r: "30 minutos de rebatida na gaiola (batting cage) e 10 minutos de infield em campo alternativo. O mandante treina primeiro.",
    d: ["Na Ronda de Abertura (fase de grupos) não há cerimônia antes dos jogos.", "Pessoal da delegação deve sair do campo de jogo 60 minutos antes do horário do jogo."],
    ref: "Nota 4.1 · Congresso técnico 19/11", p: "18", k: "bp treino rebatida gaiola cage infield pré-jogo aquecimento" },

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
  { c: "Conduta",
    u: 1,
    t: "Celular, relógio e aparelhos eletrônicos",
    r: "Proibidos durante os jogos para falar com campo, banco, bullpen, vestiário ou arquibancada. Inclui smartwatch.",
    d: ["Vale para celular, smartphone, relógio inteligente, notebook, tablet, filmadora e walkie-talkie.", "Sem microfones ou câmeras no banco, no bullpen ou no campo sem aprovação da WBSC.", "Qualquer outro equipamento eletrônico precisa de aprovação prévia da WBSC.", "Cartões de jogadas não eletrônicos (de papel, no punho) são permitidos."],
    ref: "A3.1 · Congresso técnico 19/11", p: "173", k: "celular telefone eletrônico tablet rádio walkie smartwatch relógio cartão de jogadas" },

  { c: "Conduta", t: "Quem pode reclamar com o árbitro", r: "Só o manager discute, contesta ou protesta uma decisão.",
    d: ["Coaches nunca, a não ser que tenham sido indicados por um manager expulso ou ausente.",
        "Manager expulso indica o substituto. Se não indicar, o árbitro chefe indica.",
        "Assistentes não podem sair do banco ou do bullpen para apelar."],
    ref: "4.2.3–4.2.5 · 4.3", p: "18–19", k: "manager coach reclamar discutir árbitro expulsão" },

  { c: "Conduta",
    t: "Protesto",
    r: "Feito ao árbitro de home, dizendo qual regra está sendo protestada. Custa US$ 200.",
    d: ["Só sobre aplicação de regra. Nunca sobre decisão de julgamento do árbitro.", "O árbitro de home avisa o manager adversário e os Comissários Técnicos do jogo, que decidem juntos.", "Fazer na hora, antes do próximo lance.", "Manager expulso não protesta. Quem protesta é o substituto dele."],
    ref: "7.12 · Congresso técnico 19/11", p: "46–47", k: "protesto protest reclamação 200 dólares" },

  { c: "Conduta",
    t: "Apelação ao Júri",
    r: "Só decisões da Comissão Técnica que não envolvam as Regras Oficiais podem ir ao Júri de Apelação. Custa US$ 100.",
    d: ["Prazo: 3 horas depois de receber a notificação da decisão.", "Enviar por escrito, com cópia da decisão e o material de apoio.", "Atleta, manager ou coach suspenso por um jogo ou mais cumpre o próximo jogo mesmo assim, enquanto o Júri analisa."],
    ref: "Congresso técnico 19/11", p: "—", k: "apelação júri appeal recurso suspensão 100 dólares" },

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
  { c: "Equipamento",
    u: 1,
    t: "Capacete, proteção e chuteiras",
    r: "Capacete com dupla aba obrigatório para os jogadores. Chuteira com trava de metal é PROIBIDA para jogadores e técnicos.",
    d: ["Catchers, inclusive os de aquecimento e bullpen, usam equipamento de proteção.", "Coaches de base: capacete recomendado.", "Cartões de jogadas não eletrônicos são permitidos.", "Protetor de cotovelo: um só, de até 10 polegadas (25 cm)."],
    ref: "A1.3 · 3.5 · Congresso técnico 19/11", p: "159, 16", k: "capacete helmet proteção catcher máscara spikes travas metal chuteira" },

  { c: "Equipamento",
    u: 1,
    t: "Uniformes",
    r: "Nenhuma mudança nos uniformes cadastrados sem aprovação prévia da Comissão Técnica.",
    d: ["Brasil: branco quando mandante, azul quando visitante.", "Pedido de troca de cor do uniforme: por escrito à Comissão Técnica, que responde por escrito."],
    ref: "Congresso técnico 19/11", p: "—", k: "uniforme cor camisa branco azul mandante visitante" },

  { c: "Jogo", u: 1, t: "Banco (dugout)", r: "Mandante fica no banco da 3ª base. Visitante fica no banco da 1ª base.",
    d: ["Brasil: banco da 3ª base quando mandante (uniforme branco), banco da 1ª base quando visitante (uniforme azul).","No treino oficial de 19/11 o Brasil usou o banco da 1ª base."],
    ref: "Congresso técnico 19/11", p: "—", k: "dugout banco primeira terceira base mandante visitante lado" },

  { c: "Jogo", u: 1, t: "Formato e chaveamento", r: "1º e 2º de cada grupo vão para a Super Ronda. 3º e 4º jogam a Ronda de Classificação (7º ao 12º lugar).",
    d: ["Super Ronda: contam 5 jogos para cada time — o jogo da 1ª fase contra o outro classificado do mesmo grupo + 4 jogos novos contra os classificados dos outros grupos.","Os 2 melhores da Super Ronda fazem a final (1º × 2º). O 3º e o 4º disputam o bronze.","Os horários da Super Ronda e da Ronda de Classificação podem mudar por causa da TV e são anunciados logo depois da 1ª fase."],
    ref: "Reunião técnica 19/11 (doc. COPABE)", p: "—", k: "formato chaveamento super ronda classificação final bronze 5 jogos levado carry over" },

  { c: "Jogo", u: 1, t: "Mandante na 2ª fase e nas finais", r: "Na Super Ronda e na Ronda de Classificação, o mandante é o time mais bem classificado na 1ª fase.",
    d: ["Entre times com a mesma posição (ex.: 1º A × 1º B), o mandante foi definido por sorteio de moeda.","Nos jogos por medalha, o mandante é o time mais bem classificado na Super Ronda.","Mandante: banco da 3ª base e uniforme branco (Brasil). Visitante: banco da 1ª base e uniforme azul."],
    ref: "Reunião técnica 19/11 (doc. COPABE)", p: "—", k: "mandante local visitante sorteio moeda super ronda final medalha" },

  { c: "Jogo", u: 1, t: "Desempate na classificação", r: "Padrão WBSC: 1) confronto direto; 2) TQB; 3) ER-TQB; 4) média de rebatidas nos jogos entre os empatados; 5) sorteio.",
    d: ["TQB = (corridas marcadas ÷ entradas no ataque) − (corridas sofridas ÷ entradas na defesa), só nos jogos entre os times empatados.","ER-TQB: a mesma conta usando só corridas limpas.","Em empate triplo, o TQB ordena os três de uma vez; se dois continuarem iguais, volta-se ao confronto direto entre eles.","Esse é o critério padrão dos torneios WBSC; não estava nos slides do congresso. Confirmar com o Comissário Técnico em caso de empate."],
    ref: "Regulamento de torneios WBSC", p: "—", k: "desempate empate tqb tie break classificação critério confronto direto" },

  { c: "Equipamento", u: 1, t: "Bolas e checagem de tacos", r: "Bola oficial Rawlings. Cada time recebe 6 bolas para os arremessadores. Os tacos são conferidos e fotografados antes de cada jogo.",
    d: ["Na gaiola de rebatida (batting cage) há bolas para uso de todos os times."],
    ref: "Reunião técnica 19/11 (doc. COPABE)", p: "—", k: "bola rawlings 6 bolas tacos checagem foto bat check" },

  { c: "Conduta", u: 1, t: "Cerimônias e roster", r: "Na abertura e no encerramento, uniforme de jogo completo: jersey, calça, boné e chuteira. Proibido short, chinelo e roupa de viagem.",
    d: ["Encerramento: logo após a final (27/11), com os 3 medalhistas e os premiados individuais. Técnicos com uniforme de jogo ou roupa oficial do time (agasalho vale); sem calçado aberto.","Roster final (FTR): 18 jogadores e 4 oficiais (manager, 2 coaches, chefe de delegação). Até 5 jogadores podem ser substituídos no FTR."],
    ref: "Reunião técnica 19/11 (doc. COPABE)", p: "—", k: "cerimônia abertura encerramento uniforme roster ftr substituição" },

  { c: "Jogo",
    t: "Regras de campo (ground rules)",
    r: "Discutidas no primeiro dia, antes de cada jogo. Depois a organização envia um documento a todos os times.",
    d: [],
    ref: "Congresso técnico 19/11", p: "—", k: "ground rules regras de campo terreno" }
];

window.PENDENCIAS_OLD = [
  "Levar os passaportes dos 18 atletas: a elegibilidade (nascidos em 2014 e 2015) é conferida no congresso.",
  "Horário da cerimônia de abertura: o calendário atualizado diz 11:45; o documento de informações diz 15:00.",
  "Critérios de desempate na classificação dos grupos (não estão neste livro de regras).",
  "Bola oficial do torneio (ainda a anunciar).",
  "Se haverá relógio de arremesso (pitch clock) e de intervalo no evento.",
  "Se a regra de diferença de placar vale na final do Pan.",
  "Lista de tacos aprovados e como será a checagem.",
  "Como a regra de eletrônicos (A3.1) será aplicada no banco.",
  "Horários e campos da Super Ronda e da Ronda de Classificação.",
  "Como sai o relatório diário de arremessadores indisponíveis."
];

window.PENDENCIAS = [
  "Ronda de Classificação: confirmar se o jogo da 1ª fase contra o 3º do Grupo A conta na classificação do 7º ao 12º (na Super Ronda, conta).",
  "Desempate dos grupos: o app usa o padrão WBSC (confronto direto, TQB...). Confirmar com o Comissário se houver empate.",
  "Sorteio de mandante hoje (22/11), na área da Comissão Técnica do Estádio 2, 10 min após EUA × NCA e DOM × CUW. Define Brasil × Peru (24/11) e Brasil × Argentina (26/11). Mandar alguém da comissão.",
  "Horários e campos da Super Ronda e da Ronda de Classificação.",
  "Documento de regras de campo (ground rules), que a organização vai enviar."
];
window.ROTINA = [
  ["Na véspera", "Anunciar o arremessador inicial no grupo de WhatsApp até 1 hora depois do último jogo do dia. Depois disso, troca só com motivo válido e aprovação da Comissão Técnica."],
  ["Banco", "Mandante no banco da 3ª base; visitante no banco da 1ª base. Cada jogo do Brasil mostra o lado na aba Jogos."],
  ["90 min antes", "Entregar o line-up aos Comissários Técnicos, com nome completo e número de todos, reservas incluídos."],
  ["Pré-jogo", "30 min de rebatida na gaiola e 10 min de infield em campo alternativo (mandante primeiro). Sair do campo de jogo 60 min antes."],
  ["Equipamento", "Sem chuteira de travas de metal (atletas e técnicos). Capacete de dupla aba. Cartão de jogadas só de papel."],
  ["No banco", "Celular e smartwatch guardados. Nenhum aparelho eletrônico durante o jogo."],
  ["Durante o jogo", "3 visitas defensivas e 3 reuniões ofensivas. Aviso do Comissário aos 65 arremessos. Protesto custa US$ 200."]
];
