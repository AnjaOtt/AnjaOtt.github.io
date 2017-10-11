/*
Aufgabe: 0
Name: Anja Ott
Matrikel: 256342
Datum: 11.10.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
function eingabeFeld() {
    let eingabe = prompt("Hey! Wie hei�t du?", "");
    if (eingabe != null) {
        document.getElementById("text").innerHTML =
            "Hallo " + eingabe + "! Sch�n, dass du da bist :)";
    }
}
//# sourceMappingURL=miniseite.js.map