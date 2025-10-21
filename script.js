const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave(){
    const texto = document.querySelector("#entrada-de-texto").value;
    const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavras = processaTexto(texto);

    campoResultado. textContent = mostraPalavrasChave.join(", ")
}

function processaTexto(texto){
let palavras = texto.split(/)

return palavras;
}