//inserire una parola
var parola = prompt("Inserisci una parola lunga almeno tre lettere");

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
    var c = 0;
    while (c < half) {
        if (firstHalf[c] == secondHalf[c]) {
            c++
        } else {
            return "La parola non è palindroma"
        }
    }
    if (c == half) {
        return "la parola è palindroma"
    } else {
        return "La parola non è palindroma"  
    }

}

var risultato = pal(parola);
console.log(risultato);
