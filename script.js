const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Sua equipe está enfrentando dificuldades para venccer o time adversário que tem um bloqueio muito eficciente. Seu técnico decide ajustar a estratégia para superar esse desafio. Como você ajustaria sua abordagem ofensiva para superar esse desafio?",
        alternativas: [
            {
                texto: "Para superar um bloqueio forte, eu ajustaria minha abordagem ofensiva usando ataques rápidos e variando a altura e a direção dos meus golpes para evitar o bloqueio adversário."
                afirmacao: "Usar ataques rápidos e variar a altura e a direção dos golpes,  além de coordenar estratégias ofensivas com a equipe, são abordagens eficazes para superar um bloqueio forte."},
            {
                texto: "Eu focaria em explorar os pontos fracos do bloqueio adversário, usando ataques mais direcionados e mudanças rápidas de ritmo.",
                afirmacao: "Explorar os pontos fracos do bloqueio adversário e manter uma comunicação clara e planejada com a equipe são  essenciais para ajustar as táticas e melhorar."
            }
        ]
    },
    {
        enunciado: "Durante uma partida de vôlei, sua equipe em um momento crucial do jogo. O placar está empatado no quinto set, e o próximo ponto será decisivo para a vitória. A bola é levantada para o atacante da sua equipe, mas a defesa adversária está bem posicionada para o bloqueio. Em que situação você se sentiria mais confiante para usar uma técnica espicífica de ataque para superar o bloqueio adversário?",
        alternativas: [
            {
                texto: "Eu me sentiria mais confiante em utilizar a cortada diagonal quando percebo que o bloqueio adversário está centralizado, deixando as laterais da quadra mais vulneráveis.",
                afirmacao: "A cortada diagonal é uma jogada que aproveita os espaços deixados pelo bloqueio centralizado, aumentando as chances de sucesso em momentos críticos."
            },
            {
                texto: "Eu optaria por uma largada quando noto que o bloqueio adversário está muito fechado e alto, focando apenas na força do ataque.",
                afirmacao: "A largada é uma escolha inteligente para surpreeender o adversário, explorando áreas vulneráveis logo atrás do bloqueio."
            }
        ]
    },
    {
        enunciado: "Durante uma partida de futebol, sua equipe está perdendo por 1 a 0, faltando 10 minutos para o fim do jogo. O técnico decide mudar a formação tática para pressionar o adversário em busca do gol de empate. Qual formação você escolheria para aumentar as chances de empatar o jogo?",
        alternativas: [
            {
                texto: "Eu optaria por uma formação 3-4-3, pois ela adiciona mais atacantes e meio-campistas ofensivos, permitindo maior pressão sobre a defesa adversária e aumentando as opções de ataques.",
                afirmacao: "A formação 3-4-3 é eficaz para intensificar a pressão sobre a defesa adversária, aumentando as oportunidades de ataque, mesmo que isso deixe a equipe mais vulnerável de sofrer conta-ataques."
            },
            {
                texto: "Eu escolheria uma formação 4-2-4, pois ao adicionar mais jogadores no ataque, podemos explorar melhor os espaços e criar mias oportunidades de gol.",
                afirmacao: "A formação 4-2-4 pode ser uma boa estratégia para criar mais chances de gol e dominar o jogo, apesar do risco aumentado de sofrer contra-ataques."
            }
        ]
    },
    {
        enunciado: "Sua equiped está vencendo por 2 a 1 e restamm 15 minutos para o fim do jogo. O técnico decide reforçar a defesa parra proteger a vantagem. Qual seria sua abordagem para reforçar a defesa e garantir a vitória?",
        alternativas: [
            {
                texto: "Eu focaria em manter uma formação defensiva compacta, como o 4-4-2, para garantir que todos os espaços fossem cobertos.",
                afirmacao: "Manter uma formação defensiva compacta e exigir que os atacantes ajudem na marcação são estratégias eficazes para reforçar a defesa e garantir a vitória nos minutos finais de uma partida."
            },
            {
                texto: "Eu optaria por orientar a equipe a manter a posse de bola sempre que possível, utilizando passes curtos e controle no meio-campo para reduzir a pressão do adverrsário",
                afirmacao: "Focar na posse de bola e na comunicação constante entre os jogadores é crucial para controlar o jogo e fortalecer a defesa, minimizando o risco de sofrer um gol nos momentos finais."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
