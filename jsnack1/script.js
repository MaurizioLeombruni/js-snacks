let numFirst;
let numSecond;
let message = document.getElementById('jsMessage');

//La funzione getNumbers() richiede l'input dei numeri all'utente, ripetendo la richiesta se il numero inserito non è valido.

function getNumbers(){

    numFirst = prompt("Inserisci il primo valore");
    numFirst = parseInt(numFirst);
    while(isNaN(numFirst)){

        numFirst = null;
        numFirst = prompt("Numero non valido, riprova");
        numFirst = parseInt(numFirst);
    }

    numSecond = prompt("Inserisci il secondo valore");
    numSecond = parseInt(numSecond);

    while(isNaN(numSecond)){
        numSecond = null;
        numSecond = prompt("Numero non valido, riprova");
        numSecond = parseInt(numSecond);
    }
}

//Richiamiamo la funzione.

getNumbers();

//Stampiamo il massimo tra i due numeri.

message.innerHTML = "The bigger number is: " +  Math.max(numFirst, numSecond);