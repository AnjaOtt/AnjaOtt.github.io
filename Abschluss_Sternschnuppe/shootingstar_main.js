/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var ShootingStar;
(function (ShootingStar) {
    window.addEventListener("load", createCanvas);
    var starData = [];
    var imgData;
    //Funktion für das Canvas
    function createCanvas() {
        let canvas = document.getElementsByTagName("canvas")[0];
        ShootingStar.crc2 = canvas.getContext("2d");
        console.log(ShootingStar.crc2);
        //Himmel
        let gradient = ShootingStar.crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#05003a");
        gradient.addColorStop(1, "#010189");
        ShootingStar.crc2.fillStyle = gradient;
        ShootingStar.crc2.fillRect(0, 0, 1500, 600);
        //Schleife für kleine zufällige Sterne
        for (let i = 0; i < 60; i++) {
            randomStar();
        }
        //Schleife für Sternschnuppe
        for (let i = 0; i < 1; i++) {
            let s = new ShootingStar.Shootingstar(0, 0);
            starData.push(s);
        }
        let sb = new ShootingStar.Speechbubble(0, 0);
        sb.drawBubble(1000, 400);
        imgData = ShootingStar.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    // Funktion zeichne kleine Sterne
    function drawStar(_x, _y, size) {
        ShootingStar.crc2.strokeStyle = "#ffffcc";
        ShootingStar.crc2.beginPath();
        ShootingStar.crc2.moveTo(_x - (5 * size), _y);
        ShootingStar.crc2.lineTo(_x + (5 * size), _y);
        ShootingStar.crc2.stroke();
        ShootingStar.crc2.beginPath();
        ShootingStar.crc2.moveTo(_x, _y - (5 * size));
        ShootingStar.crc2.lineTo(_x, _y + (5 * size));
        ShootingStar.crc2.stroke();
        ShootingStar.crc2.beginPath();
        ShootingStar.crc2.moveTo(_x - (2.5 * size), _y - (2.5 * size));
        ShootingStar.crc2.lineTo(_x + (2.5 * size), _y + (2.5 * size));
        ShootingStar.crc2.stroke();
        ShootingStar.crc2.beginPath();
        ShootingStar.crc2.moveTo(_x + (2.5 * size), _y - (2.5 * size));
        ShootingStar.crc2.lineTo(_x - (2.5 * size), _y + (2.5 * size));
        ShootingStar.crc2.stroke();
    }
    //Funktion zufällig platzierte Sterne
    function randomStar() {
        drawStar(Math.random() * 1500, Math.random() * 600, 0.9 + Math.random() * 1.5);
    }
    //Animate Funktion
    function animate() {
        ShootingStar.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < starData.length; i++) {
            let s = starData[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(ShootingStar || (ShootingStar = {}));
//# sourceMappingURL=shootingstar_main.js.map