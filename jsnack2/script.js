let first = prompt("Scrivi qualcosa");
let second = prompt("Scrivi qualcos'altro");
let firstMessage = document.getElementById('firstMessage');
let secondMessage = document.getElementById('secondMessage');

//Stampiamo prima il messaggio più lungo, poi quello più corto. Se sono uguali viene stampato in ordine di immissione.

if (second.length <= first.length){
    firstMessage.innerHTML = first;
    secondMessage.innerHTML = second;
} else {
    firstMessage.innerHTML = second;
    secondMessage.innerHTML = first;
}