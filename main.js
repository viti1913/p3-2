const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPrincipal = document.querySelector(".caixa-perguntas");
const caixaPrincipal = document.querySelector(".caixa-alternativas");
const caixaPrincipal = document.querySelector(".caixa-resultado");
const caixaPrincipal = document.querySelector(".texto-resultado");
const perguntas = [ //abre uma lista de perguntas
    { //abre objeto de pergunta
        enunciado: "Pergunta 1",
        alternativas: ["Alternativa 1", "Alternativa 2"],
    },
    {
        enunciado: "Pergunta 2",
        alternativas: ["Alternativa 1", "Alternativa 2"],
    }, 
    {
        enunciado: "Pergunta 3",
        alternativas: ["Alternativa 1", "Alternativa 2"],
    }, //fecha objeto de pergunta
]; //fecha lista de pergunta

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();

const caixaPerguntas = document.querySelector(".caixa-perguntas");