let sum = 0;
let num;
const arrayNum = [];
let messageSum = document.getElementById('msgSum');
let messageMax = document.getElementById('msgMax');
let messageMin = document.getElementById('msgMin');
let messageAverage = document.getElementById('msgAverage');

//La funzione getNumber chiede un input numerico dall'user. Se un valore non valido viene inserito, pulisce la variabile e chiede all'utente di
//provare di nuovo fino all'inserimento di un valore valido.

function getNumber(){
    num = prompt("Inserisci un numero");
    num = parseInt(num);
    while(isNaN(num)){

        num = null;
        num = prompt("Numero non valido, riprova");
        num = parseInt(num);
    }
    arrayNum.push(num);
}

//Chiama la funzione getNumber per 10 volte.

for(i=0; i<10; i++){
    getNumber();
}

//Effettua la somma per ogni numero inserito nell'array.

for (i=0; i<arrayNum.length; i++){
    sum = sum + arrayNum[i];
}

//Fa apparire gli appositi messaggi nell'HTML.

console.log(arrayNum.length);
messageSum.innerHTML = "La somma è pari a " + sum;
messageMax.innerHTML = "Il valore massimo inserito è: " + Math.max(...arrayNum);
messageMin.innerHTML = "Il valore minimo inserito è: " + Math.min(...arrayNum);
messageAverage.innerHTML = "La media dei valori inserita è: " + (sum / arrayNum.length);