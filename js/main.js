//inserire una parola
var inserimento = prompt("Inserisci una parola lunga almeno tre lettere");

var parola = inserimento.toUpperCase();

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
}