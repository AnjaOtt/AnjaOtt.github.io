/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var starryNight;
(function (starryNight) {
    class Moon extends starryNight.CanvasObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        //Mond
        drawMoon(_x, _y) {
            starryNight.crc2.beginPath();
            starryNight.crc2.arc(_x + 1200, _y + 150, 70, 0, 2 * Math.PI);
            starryNight.crc2.fillStyle = "#efefef";
            starryNight.crc2.fill();
            starryNight.crc2.beginPath();
            starryNight.crc2.arc(_x + 1170, _y + 130, 50, 0, 2 * Math.PI);
            starryNight.crc2.fillStyle = "#040050";
            starryNight.crc2.fill();
            //Punkte
            starryNight.crc2.beginPath();
            starryNight.crc2.arc(_x + 1240, _y + 180, 10, 0, 2 * Math.PI);
            starryNight.crc2.fillStyle = "#efd0e0";
            starryNight.crc2.fill();
            starryNight.crc2.beginPath();
            starryNight.crc2.arc(_x + 1230, _y + 200, 5, 0, 2 * Math.PI);
            starryNight.crc2.fillStyle = "#e2dee1";
            starryNight.crc2.fill();
            starryNight.crc2.beginPath();
            starryNight.crc2.arc(_x + 1210, _y + 190, 7, 0, 2 * Math.PI);
            starryNight.crc2.fillStyle = "#e2dee1";
            starryNight.crc2.fill();
        }
    }
    starryNight.Moon = Moon;
})(starryNight || (starryNight = {}));
//# sourceMappingURL=moon.js.map