const numeroEl = document.getElementById("numero");
const bottonePlus = document.getElementById("plus");
const bottoneMinus = document.getElementById("minus");
const bottoneReset = document.getElementById("reset");

let numero = 0;


function aggiornaNumero() {
    numeroEl.textContent = numero;
}


bottonePlus.addEventListener("click", () => {
    numero++;
    aggiornaNumero();
});

bottoneMinus.addEventListener("click", () => {
    if (numero > 0) {
        numero--;
        aggiornaNumero();
    }
});

bottoneReset.addEventListener("click", () => {
    numero = 0;
    aggiornaNumero();
})


aggiornaNumero();
