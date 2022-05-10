let numero = 0

function aumentar() {
	numero = numero + 1
    console.log(numero)
    mostrarNaTela()
}

function diminuir() {
	numero = numero - 1
    console.log(numero)
    mostrarNaTela()
}

function mostrarNaTela(){
const h2 = document.querySelector("h2")
console.log(h2)
h2.innerText = numero
}

mostrarNaTela()