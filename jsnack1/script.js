let numFirst = prompt("Inserisci il primo numero");
let numSecond = prompt("Inserisci il secondo numero");
let message = document.getElementById('jsMessage');

numFirst = parseInt(numFirst);
numSecond = parseInt(numSecond);

message.innerHTML = "The bigger number is: " +  Math.max(numFirst, numSecond);