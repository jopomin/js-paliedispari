//Inserisco la scelta "PARI" o "DISPARI"
evenOdd = prompt("Pari o dispari?");
console.log(evenOdd);

//Definisco una funzione che mi traduca in Booleano la scelta effettuata, che mi porti tutto in maiuscolo per evitare errori dovuti alla modalità di inserimento e che mi dia errore se inserisco valori diversi da "PARI" o "DISPARI"
function evenChoice(word) {
    var wordUp = word.toUpperCase();
    console.log(wordUp);
    if (wordUp == "PARI") {;
        return true;
    } else if (wordUp == "DISPARI") {
        return false;
    } else {
        return "Errore: scegliere solo tra PARI o DISPARI"
        alert('Errore: scegliere solo tra PARI o DISPARI');
    }

}

//riporto il risultato della funzione in una variabile
var scelta = evenChoice(evenOdd);
console.log(scelta);

//chiedo all'utente di inserire un numero da 1 a 5
playerNumber = parseInt(prompt("Inserisci un numero con valore da 1 a 5"));
console.log(playerNumber);

//genero un numero da 1 a 5 per il computer
cpuNumber = Math.floor(Math.random()*5+1);
console.log(cpuNumber);

//definisco una variabile che contenga la somma dei due numeri
var somma = playerNumber + cpuNumber;
console.log(somma);

//definisco una funzione che mi restituisca in Booleano il valore PARI o DISPARI del numero
function evenResult(sum) {
    if (sum % 2 == 0) {
        return true;
        var sumResult = true;
    } else {
        return false;
        var sumResult = false;
    }
}

//riporto il risultato della funzione in una variabile
var risultato = evenResult(somma);
console.log(risultato);


//confronto il risultato delle due funzioni, quindi della scelta dell'utente e del risultato del confronto tra i numeri e decreto se l'utente ha vinto o perso
if (scelta == risultato) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}








