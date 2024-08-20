const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você costuma mentir?",
        alternativas: [
            {
                texto: "com frequencia",
                afirmacao: "gay afirmado"
            },
            {
                texto: "nunca minto",
                afirmacao: "vc é gay pois vc mentiu"
            }
        ]
    },
    {
        enunciado: "sente atrações por pessoas do mesmo gênero?",
        alternativas: [
            {
                texto: "claramente",
                afirmacao: "não esperava menos"
            },
            {
                texto: "obviamente não",
                afirmacao: "gay sempre mente"
            }
        ]
    },
    {
        enunciado: "você é amostradinho?",
        alternativas: [
            {
                texto: "obviamente",
                afirmacao: "como vc sabe oq isso significa?"
            },
            {
                texto: "nem sei oq é só uso",
                afirmacao: "te entendo"
            }
        ]
    },
    {
        enunciado: "vc precisa de tratamentos psicologicos?",
        alternativas: [
            {
                texto: "faz tempo",
                afirmacao: "todos precisamos"
            },
            {
                texto: "sempre precisei",
                afirmacao: "voltar pro caps é mais doq real"
            }
        ]
    },
    {
        enunciado: "quem o Kawã gosta mais?",
        alternativas: [
            {
                texto: "Rayssa",
                afirmacao: "nada tóxico eu diria"
            },
            {
                texto: "Leticia <3",
                afirmacao: "pelos velhos tempos né"
            }
        ]
    },
];

//Declaração de variáveis
let atual = 0; //variável que mantem o inice da pergunta atual no array 'perguntas'
let perguntaAtual; // variável que armazena a pergunta atual
let historiaFinal = ""; //String que acumula as afirmações selecionadas pelo usuário, formando uma narrativa final.

//Essa função tem como objetivo exibir a pergunta atual ou o resultado final se todas as perguntas tiverem sido respondidas.
function mostraPergunta() {
    if (atual >= perguntas.length) { //Verifica se o índice atual excede o número de perguntas disponíveis. Se sim, chama mostraResultado e retorna, encerrando a função.
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual]; //Atribui à variável perguntaAtual a pergunta atual do array perguntas.
    caixaPerguntas.textContent = perguntaAtual.enunciado; //Define o conteúdo de texto do elemento caixaPerguntas como o enunciado da pergunta atual.
    caixaAlternativas.textContent = ""; //Limpa o conteúdo do elemento caixaAlternativas.
    mostraAlternativas(); //Chama a função mostraAlternativas para exibir as alternativas da pergunta atual.
}

//Essa função tem como cobjetivo exibir as alternativas da pergunta atual como botões e definir a ação ao clicar neles.
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) { // Itera sobre cada alternativa da pergunta atual.
        const botaoAlternativas = document.createElement("button"); //Cria um novo elemento de botão para cada alternativa.
        botaoAlternativas.textContent = alternativa.texto; //Define o texto do botão como o texto da alternativa.
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); //Adiciona um ouvinte de eventos ao botão, que chama a função respostaSelecionada passando a alternativa selecionada quando o botão é clicado.
        caixaAlternativas.appendChild(botaoAlternativas); //Adiciona o botão ao elemento caixaAlternativas.
    }
}

//Essa função tem como objetivo processar a resposta selecionada, atualizar a narrativa final e avançar para a próxima pergunta.
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao; //Obtém a afirmação associada à alternativa selecionada.
    historiaFinal += afirmacoes + " "; //Adiciona a afirmação à historiaFinal.
    atual++; //Incrementa o índice da pergunta atual.
    mostraPergunta(); //Chama a função mostraPergunta para exibir a próxima pergunta.
}

//Essa função tem como objetivo exibir a narrativa final baseada nas respostas do usuário.
function mostraResultado() {
    caixaPerguntas.textContent = "seu feitiço final saiu essa merda ai se vira pra traduzir"; //Define o conteúdo de texto do elemento caixaPerguntas para informar o usuário sobre o resultado.
    textoResultado.textContent = historiaFinal; //Define o conteúdo de texto do elemento textoResultado como a narrativa final acumulada.
    caixaAlternativas.textContent = ""; // Limpa o conteúdo do elemento caixaAlternativas.
}

mostraPergunta(); //Chama a função mostraPergunta para iniciar o questionário exibindo a primeira pergunta.
