/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.


1) Inserimento dei dati dell'utente;
2) Converto i valori inseriti dall'utente in numeri;
3) Calcolo il prezzo di base;
5) Calcolo lo sconto con una condizione per i minorenni e gli over 65.

*/

    //  1) Chiedo all'utente di inserire i km e la sua età
    const chilometri = prompt("Quanti chilometri vuoi percorrere?");
    const eta = prompt("Quanti anni hai?");
  
    //  2) Converto i valori in numeri
    const chilometriNumerico = parseFloat(chilometri);
    const etaNumerica = parseInt(eta);
  
    //  4) Calcolo il prezzo base
    prezzoBase = chilometriNumerico * 0.21;
    console.log("Il prezzo base del tuo biglietto è di " + prezzoBase.toFixed(2) + " €");
    
    //  5) Calcolo lo sconto in base all'età con una condizione 
    let sconto = 0;
    if (etaNumerica < 18) {

      scontoMinorenne = prezzoBase * 0.2; // Sconto del 20%

      prezzoMinorenne = prezzoBase - scontoMinorenne;

      console.log("Viene applicato uno sconto del 20%, quindi il prezzo del biglietto è " + prezzoMinorenne.toFixed(2) + " €");

    } else if (etaNumerica >= 65) {
      
      scontoOver = prezzoBase * 0.4; // Sconto del 40%
      
      prezzoOver = prezzoBase - scontoOver;

      console.log("Viene applicato uno sconto del 40%, quindi il prezzo del biglietto è " + prezzoOver.toFixed(2) + " €");

    } 
      
      
      
    
    
    
    

  
    