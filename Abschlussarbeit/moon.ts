/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace starryNight {

    export class Moon {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        //Mond
        drawMoon(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.arc(_x + 1200, _y + 150, 70, 0, 2 * Math.PI);
            crc2.fillStyle = "#efefef";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x + 1170, _y + 130, 50, 0, 2 * Math.PI);
            crc2.fillStyle = "#040050";
            crc2.fill();

            //Punkte
            crc2.beginPath();
            crc2.arc(_x + 1240, _y + 180, 10, 0, 2 * Math.PI);
            crc2.fillStyle = "#efd0e0";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x + 1230, _y + 200, 5, 0, 2 * Math.PI);
            crc2.fillStyle = "#e2dee1";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(_x + 1210, _y + 190, 7, 0, 2 * Math.PI);
            crc2.fillStyle = "#e2dee1";
            crc2.fill();
        }
    }
}