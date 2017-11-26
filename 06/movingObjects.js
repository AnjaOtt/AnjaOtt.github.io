/*
Aufgabe: 6
Name: Anja Ott
Matrikel: 256342
Datum: 24.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A06;
(function (A06) {
    class MovingObjects {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
            console.log("MovingObjects constructor");
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            //Inhalt aus den Klassen
        }
        draw() {
            //Inhalt aus den Klassen
        }
    }
    A06.MovingObjects = MovingObjects;
})(A06 || (A06 = {}));
//# sourceMappingURL=movingObjects.js.map