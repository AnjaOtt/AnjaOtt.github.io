/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace ShootingStar {

    window.addEventListener("load", createCanvas);
    export let crc2: CanvasRenderingContext2D;

    var starData: Shootingstar[] = [];
    var imgData: ImageData;

    //Funktion für das Canvas
    function createCanvas(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Himmel
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#05003a");
        gradient.addColorStop(1, "#010189");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1500, 600);

        //Schleife für kleine zufällige Sterne
        for (let i: number = 0; i < 60; i++) {
            randomStar();
        }

        //Schleife für Sternschnuppe
        for (let i: number = 0; i < 1; i++) {
            let s: Shootingstar = new Shootingstar(0, 0);
            starData.push(s);
        }

        let sb: Speechbubble = new Speechbubble(0, 0);
        sb.drawBubble(1000, 400);

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        animate();
    }


    // Funktion zeichne kleine Sterne
    function drawStar(_x: number, _y: number, size: number): void {
        crc2.strokeStyle = "#ffffcc";
        crc2.beginPath();
        crc2.moveTo(_x - (5 * size), _y);
        crc2.lineTo(_x + (5 * size), _y);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_x, _y - (5 * size));
        crc2.lineTo(_x, _y + (5 * size));
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_x - (2.5 * size), _y - (2.5 * size));
        crc2.lineTo(_x + (2.5 * size), _y + (2.5 * size));
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(_x + (2.5 * size), _y - (2.5 * size));
        crc2.lineTo(_x - (2.5 * size), _y + (2.5 * size));
        crc2.stroke();
    }

    //Funktion zufällig platzierte Sterne
    function randomStar(): void {
        drawStar(Math.random() * 1500, Math.random() * 600, 0.9 + Math.random() * 1.5);
    }
    //Animate Funktion
    function animate(): void {
        crc2.putImageData(imgData, 0, 0);

        for (let i: number = 0; i < starData.length; i++) {
            let s: Shootingstar = starData[i];
            s.update();
        }

        window.setTimeout(animate, 20);
    }
}