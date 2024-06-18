// const: contante que guarda uma lista de objetos (perguntas, alternativas...)
// dentro dos [] cada {} é um objeto
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [ //abre uma lista de perguntas
    { //abre objeto de pergunta
        enunciado: "Pergunta 1",
        alternativas: ["Alternativa 1", "Alternativa 2"]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: ["Alternativa 3", "Alternativa 4"]
    }, 
    {
        enunciado: "Pergunta 3",
        alternativas: ["Alternativa 5", "Alternativa 6"]
    } //fecha objeto de pergunta
]; //fecha lista de pergunta

let atual = 0; //marcador de posição; começa pela pergunta 1
let perguntaAtual; //variável que vai receber o texto

function mostraPergunta(){ //função que faz aparecer a pergunta
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
mostraPergunta();
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraAlternativas();