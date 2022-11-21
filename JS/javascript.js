
//chiedo all'utente i km  che vuole percorrere
const numeroKm = prompt ('Quanti km devi percorrere?');

//chiedo all'utente la sua età
const userAge = prompt ('Quanti anni hai?');

//calcolo il prezzo del biglietto in base ai km 
let ticketPrice = (numeroKm * 0.21);

//definisco gli sconti in base alle fasce d'età
if (userAge < 18 ) {
    ticketPrice = (ticketPrice - (ticketPrice * 20 / 100));
} else if (userAge > 65 ) {
    ticketPrice = (ticketPrice - (ticketPrice * 40 / 100));
}

//scrivo il prezzo finale sul documento
document.getElementById('prezzo-biglietto') .innerHTML = 'Il prezzo del tuo biglietto è: ' + ticketPrice.toFixed(2) + '&euro;';

console.log (ticketPrice);