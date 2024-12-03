/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 Questo richiederà un minimo di ricerca.

 logica:
    1. Imposto i dati di partenza 
    2. Salvataggio in due variabili il risultato dei promptsu età e km
    3. Logica per il calcolo dello sconto e del messaggio di output
    4. Stampo il messaggio
*/

// 1.
function calcolaPrezzo() {
   
  const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
  const eta = parseInt(prompt("Qual è la sua età?"));

  const prezzoBase = km * 0.21;
  console.log('Il prezzo del tuo biglietto è di € '+ prezzoBase);
  
  if (eta < 18) {
    sconto = prezzoBase * 0.2; // Sconto del 20% per minorenni
    const prezzoJunior = prezzoBase - sconto;
    const prezzoJuniorFixed = prezzoJunior.toFixed(2);  
    
    console.log("Il prezzo finale del tuo biglietto è di " + prezzoJuniorFixed + "€, viene applicato lo sconto del 20% per i minorenni.");
    
  } else if (eta >= 65) {
    sconto = prezzoBase * 0.4; // Sconto del 40% per over 65
    const prezzoSenior = prezzoBase - sconto;
    const prezzoSeniorFixed = prezzoSenior.toFixed(2);
    console.log("Il prezzo finale del tuo biglietto è di " + prezzoSeniorFixed + "€, viene applicato lo sconto del 40% per gli over 65.");
  }
 
}


calcolaPrezzo();