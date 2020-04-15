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

    for (var i = 0; i < 5; i++) {
        lista = Math.floor(Math.random()* 50) + 1;
        console.log(lista);
        
        if (!numeri.includes(lista)) {
            numeri.push(lista);
        } else {
            i = i -1;
        }
    }
    alert(numeri);
    setTimeout(function(){
        for (var i = 0; i < 5; i++) {
            var utente = parseInt(prompt('Inserisci un numero'));
            userNumbers.push(utente);
        }
        
    }, 2000);
    console.log(userNumbers);
    








}); // <--- END READY DOC