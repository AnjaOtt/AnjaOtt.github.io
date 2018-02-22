/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var starryNight;
(function (starryNight) {
    class SmallStar extends starryNight.CanvasObjects {
        constructor(_x, _y, size) {
            super(_x, _y);
            this.size = size;
        }
        // Funktion zeichne kleine Sterne
        drawStar(_x, _y, size) {
            starryNight.crc2.strokeStyle = "#ffffcc";
            starryNight.crc2.beginPath();
            starryNight.crc2.moveTo(_x - (5 * size), _y);
            starryNight.crc2.lineTo(_x + (5 * size), _y);
            starryNight.crc2.stroke();
            starryNight.crc2.beginPath();
            starryNight.crc2.moveTo(_x, _y - (5 * size));
            starryNight.crc2.lineTo(_x, _y + (5 * size));
            starryNight.crc2.stroke();
            starryNight.crc2.beginPath();
            starryNight.crc2.moveTo(_x - (2.5 * size), _y - (2.5 * size));
            starryNight.crc2.lineTo(_x + (2.5 * size), _y + (2.5 * size));
            starryNight.crc2.stroke();
            starryNight.crc2.beginPath();
            starryNight.crc2.moveTo(_x + (2.5 * size), _y - (2.5 * size));
            starryNight.crc2.lineTo(_x - (2.5 * size), _y + (2.5 * size));
            starryNight.crc2.stroke();
        }
    }
    starryNight.SmallStar = SmallStar;
})(starryNight || (starryNight = {}));
//# sourceMappingURL=smallStar.js.map