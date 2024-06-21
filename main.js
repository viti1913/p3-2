const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pergunta 1",
        alternativas: [
            {
                texto: "Texto 1.1",
                afirmacao: "Afirmação 1.1"
            },
            {
                texto: "Texto 1.2",
                afirmacao: "Afirmação 1.2"
            }
        ]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            {
                texto: "Texto 2.1",
                afirmacao: "Afirmação 2.1"
            },
            {
                texto: "Texto 2.2",
                afirmacao: "Afirmação 2.2"
            }
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "Texto 3.1",
                afirmacao: "Afirmação 3.1"
            },
            {
                texto: "Texto 3.2",
                afirmacao: "Afirmação 3.2"
            }
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            {
                texto: "Texto 4.1",
                afirmacao: "Afirmação 4.1"
            },
            {
                texto: "Texto 4.2",
                afirmacao: "Afirmação 4.2"
            }
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            {
                texto: "Texto 5.1",
                afirmacao: "Afirmação 5.1"
            },
            {
                texto: "Texto 5.2",
                afirmacao: "Afirmação 5.2"
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
