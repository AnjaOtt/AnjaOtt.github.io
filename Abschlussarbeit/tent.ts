/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/



namespace starryNight {

    export class Tent {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }

        //Zelt
        drawTent(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.moveTo(_x, _y); //250, 400
            crc2.lineTo(_x - 50, _y + 100);
            crc2.lineTo(_x + 150, _y + 100);
            crc2.lineTo(_x + 200, _y);
            crc2.closePath();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.fillStyle = "#80002a";
            crc2.fill();

            //Zelt: großes Dreieck
            crc2.beginPath();
            crc2.moveTo(_x + 150, _y + 100);
            crc2.lineTo(_x + 250, _y + 100);
            crc2.lineTo(_x + 200, _y);
            crc2.stroke();
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#80002a";
            crc2.fill();

            //Zelt: kleines Dreieck
            crc2.beginPath();
            crc2.moveTo(_x + 175, _y + 100);
            crc2.lineTo(_x + 200, _y + 60);
            crc2.lineTo(_x + 225, _y + 100);
            crc2.stroke();
            crc2.strokeStyle = "#000000";
            crc2.fillStyle = "#000000";
            crc2.fill();

            //Zelt: Reißverschluss
            crc2.beginPath();
            crc2.moveTo(_x + 200, _y + 60);
            crc2.lineTo(_x + 200, _y);
            crc2.stroke();
            crc2.strokeStyle = "#000000";
        }
    }
}