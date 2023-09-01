// PRENDO GLI ELEMNTI CON CUI VOGLIO INTERAGIRE DAL DOM
const numeroEl = document.getElementById("numero");
const incrementoEl = document.getElementById("numero_incremento");
const bottonePlus = document.getElementById("plus");
const bottoneMinus = document.getElementById("minus");
const bottoneReset = document.getElementById("reset");
const bottoneIncr = document.getElementById("incrementa"); 

// VARIABILI ---------------------------
let numero = 0;
let numero_incremento = 1;
let limite = 999999999;
let pokeballIndex = 0;

// GESTIONE IMMAGINI POKEBALL ------------------------
console.log(pokeballIndex, bottoneReset.src);
const pokeballs = [ "./img/1ball.png","./img/2ball.png","./img/3ball.png","./img/4ball.png"];
bottoneReset.src = pokeballs[0];


// FUNZIONI----------------------------------------------

// Cambio immagine della pokebal
function changePokeball() {
    bottoneReset.src = pokeballs[pokeballIndex];
    // Incrementa l'indice e riavvolge se raggiunge la fine dell'array
    pokeballIndex = (pokeballIndex + 1) % pokeballs.length;
    console.log(pokeballIndex,bottoneReset.src);
  }

function aggiornaIncr(){
    incrementoEl.textContent = numero_incremento; 
}

function aggiornaNumero() {
    numeroEl.textContent = numero;
}

// Bottone incremento
bottonePlus.addEventListener("click", () => {
    numero = numero + numero_incremento;
    if (numero > limite){
        numero = limite;
    }
    aggiornaNumero();
});


// Bottone decremento
bottoneMinus.addEventListener("click", () => {
    numero = numero - numero_incremento;
    if (numero < 0){
        numero = 0;
    }
    aggiornaNumero();
    
});

// Azzero counter
bottoneReset.addEventListener("click", () => {
    numero = 0;
    aggiornaNumero();
})

// Cambio valore dell'incremento del counter ad ogni click
bottoneIncr.addEventListener("click", () => {
    numero_incremento = numero_incremento * 10;
    if (numero_incremento > 1000){
        numero_incremento = 1;
    }  
    aggiornaIncr();
    changePokeball();
});

// Richiamo funzioni per setting globali
changePokeball();
aggiornaIncr();
aggiornaNumero();
