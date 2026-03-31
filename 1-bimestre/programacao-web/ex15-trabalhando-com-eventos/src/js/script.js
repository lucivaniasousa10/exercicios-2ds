const form = document.getElementById("formulario")
const nome = document.getElementById("nome")
const idade = document.getElementById("idade")
const resultado = document.getElementById("resultado")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    resultado.textContent = `Olá ${nome.value}, você tem ${idade.value} anos`
})