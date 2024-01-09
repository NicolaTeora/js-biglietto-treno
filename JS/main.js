// dichiarazione variabili
let age;
let mileage;
const priceKm = 0.21;
let FristPrice

// assegnazione
age = prompt('Inserisci la tua età');
console.log(age);

mileage = prompt('Inserisci i Kilometri da percorrere');
console.log(mileage);

FristPrice = '' + mileage * priceKm + "€";
console.log(FristPrice);

document.getElementById('specialprice').innerText = FristPrice;
