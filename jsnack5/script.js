//Dichiariamo gli array con const. L'array totale viene dichiarato con let per consentirne l'assegnazione successiva degli array concatenati.

const arrayEven=[];
const arrayOdd=[];
let arrayTotal=[];

let num;
let arrayMessage = document.getElementById('msgArray');

//La funzione getNumber() richiede un input numerico dall'utente, ripetendosi se l'input non è valido. Controlla poi se il valore è pari o dispari e lo mette
//nell'array apposito.

function getNumber(){
    num = prompt("Inserisci un numero");
    num = parseInt(num);
    while(isNaN(num)){

        num = null;
        num = prompt("Numero non valido, riprova");
        num = parseInt(num);
    }

    if(num%2 === 0){
        arrayEven.push(num);
    } else {
        arrayOdd.push(num);
    }
}

//Chiediamo 6 numeri all'utente.

for(i=0; i<6; i++){
    getNumber();
}

//Concateniamo i due array, mettendo i numeri pari per primi.
//Non sono certo che sia la soluzione più efficace, ma il sorting degli array richiede un tantino più tempo.

arrayTotal = arrayEven.concat(arrayOdd);

//Stampiamo i numero dell'array completo.

for(i=0; i<arrayTotal.length; i++){
    arrayMessage.innerHTML += arrayTotal[i] + " ";
}