// Variáveis para guardar os textos da textarea1 e 2.
const textarea1 = document.getElementById("areatext1");
const textarea2 = document.getElementById("areatext2");
// Variáveis para guardar as mensagens da textarea2.
const mensagem1 = document.querySelector(".mensagem");
const mensagem2 = document.querySelector(".paragrafo");
// Variáveis dos botões.
const botaoCriptografar = document.getElementById("criptografar");
const botaoDescriptografar = document.getElementById("descriptografar");
const botaoCopiar = document.getElementById("copiar");

// Variável para a imagem da textarea2.
const imagem = document.querySelector("#resultado img");

//botoes com a função onclick
botaoCriptografar.onclick = criptografa;
botaoDesriptografar.onclick = descriptografa;
botaoCopiar.onclick = copiar;


// Função para criptografar.
function criptografa() {
const textoCriptografado = textarea1.value;
const resultado = textoCriptografado
.replaceAll('e', 'enter')
.replaceAll('i', 'imes')
.replaceAll('a', 'ai')
.replaceAll('o', 'ober')
.replaceAll('u', 'ufat');
textarea2.value = resultado;

// Esconde os elementos da mensagem.
imagem.style.display = 'none';
mensagem1.style.display = 'none';
mensagem2.style.display = 'none';
    
// Verifica se o texto foi criptografado com sucesso.
if (resultado.length >= 1) {
alert('Texto criptografado com sucesso!');
} else {
mensagem1.style.display = 'block';
mensagem1.textContent = 'Não foi possível criptografar o texto.';
}
}
//Função para descriptografar
function descriptografa(){
const textoCriptografado = textarea1.value;
const resultado = textoCriptografado
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

const carateres = texto1.length;

if (carateres >= 1){
    
} else {
    imagem.style.display = "block";
}



