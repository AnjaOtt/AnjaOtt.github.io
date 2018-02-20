/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace starryNight {

    export class SmallStar {
        x: number;
        y: number;
        size: number;

        constructor(_x: number, _y: number, size: number) {
            this.x = _x;
            this.y = _y;
            this.size = size;
        }
        
        // Funktion zeichne kleine Sterne
        drawStar(_x: number, _y: number, size: number): void {
            crc2.strokeStyle = "#ffffcc";
            crc2.beginPath();
            crc2.moveTo(_x - (5 * size), _y);
            crc2.lineTo(_x + (5 * size), _y);
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(_x, _y - (5 * size));
            crc2.lineTo(_x, _y + (5 * size));
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(_x - (2.5 * size), _y - (2.5 * size));
            crc2.lineTo(_x + (2.5 * size), _y + (2.5 * size));
            crc2.stroke();
            crc2.beginPath();
            crc2.moveTo(_x + (2.5 * size), _y - (2.5 * size));
            crc2.lineTo(_x - (2.5 * size), _y + (2.5 * size));
            crc2.stroke();
        }
    }
}