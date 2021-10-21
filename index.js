/* Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va scritto in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

const askKm = prompt("Quanti KM dovrai percorrere?");
console.log(`KM da percorrere:`, askKm);

const askAge = prompt("Quanti anni hai?");
console.log(`Età:`, askAge);

const price = 0.21 * askKm;
const priceRounded = price.toFixed(2);
console.log(`Prezzo biglietto:`, price);

const underageDiscount = price * 20/100;
console.log(`Sconto minorenni:`, underageDiscount);
const underagePrice = price - underageDiscount;
console.log(`Prezzo minorenni:`, underagePrice);
const underagePriceRounded = underagePrice.toFixed(2);

const over65Discount = price * 40/100;
console.log(`Sconto over 65:`, over65Discount);
const over65Price = price - over65Discount;
console.log(`Prezzo over 65:`, over65Price);
const over65PriceRounded = over65Price.toFixed(2);

if ( askAge < 18 ) {
    document.getElementById("ticket_price").innerHTML = `Il costo del tuo biglietto è ${underagePriceRounded}€`;
    console.log(`Utente è minorenne`);
}
else if ( askAge > 65 ) {
    document.getElementById("ticket_price").innerHTML = `Il costo del tuo biglietto è ${over65PriceRounded}€`;
    console.log(`Utente è over 65`)
}
else if ( askAge >= 18 ) {
    document.getElementById("ticket_price").innerHTML = `Il costo del tuo biglietto è ${price}€`;
    console.log(`Utente è maggiorenne`);
}


