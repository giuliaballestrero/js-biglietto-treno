
//chiedo all'utente i km  che vuole percorrere
const numeroKm = prompt ('Quanti km devi percorrere?');

//chiedo all'utente la sua età
const userAge = prompt ('Quanti anni hai?');

//calcolo il prezzo del biglietto in base ai km 

let ticketPrice = (numeroKm * 0.21);

//definisco gli sconti 
let sconto20 = ((ticketPrice * 20) / 100);
let sconto40 = ((ticketPrice * 40) / 100);

//definisco il prezzo finale
if (userAge < 18) {
    ticketResult = (ticketPrice - sconto20);
} else if (userAge > 65 ) {
    ticketResult = (ticketPrice - sconto40);
} else {
    ticketResult = ticketPrice;
}

//scrivo il prezzo finale sul documento
document.getElementById('prezzo-biglietto') .innerHTML = 'Il prezzo del tuo biglietto è: ' + ticketResult.toFixed(2) + '&euro;';

console.log (ticketResult);