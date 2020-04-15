$(document).ready(function () {
    /*
    Un alert espone 5 numeri casuali (Senza doppioni). 
    Da li parte un timer di 30 secondi.
    Dopo 30 secondi l’ utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
    Dopo che sono stati inseriti i 5 numeri, 
    il software dice quanti e quali dei numeri da indovinare sono stati individuati    
    */

    var numeri = [];
    var lista;
    var userNumbers = [];
    var guessedNum = [];
    var gioco = false;

    for (var i = 0; i < 5; i++) {
        lista = Math.floor(Math.random()* 50) + 1;
        
        if (!numeri.includes(lista)) {
            numeri.push(lista);
        } else {
            i = i -1;
        }
    }
    console.log(numeri);
    
    alert(numeri);
    setTimeout(function(){
        for (var i = 0; i < 5; i++) {
            var utente = parseInt(prompt('Inserisci un numero da 1 a 50'));

            while (utente < 1 || utente > 50 || isNaN(utente)) {
                utente = parseInt(prompt('Errore inserimento. Inserisci un NUMERO da 1 a 50'));
            }

            userNumbers.push(utente);
        }
        for (var k = 0; k < 5; k++) {
            
            if (numeri.includes(userNumbers[k])) {
                guessedNum.push(userNumbers[k]);
                gioco = true;
            }
          
        }
        if (gioco == true) {
            console.log('Il tuo punteggio è ' + guessedNum.length);
                console.log('I numeri che hai ricordato sono i seguenti: ' + guessedNum);
        } else if (gioco == false) {
            console.log('Non hai ricordato nemmeno un numero.MEMORIA DI FERRO!');
        }
       
       
        
        
    }, 2000);
    
       
    





}); // <--- END READY DOC