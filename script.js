//Variáveis para guardar os textos da textarea1 e 2.
let texto = document.getElementById("areatext1");
let texto1 = document.getElementById("areatext2");
//Variáveis para guardar as mensagens da textarea2.
let mensagem1 = document.querySelector("mensagem");
let mensagem2 = document.querySelector("paragrafo");
//Variáveis dos botões
let botaoCriptografar = document.getElementById("criptografar");
let botaoDesriptografar = document.getElementById("descriptografar");
let botaoCopiar = document.getElementById("copiar");

//variável para a imagem da textarea2.
let imagem = document.querySelector("#resultado img");

//botoes com a função onclick
botaoCriptografar.onclick = criptografa;
botaoDesriptografar.onclick = descriptografa;
botaoCopiar.onclick = copiar;


//Função para criptografar
function criptografa(){
    let textoCriptografado = texto.value;
     
    let resultado = textoCriptografado
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    texto1.value = resultado;

//Código que faz sumir os elementos assim que a função é chamada.
    imagem.style.display = "none";
    mensagem.style.display = "none";
    paragrafo.style.display = "none";
}
//Função para descriptografar
function descriptografa(){
    let textoCriptografado = texto.value;
     
    let resultado = textoCriptografado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    texto1.value = resultado;
}

//Função para copiar
function copiar(){
    conteudo = document.getElementById("areatext2");

    conteudo.select();
    document.execCommand("cut");
    alert("Texto copiado.");

}

let carateres = texto1.length;

if (carateres >= 1){
    
} else {
    imagem.style.display = "block";
}



