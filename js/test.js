/* var a = ["a", "b", "c"];
var b = ["a", "b", "c"];

var i = 0;

while (i < a.length) {
    if (a[i] == b[i]) {
        i++
        console.log("elemento uguale")
    } else {
        console.log("gli array non sono uguali")
    }
} */


/* function evenChoice(word) {
    var wordUp = word.toUpperCase();
    console.log(wordUp);
    if (wordUp == "PARI") {;
        return true;
        var result = true;
    } else if (wordUp == "DISPARI") {
        return false;
        var result = false;
    } else {
        return "Errore: scegliere solo tra PARI o DISPARI"
        var result = "Errore: scegliere solo tra PARI o DISPARI";
    }

}

var parola = prompt("Scegli PARI o DISPARI");
var risultato = evenChoice(parola);
console.log(risultato); */

/* var word = prompt("Inserisci parola");

if (word == "parola") {
    console.log("le parole sono uguali")
} else {
    console.log("le parole sono diverse")
} */


//Inserisco la scelta "PARI" o "DISPARI"
/* evenOdd = prompt("Pari o dispari?");
console.log(evenOdd); */

//Definisco una funzione che mi traduca in Booleano la scelta effettuata, che mi porti tutto in maiuscolo per evitare errori dovuti alla modalità di inserimento e che mi dia errore se inserisco valori diversi da "PARI" o "DISPARI"
/* function evenChoice(word) {
    var wordUp = word.toUpperCase();
    console.log(wordUp);
    do {

    }
    
    if (wordUp == "PARI") {;
        return true;
    } else if (wordUp == "DISPARI") {
        return false;
    } else {
        return "Errore: scegliere solo tra PARI o DISPARI"
        alert('Errore: scegliere solo tra PARI o DISPARI');
    }

} */

//riporto il risultato della funzione in una variabile
/* var scelta = evenChoice(evenOdd);
console.log(scelta);

evenOdd = prompt("Pari o dispari?");
console.log(evenOdd); */


do {
    var evenOdd = prompt("Pari o dispari?").toUpperCase();
    console.log(evenOdd);
    if (evenOdd == "PARI") {
        var result = true;
        console.log(result);
    } else if (evenOdd == "DISPARI") {
        var result = false;
        console.log(result);
    } else {
        var result = "errore"
        console.log(result);
    }

} while (result == "errore")