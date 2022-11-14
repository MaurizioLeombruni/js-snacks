let numFirst;
let numPlayer;
let numCPU;
let infoTotal = document.getElementById('msgTotal');
let infoResults = document.getElementById('msgResults');

//Chiediamo un input numerico all'utente, ripetendo se l'input non è valido. Stampiamo poi il numero scelto.

function getTotal(){
    numFirst = prompt("Inserisci il valore massimo da randomizzare");
    numFirst = parseInt(numFirst);
    while(isNaN(numFirst)){

        numFirst = null;
        numFirst = prompt("Numero non valido, riprova");
        numFirst = parseInt(numFirst);
    }

    infoTotal.innerHTML = "Il numero massimo scelto è: " + numFirst
}

//Richiamiamo la funzione.

getTotal();

//Randomizziamo un numero sia per il player che per il computer.

numPlayer = Math.floor(Math.random() * numFirst);
numCPU = Math.floor(Math.random() * numFirst);

//numPlayer = parseInt(numPlayer);
//numCPU = parseInt(numCPU);

//Stampiamo il risultato. Il player vince se ha lo stesso numero del computer.

if(numPlayer === numCPU){
    infoResults.innerHTML = "Hai vinto! Il numero era " + numPlayer;
} else {
    infoResults.innerHTML = "Hai perso. Il tuo numero è " + numPlayer + ", mentre il numero vincente era " + numCPU;
}
