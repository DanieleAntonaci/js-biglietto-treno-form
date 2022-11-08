let kmDaPercorrere = document.getElementById('kmDaPercorrere').value;
let etaPasseggero = document.getElementById('age').value;
let btnGenera = document.getElementById('btnGenera');

btnGenera.addEventListener('click', function () {
    document.querySelector('h2').innerHTML = kmDaPercorrere + etaPasseggero
})
/*
// calcolare il prezzo 0,21 €
let prezzoViaggio = kmDaPercorrere * 0.21;
let prezzoScontatoViaggio;

// se hanno un eta differente cambia il prezzo e stampa il risultato
if (etaPasseggero < 18) {
    prezzoScontatoViaggio = (prezzoViaggio - (prezzoViaggio * 0.2)).toFixed(2);
}
else if (etaPasseggero >= 65) {
    prezzoScontatoViaggio = (prezzoViaggio - (prezzoViaggio * 0.4)).toFixed(2);
};
*/

// // messaggio di risposta alla richiesta
// document.getElementById('prezzo_viaggio').innerHTML = `Salve, per percorrere ${kmDaPercorrere}km, coniderata la sua et&aacute; di ${etaPasseggero} anni, il prezzo del biglietto sar&aacute; di ${prezzoScontatoViaggio || prezzoViaggio}&euro;`;

