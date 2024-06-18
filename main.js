// const: constante que guarda uma lista de objetos (perguntas, alternativas...)
// dentro dos [], cada {} é um objeto
const caixaPrincipal = document.querySelector(".caixa-principal"); //seleciona a classe caixa-principal do HTML
const caixaPerguntas = document.querySelector(".caixa-perguntas"); //seleciona a classe caixa-perguntas do HTML
const caixaAlternativas = document.querySelector(".caixa-alternativas"); //seleciona a classe caixa-alternativas do HTML
const caixaResultado = document.querySelector(".caixa-resultado"); //seleciona a classe caixa-resultado do HTML
const textoResultado = document.querySelector(".texto-resultado"); //seleciona a classe texto-resultado do HTML

const perguntas = [ //abre uma lista de perguntas
    { //abre objeto de pergunta
        enunciado: "Pergunta 1",
        alternativas: [
        {
            texto: "Sei que sei que lá",
            afirmacao: "Afirmação"
        },
        {
            texto: "Ah que não sei que sei que",
            afirmacao: "Afirmação",
        },
    ]
    }, //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "Pergunta 2",
        alternativas: [
        {
            texto: "Que não sei que sei que lá",
            afirmacao: "Afirmação"
        },
        {
            texto: "Sei lá sei que",
            afirmacao: "Afirmação",
        },
    ]
    }, //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "Pergunta 3",
        alternativas: [
        {
            texto: "Bla bla bla bla",
            afirmacao: "Afirmação"
        },
        {
            texto: "",
            afirmacao: "Afirmação",
        },
    ]
    } //fecha objeto de pergunta
]; //fecha lista de pergunta

let atual = 0; //variável marcador de posição; começa pela pergunta 1
let perguntaAtual; //variável que vai receber o texto

function mostraPergunta(){ //função que faz aparecer a pergunta
    perguntaAtual = perguntas[atual]; //declara a variável
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atuall++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraAlternativas();