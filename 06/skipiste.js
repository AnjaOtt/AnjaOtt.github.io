/*
Aufgabe: 6
Name: Anja Ott
Matrikel: 256342
Datum: 24.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A06;
(function (A06) {
    window.addEventListener("load", init); //Wenn Seite vollst�ndig geladen, beginnt die Funktion
    //
    let objects = [];
    let imgData;
    //Funktion f�r Canvas
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log("start init");
        A06.crc2 = canvas.getContext("2d");
        console.log(A06.crc2);
        //Himmel
        A06.crc2.beginPath();
        A06.crc2.moveTo(600, 0);
        A06.crc2.lineTo(0, 400);
        A06.crc2.lineTo(0, 0);
        A06.crc2.closePath();
        A06.crc2.stroke();
        A06.crc2.fillStyle = "#DDEBF7";
        A06.crc2.fill();
        //Sonne    
        A06.crc2.beginPath();
        A06.crc2.arc(60, 50, 40, 0, 2 * Math.PI);
        A06.crc2.fillStyle = "#EED531";
        A06.crc2.fill();
        //Wolke    
        //Berge
        A06.crc2.beginPath();
        A06.crc2.moveTo(0, 260);
        A06.crc2.lineTo(100, 192);
        A06.crc2.lineTo(130, 230);
        A06.crc2.lineTo(0, 400);
        A06.crc2.closePath();
        A06.crc2.stroke();
        A06.crc2.fillStyle = "#91A292";
        A06.crc2.fill();
        A06.crc2.beginPath();
        A06.crc2.moveTo(0, 320);
        A06.crc2.lineTo(320, 98);
        A06.crc2.lineTo(364, 158);
        A06.crc2.lineTo(0, 400);
        A06.crc2.closePath();
        A06.crc2.stroke();
        A06.crc2.fillStyle = "#91A292";
        A06.crc2.fill();
        //Lift
        A06.crc2.beginPath();
        A06.crc2.moveTo(750, 100);
        A06.crc2.lineTo(750, 170);
        A06.crc2.closePath();
        A06.crc2.stroke();
        A06.crc2.beginPath();
        A06.crc2.moveTo(725, 100);
        A06.crc2.lineTo(775, 100);
        A06.crc2.closePath();
        A06.crc2.stroke();
        A06.crc2.beginPath();
        A06.crc2.moveTo(550, 300);
        A06.crc2.lineTo(550, 370);
        A06.crc2.closePath();
        A06.crc2.stroke();
        A06.crc2.beginPath();
        A06.crc2.moveTo(525, 300);
        A06.crc2.lineTo(575, 300);
        A06.crc2.closePath();
        A06.crc2.stroke();
        A06.crc2.beginPath();
        A06.crc2.moveTo(350, 500);
        A06.crc2.lineTo(350, 570);
        A06.crc2.closePath();
        A06.crc2.stroke();
        A06.crc2.beginPath();
        A06.crc2.moveTo(325, 500);
        A06.crc2.lineTo(375, 500);
        A06.crc2.closePath();
        A06.crc2.stroke();
        A06.crc2.beginPath();
        A06.crc2.moveTo(800, 50);
        A06.crc2.lineTo(750, 100);
        A06.crc2.closePath();
        A06.crc2.stroke();
        A06.crc2.beginPath();
        A06.crc2.moveTo(750, 100);
        A06.crc2.lineTo(550, 300);
        A06.crc2.closePath();
        A06.crc2.stroke();
        A06.crc2.beginPath();
        A06.crc2.moveTo(550, 300);
        A06.crc2.lineTo(350, 500);
        A06.crc2.closePath();
        A06.crc2.stroke();
        A06.crc2.beginPath();
        A06.crc2.moveTo(350, 500);
        A06.crc2.lineTo(250, 600);
        A06.crc2.closePath();
        A06.crc2.stroke();
        //an bestimmte Positionen gezeichnete B�ume
        drawTree(670, 450, "#315A10");
        drawTree(550, 500, "#315A10");
        //Schleife f�r zuf�llige B�ume, wieviel und in welchem Bereich festgelegt
        for (let i = 0; i < 10; i++) {
            let x = 500 + Math.random() * 200;
            let y = 350 + Math.random() * 200;
            drawTree(x, y, "#549222");
        }
        //Schleife f�r Skifahrer
        for (let i = 0; i < 7; i++) {
            let s = new A06.Skier(Math.random() * 500 + 750, Math.random() * 200 - 25);
            objects.push(s);
        }
        //Schleife f�r Schneeflocken
        for (let i = 0; i < 2000; i++) {
            let s = new A06.Snowflake(Math.random() * 800, Math.random() * 600);
            objects.push(s);
        }
        //Schleife f�r Wolken
        for (let i = 0; i < 3; i++) {
            let s = new A06.Cloud(Math.random() * 800, Math.random() * 30 + 40);
            objects.push(s);
        }
        //Hintergrund speichern
        imgData = A06.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Funktionsaufruf
        animate();
    }
    //Funktion zeichne Baum
    function drawTree(_x, _y, _color) {
        A06.crc2.beginPath();
        A06.crc2.moveTo(_x, _y + 20);
        A06.crc2.lineTo(_x - 30, _y + 50);
        A06.crc2.lineTo(_x + 30, _y + 50);
        A06.crc2.closePath();
        A06.crc2.stroke();
        A06.crc2.fillStyle = _color;
        A06.crc2.fill();
        A06.crc2.beginPath();
        A06.crc2.moveTo(_x, _y);
        A06.crc2.lineTo(_x - 30, _y + 30);
        A06.crc2.lineTo(_x + 30, _y + 30);
        A06.crc2.closePath();
        A06.crc2.stroke();
        A06.crc2.fillStyle = _color;
        A06.crc2.fill();
    }
    //Funktion zum Animieren
    function animate() {
        console.log("Timeout");
        A06.crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.update();
        }
        window.setTimeout(animate, 20); //alle 20 ms f�hrt sich die Funktion neu aus
    }
})(A06 || (A06 = {}));
//# sourceMappingURL=skipiste.js.map