const texto = document.getElementById("texto")
const botao = document.getElementById("mudarEstilo")

botao.addEventListener("click" , () => {
    texto.classList.add("destaque")
    texto.style.color = "blue"
    texto.style.fontSize = "24px"
})