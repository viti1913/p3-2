// Para começar a escrever, precisamos trazer os elementos que criamos no HTML para o JavaScript. 
// Para fazer isso, utilizamos uma constante (const), porque este valor não vai mudar mais.

const caixaPrincipal = document.querySelector(".caixa-principal"); //constante caixa-principal do HTML
const caixaPerguntas = document.querySelector(".caixa-perguntas"); //constante caixa-perguntas do HTML
const caixaAlternativas = document.querySelector(".caixa-alternativas"); //constante caixa-alternativas do HTML
const caixaResultado = document.querySelector(".caixa-resultado"); //constante caixa-resultado do HTML
const textoResultado = document.querySelector(".texto-resultado"); //constante texto-resultado do HTML

// dentro dos [], cada {} é um objeto

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            {
                texto: "Texto 1.1",
                afirmacao: "Afirmação 1"
            },
            {
                texto: "Texto 1.2",
                afirmacao: "Afirmação 2"
            }
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "Texto 2.1",
                afirmacao: "Afirmação 1"
            },
            {
                texto: "Texto 2.2",
                afirmacao: "Afirmação 2"
            }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "Texto 3.1",
                afirmacao: "Afirmação 1"
            },
            {
                texto: "Texto 3.2",
                afirmacao: "Afirmação 2"
            }
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            {
                texto: "Texto 4.1",
                afirmacao: "Afirmação 1"
            },
            {
                texto: "Texto 4.2",
                afirmacao: "Afirmação 2"
            }
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            {
                texto: "Texto 5.1",
                afirmacao: "Afirmação 1"
            },
            {
                texto: "Texto 5.2",
                afirmacao: "Afirmação 2"
            }
        ]
    },
];

let atual = 0; //variável marcador de posição; começa pela pergunta 1
let perguntaAtual; //variável que vai receber o texto
let historiaFinal = ""; //variável que vai receber a historia


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