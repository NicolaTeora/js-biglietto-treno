// dichiarazione variabili
let age;
let mileage;
const priceKm = 0.21;
let FirstPrice

// assegnazione
age = parseInt(prompt('Inserisci la tua età'));
console.log(age);

mileage = parseInt(prompt('Inserisci i Kilometri da percorrere'));
console.log(mileage);

FirstPrice = mileage * priceKm;
console.log(FirstPrice);

// Anteprima biglietto

document.getElementById('specialprice').innerText = FirstPrice.toFixed(2) + '€';

// calcolo dello sconto in base all'età
let Discount

if (age < 18){
    Discount = FirstPrice - (FristPrice * 0.2);
    
} else if(age > 65) {
    Discount = FirstPrice - (FristPrice * 0.4);
}
console.log(Discount);

// prezzo scontato

document.getElementById('discountPrice').innerText = Discount.toFixed(2) + '€';
