//Chiedo all'utente di scegliere tra "PARI" o "DISPARI", finché non sceglie correttamente. Traduco in Booleano la scelta effettuata.
do {
    var evenOdd = prompt("Pari o dispari?").toUpperCase();
    console.log(evenOdd);
    if (evenOdd == "PARI") {
        var scelta = true;
        console.log(scelta);
    } else if (evenOdd == "DISPARI") {
        var scelta = false;
        console.log(scelta);
    } else {
        var result = "errore"
        console.log(scelta);
    }

} while (scelta == "errore")


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








