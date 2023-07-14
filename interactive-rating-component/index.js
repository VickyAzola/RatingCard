let inicio = document.querySelector(".container")
let gracias = document.querySelector(".container-gracias")
let submit = document.getElementById("submitBtn")

submit.addEventListener("click", () => {
    gracias.classList.remove("hidden")
    inicio.style.display = "none"
})

let botonesNum = document.querySelectorAll(".btn")
let selectedNumSpan = document.querySelector("#selected");

let numero = 0;

botonesNum.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
        numero = evento.target.dataset.num;
        selectedNumSpan.innerHTML += numero
    })
})
