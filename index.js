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

if ( askAge < 18 ) {
    console.log(`Utente è minorenne`);
}
else if ( askAge > 65 ) {
    console.log(`Utente è over 65`)
}
else if ( askAge >= 18 ) {
    console.log(`Utente è maggiorenne`);
}

