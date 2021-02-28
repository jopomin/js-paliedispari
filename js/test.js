var a = ["a", "b", "c"];
var b = ["a", "b", "c"];

var i = 0;

while (i < a.length) {
    if (a[i] == b[i]) {
        i++
        console.log("elemento uguale")
    } else {
        console.log("gli array non sono uguali")
    }
}

