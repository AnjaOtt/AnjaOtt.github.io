/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace starryNight {

    export class BigStar extends CanvasObjects {
        

        constructor(_x: number, _y: number) {
            super(_x, _y);

        }
        
        drawBigStar(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x + 200, _y + 95);
            crc2.lineTo(_x + 225, _y + 140);
            crc2.lineTo(_x + 175, _y + 140);
            crc2.closePath();
            crc2.fillStyle = "#ffffcc";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(_x + 200, _y + 155);
            crc2.lineTo(_x + 225, _y + 110);
            crc2.lineTo(_x + 175, _y + 110);
            crc2.closePath();
            crc2.fillStyle = "#ffffcc";
            crc2.fill();
        }
    }
}