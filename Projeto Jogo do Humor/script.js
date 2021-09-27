const textoHumor = document.querySelector("#titulo");
const botao = document.querySelector("#alterar");
const elementoImagem = document.querySelector("#imagem");

botao.addEventListener("click", function() {
if (botao.value === "primeiro") {
    elementoImagem.src = "feliz.jpg";
    titulo.innerText = "Pareço estar feliz? Olha... até que estou!";
    botao.value = "segundo"
} else if (botao.value === "segundo") {
    elementoImagem.src = "apaixonado.jpg";
    titulo.innerText = "Hummm, até que te achei bonitinho(a), acho que estou apaixonado S2"
    botao.value = "terceiro"
} else if (botao.value === "terceiro") {
    elementoImagem.src = "impressionado.jpg"
    titulo.innerText = `Você me deixa impressionado com a falta de consideração comigo.
                        PARA DE CLICAR NESTE BOTÃO!!`;
    botao.value = "quarto"
} else {
    elementoImagem.src = "raiva.jpg"
    titulo.innerText = "SOME DAQUI!! QUE RAIVA... SEU SEM NOÇÃO."
    botao.value = "primeiro"
}
}
);