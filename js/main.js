//inserire una parola
var parola = prompt("Inserisci una parola lunga almeno tre lettere");

/* var parola = inserimento.toUpperCase();

console.log(parola);
console.log(parola.length);

//trasformarla in array
var parolArray = Array.from(parola);

console.log(parolArray);
console.log(parolArray.length);

//dividere la lunghezza dell'array a metà
var meta = Math.floor(parolArray.length / 2);
console.log(meta);

//creare due array vuoti per contenere le due metà delle parole
var primaMeta = [];
var secondaMeta = [];

//riempire secondo array con prima metà del primo
for (i = 0; i < meta; i++) {
    primaMeta[i] = parolArray[i];
    console.log(primaMeta[i]);
}

console.log(primaMeta);

//riempire terzo array con seconda metà invertita del primo
for (x = 0; x < meta; x++) {
    secondaMeta[x] = parolArray[parolArray.length-(x+1)];
    console.log(secondaMeta[x]);
}

console.log(secondaMeta);


//confrontare i due array. Se uguali, la parola è palindroma, se diversi, non lo è.

if (primaMeta == secondaMeta) {
    console.log("La parola è palindroma");
    alert("La parola è palindroma");
} else {
    console.log("La parola non è palindroma");
    alert("La parola non è palindroma");
} */

function pal (word) {
    console.log(word);
    var stringa = word.toUpperCase();
    console.log(stringa);
    var stringArray = Array.from(stringa);
    console.log(stringArray);
    console.log(stringArray.length);
    var half = Math.floor(stringArray.length / 2);
    console.log(half);
    var firstHalf = [];
    var secondHalf = [];
    for (a = 0; a < half; a++) {
        firstHalf[a] = stringArray[a];
        console.log(firstHalf[a]);
    }
    console.log(firstHalf);
    for (b = 0; b < half; b++) {
        secondHalf[b] = stringArray[stringArray.length-(b+1)];
        console.log(secondHalf[b]);
    }
    console.log(secondHalf);
    if (firstHalf == secondHalf) {
        return "La parola è palindroma"
        console.log("La parola è palindroma");
    } else {
        return "La parola non è palindroma"
        console.log("La parola non è palindroma");
    }
    

}


var risultato = pal(parola);
console.log(risultato);
