// Seleciona os elementos pelo ID
var setaDireita = window.document.getElementById("seta-direita");
var Leonardo = window.document.getElementById("Leonardo");
var Samantha = window.document.getElementById("Samantha");
var Bruna = window.document.getElementById("Bruna");
var setaEsquerda = window.document.getElementById("seta-esquerda");

// Função para rolar para a direita
function RolarParaDireita() {
    // Oculta o elemento Leonardo
    Leonardo.style.display = "none";
    // Exibe o elemento Bruna
    Bruna.style.display = "flex";
    // Oculta a seta direita
    setaDireita.style.display = "none";
    // Exibe a seta esquerda
    setaEsquerda.style.display = "flex";
    setaEsquerda.style.marginTop = "55px";
}

function RolarParaEsquerda() {

    Leonardo.style.display = "flex";
    Bruna.style.display = "none";
    setaDireita.style.display = "flex";
    setaDireita.style.marginTop = "55px";
    setaEsquerda.style.display = "none";

}