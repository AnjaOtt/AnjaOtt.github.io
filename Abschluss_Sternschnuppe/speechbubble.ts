/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace ShootingStar {

    export class Speechbubble {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            console.log("constructor test");
            this.x = _x;
            this.y = _y;
        }

        drawBubble(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 300, _y);
            crc2.lineTo(_x + 300, _y + 80);
            crc2.lineTo(_x, _y + 80);
            crc2.closePath();
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(_x + 50, _y + 80);
            crc2.lineTo(_x + 50, _y + 110);
            crc2.lineTo(_x + 90, _y + 80);
            crc2.closePath();
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.font = "45px Rouge Script";
            crc2.fillText("Make a wish!", _x + 45, _y + 50);
            crc2.fill();
            crc2.stroke();
            crc2.closePath();
        }
    }
}