//Chiedo all'utente di scegliere tra "PARI" o "DISPARI", finché sceglie correttamente
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

//Definisco una funzione che mi traduca in Booleano la scelta effettuata, che mi porti tutto in maiuscolo per evitare errori dovuti alla modalità di inserimento e che mi dia errore se inserisco valori diversi da "PARI" o "DISPARI"
function evenChoice(word) {
    var wordUp = word.toUpperCase();
    console.log(wordUp);
    if (wordUp == "PARI") {;
        return true;
    } else {
        return false;
    } 

}

//riporto il risultato della funzione in una variabile
var scelta = evenChoice(evenOdd);
console.log(scelta);

//chiedo all'utente di inserire un numero da 1 a 5, finché non lo inserisce correttamente
do {
    numero = parseInt(prompt("Inserisci un numero con valore da 1 a 5"));
    if ((numero >= 1) && (numero <= 5)) {
        console.log(numero);
        var playerNumber = numero;
    } else {
        console.log(numero)
        var playerNumber = "errore"
        console.log(playerNumber);
    }

} while (playerNumber == "errore")

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








