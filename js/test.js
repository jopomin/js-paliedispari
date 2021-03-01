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


function evenChoice(word) {
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

console.log(result);

}

var parola = prompt("Scegli PARI o DISPARI");
var risultato = evenChoice(parola);
console.log(risultato);

/* var word = prompt("Inserisci parola");

if (word == "parola") {
    console.log("le parole sono uguali")
} else {
    console.log("le parole sono diverse")
} */
