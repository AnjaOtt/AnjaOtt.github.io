/*
Aufgabe: 6
Name: Anja Ott
Matrikel: 256342
Datum: 24.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A06 {
    export class MovingObjects {
        x: number;
        y: number;
 

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            console.log("MovingObjects constructor");
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            //Inhalt aus den Klassen
        }

        draw(): void {
            //Inhalt aus den Klassen
        }
    }
}