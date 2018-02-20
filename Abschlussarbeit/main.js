/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var starryNight;
(function (starryNight) {
    window.addEventListener("load", createCanvas);
    //Funktion für das Canvas
    function createCanvas() {
        let canvas = document.getElementsByTagName("canvas")[0];
        starryNight.crc2 = canvas.getContext("2d");
        console.log(starryNight.crc2);
        //Himmel
        let gradient = starryNight.crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#05003a");
        gradient.addColorStop(1, "#010189");
        starryNight.crc2.fillStyle = gradient;
        starryNight.crc2.fillRect(0, 0, 1500, 600);
        //Schleife für kleine zufällige Sterne
        for (let i = 0; i < 60; i++) {
            randomStar();
        }
        //Erde
        starryNight.crc2.beginPath();
        starryNight.crc2.arc(300, 1700, 1300, 0, 2 * Math.PI, false);
        starryNight.crc2.fillStyle = "#006666";
        starryNight.crc2.fill();
        //runde Sterne/Sternbild
        drawRoundStar(350, 150);
        drawRoundStar(480, 170);
        drawRoundStar(540, 210);
        drawRoundStar(620, 260);
        drawRoundStar(780, 290);
        drawRoundStar(720, 360);
        drawRoundStar(610, 340);
        //zeichne Mond, Zelt und großen Stern
        let bg = new starryNight.Moon(0, 0);
        bg.drawMoon(0, 0);
        let t = new starryNight.Tent(0, 0);
        t.drawTent(250, 400);
        let bs = new starryNight.BigStar(0, 0);
        bs.drawBigStar(-50, -20);
        //Event Listener
        document.getElementById("tent").addEventListener("touchstart", changeTent);
        document.getElementById("tent").addEventListener("click", changeTent);
        document.getElementById("star1").addEventListener("touchstart", addConstellation);
        document.getElementById("star1").addEventListener("click", addConstellation);
        document.getElementById("star2").addEventListener("touchstart", addConstellation);
        document.getElementById("star2").addEventListener("click", addConstellation);
        document.getElementById("star3").addEventListener("touchstart", addConstellation);
        document.getElementById("star3").addEventListener("click", addConstellation);
        document.getElementById("star4").addEventListener("touchstart", addConstellation);
        document.getElementById("star4").addEventListener("click", addConstellation);
        document.getElementById("star5").addEventListener("touchstart", addConstellation);
        document.getElementById("star5").addEventListener("click", addConstellation);
        document.getElementById("star6").addEventListener("touchstart", addConstellation);
        document.getElementById("star6").addEventListener("click", addConstellation);
        document.getElementById("star7").addEventListener("touchstart", addConstellation);
        document.getElementById("star7").addEventListener("click", addConstellation);
    }
    // Funktion zeichne kleine Sterne
    function drawStar(_x, _y, size) {
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
    //Funktion zufällig platzierte Sterne
    function randomStar() {
        drawStar(Math.random() * 1500, Math.random() * 600, 0.9 + Math.random() * 1.5);
    }
    // Funktion zeichne runden Stern
    function drawRoundStar(_x, _y) {
        starryNight.crc2.beginPath();
        starryNight.crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
        starryNight.crc2.fillStyle = "#ffffcc";
        starryNight.crc2.fill();
    }
    // Funktion zeichne beleuchtetes Zelt
    function drawTentlight(_x, _y) {
        //Zelt: Parallelogramm
        starryNight.crc2.beginPath();
        starryNight.crc2.setLineDash([0, 0]);
        starryNight.crc2.moveTo(_x, _y); //250, 400
        starryNight.crc2.lineTo(_x - 50, _y + 100);
        starryNight.crc2.lineTo(_x + 150, _y + 100);
        starryNight.crc2.lineTo(_x + 200, _y);
        starryNight.crc2.closePath();
        starryNight.crc2.strokeStyle = "#000000";
        starryNight.crc2.stroke();
        let radialgradient = starryNight.crc2.createRadialGradient(260, 450, 80, 300, 500, 0);
        radialgradient.addColorStop(0, "#cd0043");
        radialgradient.addColorStop(1, "#ff884d");
        starryNight.crc2.fillStyle = radialgradient;
        starryNight.crc2.fill();
        //Zelt: großes Dreieck
        starryNight.crc2.beginPath();
        starryNight.crc2.setLineDash([0, 0]);
        starryNight.crc2.moveTo(_x + 150, _y + 100);
        starryNight.crc2.lineTo(_x + 250, _y + 100);
        starryNight.crc2.lineTo(_x + 200, _y);
        starryNight.crc2.stroke();
        starryNight.crc2.strokeStyle = "#000000";
        starryNight.crc2.fillStyle = "#cd0043";
        starryNight.crc2.fill();
        //Zelt: kleines Dreieck
        starryNight.crc2.beginPath();
        starryNight.crc2.setLineDash([0, 0]);
        starryNight.crc2.moveTo(_x + 175, _y + 100);
        starryNight.crc2.lineTo(_x + 200, _y + 60);
        starryNight.crc2.lineTo(_x + 225, _y + 100);
        starryNight.crc2.stroke();
        starryNight.crc2.strokeStyle = "#000000";
        starryNight.crc2.fillStyle = "#80002a";
        starryNight.crc2.fill();
        //Zelt: Reißverschluss
        starryNight.crc2.beginPath();
        starryNight.crc2.setLineDash([0, 0]);
        starryNight.crc2.moveTo(_x + 200, _y + 60);
        starryNight.crc2.lineTo(_x + 200, _y);
        starryNight.crc2.stroke();
        starryNight.crc2.strokeStyle = "#000000";
    }
    //Verbindungslinien Sternbild
    function drawStarConstellation(_x, _y) {
        starryNight.crc2.beginPath();
        starryNight.crc2.setLineDash([10, 15]);
        starryNight.crc2.moveTo(_x, _y); //350, 150
        starryNight.crc2.lineTo(_x + 130, _y + 20);
        starryNight.crc2.lineTo(_x + 190, _y + 60);
        starryNight.crc2.lineTo(_x + 270, _y + 110);
        starryNight.crc2.lineTo(_x + 430, _y + 140);
        starryNight.crc2.lineTo(_x + 370, _y + 210);
        starryNight.crc2.lineTo(_x + 260, _y + 190);
        starryNight.crc2.lineTo(_x + 270, _y + 110);
        starryNight.crc2.strokeStyle = "#ffffcc";
        starryNight.crc2.stroke();
    }
    // Funktion: Event, Licht im Zelt geht an
    function changeTent(_event) {
        drawTentlight(250, 400);
    }
    // Funktion: Event, Sternbild erscheint
    function addConstellation(_event) {
        drawStarConstellation(350, 150);
    }
})(starryNight || (starryNight = {}));
//# sourceMappingURL=main.js.map