function calcolaPrezzoViaggio() {
    // Chiediamo all'utente di inserire i dati
    const chilometri = prompt("Quanti chilometri vuoi percorrere?");
    const eta = prompt("Quanti anni hai?");
  
    // Convertiamo i valori in numeri
    const chilometriNumerico = parseFloat(chilometri);
    const etaNumerica = parseInt(eta);
  
    // Calcoliamo il prezzo base
    const prezzoBase = chilometriNumerico * 0.21;
  
    // Calcoliamo lo sconto in base all'età
    let sconto = 0;
    if (etaNumerica < 18) {
      sconto = prezzoBase * 0.2; // Sconto del 20%
    } else if (etaNumerica >= 65) {
      sconto = prezzoBase * 0.4; // Sconto del 40%
    }
  
    // Calcoliamo il prezzo finale
    const prezzoFinale = prezzoBase - sconto;
  
    // Visualizziamo il risultato nella console
    console.log("Il prezzo del tuo biglietto è di " + prezzoFinale.toFixed(2) + " €");
  }
  
  // Chiamiamo la funzione per avviare il calcolo
  calcolaPrezzoViaggio();