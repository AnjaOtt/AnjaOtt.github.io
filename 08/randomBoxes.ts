/*
Aufgabe: 8
Name: Anja Ott
Matrikel: 256342
Datum: 11.12.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe8 {

    window.addEventListener("load", init);

    function init(): void {
        let amountBoxes: string = prompt("Gib eine Zahl zwischen 10 und 100 ein"); //Fenster, dass Anzahl der Quadrate abfragt..
        if (parseInt(amountBoxes) < 10 || parseInt(amountBoxes) > 100 || isNaN(parseInt(amountBoxes))) {        //wenn keine Zahl bzw. eine Zahl größer als 100 / kleiner als 10 eingegeben wurde..
            alert("Hoppla! Deine Zahl liegt nicht zwischen 10 und 100");      //alert-Fenster bei falscher Eingabe
            init();                             //Funktionsaufruf, Zahl kann erneut eingegeben werden
        }
        else { // ANDERNFALLS (bei richtiger Eingabe)...
            for (let i: number = 0; i < parseInt(amountBoxes); i++) { //for-Schleife wird so oft ausgeführt, wie die eingegebene Zahl hoch ist
                drawBox(Math.random() * window.innerWidth - 40, Math.random() * window.innerHeight - 40, Math.random() * 400); //Aufruf der Funktion drawBox, Parameter werden übergeben
            }
        }
    }

    function drawBox(_x: number, _y: number, _color: number): void {

        let div: HTMLDivElement = document.createElement("div"); //div-Element wird erstellt
        div.style.width = "35px";
        div.style.height = "35px";
        div.style.left = _x + "px";
        div.style.top = _y + "px";
        div.style.backgroundColor = "hsl(" + _color + ",100%, 80%)";
        document.body.appendChild(div); //html ELement wird im body hinzugefügt (Kindknoten an Bodyknoten)
    }
}