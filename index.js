let inicio = document.querySelector(".container")
let gracias = document.querySelector(".container-gracias")
let submit = document.getElementById("submitBtn")

submit.addEventListener("click", () => {
    gracias.classList.remove("hidden")
    inicio.style.display = "none"
})

let botonesNum = document.querySelectorAll(".btn")
let selectedNumSpan = document.querySelector("#selected");

let numero = 0

botonesNum.forEach((boton) => {
    
    boton.addEventListener("click", (event) => {

        botonesNum.forEach((btn) => {
            btn.classList.remove("active");
        });

        event.target.classList.add("active");
        
        numero = event.target.dataset.num;
        selectedNumSpan.innerHTML = numero;
    })
    
})





