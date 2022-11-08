let nome = document.getElementById('name');
let kmDaPercorrere = document.getElementById('km-da-percorrere').value;
let etaPasseggero = document.getElementById('eta-passeggero').value;
let btnGenera = document.getElementById('btnGenera');
let btnAnnulla = document.getElementById('btnAnnulla');
// calcolare il prezzo 0,21 €
let prezzoViaggio = kmDaPercorrere * 0.21;
let prezzoScontatoViaggio;




btnGenera.addEventListener('click', function () {
    document.getElementById('output-nome').innerHTML = nome.value;
    if (etaPasseggero == "minorenne") {
        prezzoScontatoViaggio = (prezzoViaggio - (prezzoViaggio * 0.2)).toFixed(2);
        document.getElementById('outputBiglietto').innerHTML = prezzoScontatoViaggio + ' &euro;';
        document.getElementById('output-offerta').innerHTML = 'Biglietto scontato';
    }
    else if (etaPasseggero == "over65") {
        prezzoScontatoViaggio = (prezzoViaggio - (prezzoViaggio * 0.4)).toFixed(2);
        document.getElementById('outputBiglietto').innerHTML = prezzoScontatoViaggio + ' &euro;';
        document.getElementById('output-offerta').innerHTML = 'Biglietto scontato';
    } else {
        prezzoViaggio = (prezzoViaggio).toFixed(2);
        document.getElementById('outputBiglietto').innerHTML = prezzoViaggio + ' &euro;';
    };
    document.getElementById('output-carrozza').innerHTML = Math.floor(Math.random() * 20) + 1;
    document.getElementById('output-codice-cp').innerHTML = Math.floor(Math.random() * 100000) + 1;

});

btnAnnulla.addEventListener('click', function () {
    document.getElementById('name').value = "";
    document.getElementById('km-da-percorrere').value = "";
    document.getElementById('eta-passeggero').value = "minorenne";
    document.getElementById('output-carrozza').innerHTML = "";
    document.getElementById('output-codice-cp').innerHTML = ""; document.getElementById('outputBiglietto').innerHTML = "";
    document.getElementById('output-nome').innerHTML = "";
})
