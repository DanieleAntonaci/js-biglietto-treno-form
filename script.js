let kmDaPercorrere = document.getElementById('km-da-percorrere').value;
let etaPasseggero = document.getElementById('eta-passeggero').value;
let btnGenera = document.getElementById('btnGenera');
// calcolare il prezzo 0,21 €
let prezzoViaggio = kmDaPercorrere * 0.21;
let prezzoScontatoViaggio;




btnGenera.addEventListener('click', function () {
    if (etaPasseggero < 18) {
        prezzoScontatoViaggio = (prezzoViaggio - (prezzoViaggio * 0.2)).toFixed(2);
    }
    else if (etaPasseggero >= 65) {
        prezzoScontatoViaggio = (prezzoViaggio - (prezzoViaggio * 0.4)).toFixed(2);
    };
})
