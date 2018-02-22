/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var starryNight;
(function (starryNight) {
    class BigStar extends starryNight.CanvasObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        drawBigStar(_x, _y) {
            starryNight.crc2.beginPath();
            starryNight.crc2.moveTo(_x + 200, _y + 95);
            starryNight.crc2.lineTo(_x + 225, _y + 140);
            starryNight.crc2.lineTo(_x + 175, _y + 140);
            starryNight.crc2.closePath();
            starryNight.crc2.fillStyle = "#ffffcc";
            starryNight.crc2.fill();
            starryNight.crc2.beginPath();
            starryNight.crc2.moveTo(_x + 200, _y + 155);
            starryNight.crc2.lineTo(_x + 225, _y + 110);
            starryNight.crc2.lineTo(_x + 175, _y + 110);
            starryNight.crc2.closePath();
            starryNight.crc2.fillStyle = "#ffffcc";
            starryNight.crc2.fill();
        }
    }
    starryNight.BigStar = BigStar;
})(starryNight || (starryNight = {}));
//# sourceMappingURL=bigStar.js.map