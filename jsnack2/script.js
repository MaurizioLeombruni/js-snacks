let first = prompt("Scrivi qualcosa");
let second = prompt("Scrivi qualcos'altro");
let firstMessage = document.getElementById('firstMessage');
let secondMessage = document.getElementById('secondMessage');

if (second.length <= first.length){
    firstMessage.innerHTML = first;
    secondMessage.innerHTML = second;
} else {
    firstMessage.innerHTML = second;
    secondMessage.innerHTML = first;
}