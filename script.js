const numeroEl = document.getElementById("numero");
const incrementoEl = document.getElementById("numero_incremento");
const bottonePlus = document.getElementById("plus");
const bottoneMinus = document.getElementById("minus");
const bottoneReset = document.getElementById("reset");
const bottoneIncr = document.getElementById("incrementa"); // Corretto l'ID

let numero = 0;
let numero_incremento = 1;

function aggiornaIncr(){
    incrementoEl.textContent = numero_incremento; 
}

function aggiornaNumero() {
    numeroEl.textContent = numero;
}

bottonePlus.addEventListener("click", () => {
    numero = numero + numero_incremento;
    aggiornaNumero();
});

bottoneMinus.addEventListener("click", () => {
    numero = numero - numero_incremento;
    if (numero < 0){
        numero = 0;
    }
    aggiornaNumero();
    
});

bottoneReset.addEventListener("click", () => {
    numero = 0;
    aggiornaNumero();
})

bottoneIncr.addEventListener("click", () => {
    numero_incremento = numero_incremento * 10;
    if (numero_incremento > 1000){
        numero_incremento = 1;
    }  
    aggiornaIncr();
});

aggiornaIncr();
aggiornaNumero();
