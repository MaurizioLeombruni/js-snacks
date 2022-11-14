const arrayGuests = ['giovanni', 'antonio', 'gennaro', "alessia", "pasqualina", "federica", "soreta"];
let guestName;
let infoMessage = document.getElementById('msgInfo');

//Chiediamo il nome dell'utente.

guestName = prompt("Inserisci il tuo nome");

//Trasformiamo l'input in tutte minuscole, poi si controlla se l'input è uguale a uno dei nomi dell'array. Si risponde di conseguenza.
//L'array è già fatto di tutte minuscole per comodità, ma toLowerCase() può essere applicato sia alla variabile che all'elemento dell'array.

if (arrayGuests.includes(guestName.toLowerCase())){
    infoMessage.innerHTML = "Entra pure.";
} else {
    infoMessage.innerHTML = "Il tuo nome non è nella lista degli invitati.";
}
