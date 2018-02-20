/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var starryNight;
(function (starryNight) {
    class Tent {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        //Zelt
        drawTent(_x, _y) {
            starryNight.crc2.beginPath();
            starryNight.crc2.moveTo(_x, _y); //250, 400
            starryNight.crc2.lineTo(_x - 50, _y + 100);
            starryNight.crc2.lineTo(_x + 150, _y + 100);
            starryNight.crc2.lineTo(_x + 200, _y);
            starryNight.crc2.closePath();
            starryNight.crc2.strokeStyle = "#000000";
            starryNight.crc2.stroke();
            starryNight.crc2.fillStyle = "#80002a";
            starryNight.crc2.fill();
            //Zelt: großes Dreieck
            starryNight.crc2.beginPath();
            starryNight.crc2.moveTo(_x + 150, _y + 100);
            starryNight.crc2.lineTo(_x + 250, _y + 100);
            starryNight.crc2.lineTo(_x + 200, _y);
            starryNight.crc2.stroke();
            starryNight.crc2.strokeStyle = "#000000";
            starryNight.crc2.fillStyle = "#80002a";
            starryNight.crc2.fill();
            //Zelt: kleines Dreieck
            starryNight.crc2.beginPath();
            starryNight.crc2.moveTo(_x + 175, _y + 100);
            starryNight.crc2.lineTo(_x + 200, _y + 60);
            starryNight.crc2.lineTo(_x + 225, _y + 100);
            starryNight.crc2.stroke();
            starryNight.crc2.strokeStyle = "#000000";
            starryNight.crc2.fillStyle = "#000000";
            starryNight.crc2.fill();
            //Zelt: Reißverschluss
            starryNight.crc2.beginPath();
            starryNight.crc2.moveTo(_x + 200, _y + 60);
            starryNight.crc2.lineTo(_x + 200, _y);
            starryNight.crc2.stroke();
            starryNight.crc2.strokeStyle = "#000000";
        }
    }
    starryNight.Tent = Tent;
})(starryNight || (starryNight = {}));
//# sourceMappingURL=tent.js.map