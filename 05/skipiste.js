/*
Aufgabe: 5
Name: Anja Ott
Matrikel: 256342
Datum: 17.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A05;
(function (A05) {
    window.addEventListener("load", init); //Wenn Seite vollst�ndig geladen, beginnt die Funktion
    //Variablen der Klassen
    let cloud = [];
    let snowflake = [];
    let skier = [];
    let imgData;
    //Funktion f�r Canvas
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log("start init");
        A05.crc2 = canvas.getContext("2d");
        console.log(A05.crc2);
        //Himmel
        A05.crc2.beginPath();
        A05.crc2.moveTo(600, 0);
        A05.crc2.lineTo(0, 400);
        A05.crc2.lineTo(0, 0);
        A05.crc2.closePath();
        A05.crc2.stroke();
        A05.crc2.fillStyle = "#DDEBF7";
        A05.crc2.fill();
        //Sonne    
        A05.crc2.beginPath();
        A05.crc2.arc(60, 50, 40, 0, 2 * Math.PI);
        A05.crc2.fillStyle = "#EED531";
        A05.crc2.fill();
        //Wolke    
        //Berge
        A05.crc2.beginPath();
        A05.crc2.moveTo(0, 260);
        A05.crc2.lineTo(100, 192);
        A05.crc2.lineTo(130, 230);
        A05.crc2.lineTo(0, 400);
        A05.crc2.closePath();
        A05.crc2.stroke();
        A05.crc2.fillStyle = "#91A292";
        A05.crc2.fill();
        A05.crc2.beginPath();
        A05.crc2.moveTo(0, 320);
        A05.crc2.lineTo(320, 98);
        A05.crc2.lineTo(364, 158);
        A05.crc2.lineTo(0, 400);
        A05.crc2.closePath();
        A05.crc2.stroke();
        A05.crc2.fillStyle = "#91A292";
        A05.crc2.fill();
        //Lift
        A05.crc2.beginPath();
        A05.crc2.moveTo(750, 100);
        A05.crc2.lineTo(750, 170);
        A05.crc2.closePath();
        A05.crc2.stroke();
        A05.crc2.beginPath();
        A05.crc2.moveTo(725, 100);
        A05.crc2.lineTo(775, 100);
        A05.crc2.closePath();
        A05.crc2.stroke();
        A05.crc2.beginPath();
        A05.crc2.moveTo(550, 300);
        A05.crc2.lineTo(550, 370);
        A05.crc2.closePath();
        A05.crc2.stroke();
        A05.crc2.beginPath();
        A05.crc2.moveTo(525, 300);
        A05.crc2.lineTo(575, 300);
        A05.crc2.closePath();
        A05.crc2.stroke();
        A05.crc2.beginPath();
        A05.crc2.moveTo(350, 500);
        A05.crc2.lineTo(350, 570);
        A05.crc2.closePath();
        A05.crc2.stroke();
        A05.crc2.beginPath();
        A05.crc2.moveTo(325, 500);
        A05.crc2.lineTo(375, 500);
        A05.crc2.closePath();
        A05.crc2.stroke();
        A05.crc2.beginPath();
        A05.crc2.moveTo(800, 50);
        A05.crc2.lineTo(750, 100);
        A05.crc2.closePath();
        A05.crc2.stroke();
        A05.crc2.beginPath();
        A05.crc2.moveTo(750, 100);
        A05.crc2.lineTo(550, 300);
        A05.crc2.closePath();
        A05.crc2.stroke();
        A05.crc2.beginPath();
        A05.crc2.moveTo(550, 300);
        A05.crc2.lineTo(350, 500);
        A05.crc2.closePath();
        A05.crc2.stroke();
        A05.crc2.beginPath();
        A05.crc2.moveTo(350, 500);
        A05.crc2.lineTo(250, 600);
        A05.crc2.closePath();
        A05.crc2.stroke();
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
            skier[i] = new A05.Skier(Math.random() * 500 + 750, Math.random() * 200 - 25, Math.random() * 1.5 - 3.5, Math.random() * 1 + 1, "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            console.log("for-Schleife Skifahrer init");
        }
        //Schleife f�r Schneeflocken
        for (let i = 0; i < 2000; i++) {
            snowflake[i] = new A05.Snowflake(Math.random() * 800, Math.random() * 600);
            console.log("for-Schleife Snowflake init");
        }
        //Schleife f�r Wolken
        for (let i = 0; i < 3; i++) {
            cloud[i] = new A05.Cloud(Math.random() * 800, Math.random() * 30 + 40);
            console.log("for-Schleife Cloud init");
        }
        //Hintergrund speichern
        imgData = A05.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //Funktionsaufruf
        animate();
    }
    //Funktion zeichne Baum
    function drawTree(_x, _y, _color) {
        A05.crc2.beginPath();
        A05.crc2.moveTo(_x, _y + 20);
        A05.crc2.lineTo(_x - 30, _y + 50);
        A05.crc2.lineTo(_x + 30, _y + 50);
        A05.crc2.closePath();
        A05.crc2.stroke();
        A05.crc2.fillStyle = _color;
        A05.crc2.fill();
        A05.crc2.beginPath();
        A05.crc2.moveTo(_x, _y);
        A05.crc2.lineTo(_x - 30, _y + 30);
        A05.crc2.lineTo(_x + 30, _y + 30);
        A05.crc2.closePath();
        A05.crc2.stroke();
        A05.crc2.fillStyle = _color;
        A05.crc2.fill();
    }
    //Funktion zum Animieren
    function animate() {
        console.log("Timeout");
        A05.crc2.putImageData(imgData, 0, 0);
        //Skifahrer fahren lassen
        for (let i = 0; i < skier.length; i++) {
            skier[i].update();
        }
        //Schneeflocken fallen lassen
        for (let i = 0; i < snowflake.length; i++) {
            snowflake[i].update();
        }
        //Wolken ziehen lassen
        for (let i = 0; i < cloud.length; i++) {
            cloud[i].update();
        }
        window.setTimeout(animate, 20); //alle 20 ms f�hrt sich die Funktion neu aus
    }
})(A05 || (A05 = {}));
//# sourceMappingURL=skipiste.js.map