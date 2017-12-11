/*
Aufgabe: 8
Name: Anja Ott
Matrikel: 256342
Datum: 11.12.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe8;
(function (Aufgabe8) {
    window.addEventListener("load", init);
    function init() {
        let amountBoxes = prompt("Gib eine Zahl zwischen 10 und 100 ein"); //Fenster, dass Anzahl der Quadrate abfragt..
        if (parseInt(amountBoxes) < 10 || parseInt(amountBoxes) > 100 || isNaN(parseInt(amountBoxes))) {
            alert("Hoppla! Deine Zahl liegt nicht zwischen 10 und 100"); //alert-Fenster bei falscher Eingabe
            init(); //Funktionsaufruf, Zahl kann erneut eingegeben werden
        }
        else {
            for (let i = 0; i < parseInt(amountBoxes); i++) {
                drawBox(Math.random() * window.innerWidth - 40, Math.random() * window.innerHeight - 40, Math.random() * 400); //Aufruf der Funktion drawBox, Parameter werden �bergeben
            }
        }
    }
    function drawBox(_x, _y, _color) {
        let div = document.createElement("div"); //div-Element wird erstellt
        div.style.width = "35px";
        div.style.height = "35px";
        div.style.left = _x + "px";
        div.style.top = _y + "px";
        div.style.backgroundColor = "hsl(" + _color + ",100%, 80%)";
        document.body.appendChild(div); //html ELement wird im body hinzugef�gt (Kindknoten an Bodyknoten)
    }
})(Aufgabe8 || (Aufgabe8 = {}));
//# sourceMappingURL=randomBoxes.js.map