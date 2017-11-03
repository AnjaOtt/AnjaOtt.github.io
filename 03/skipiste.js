/*
Aufgabe: 3
Name: Anja Ott
Matrikel: 256342
Datum: 02.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A02;
(function (A02) {
    window.addEventListener("load", init);
    let crc2;
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //Himmel
        crc2.beginPath();
        crc2.moveTo(600, 0);
        crc2.lineTo(0, 400);
        crc2.lineTo(0, 0);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#DDEBF7";
        crc2.fill();
        //Sonne    
        crc2.beginPath();
        crc2.arc(60, 50, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#EED531";
        crc2.fill();
        //Wolke    
        crc2.beginPath();
        crc2.arc(103, 70, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(150, 70, 22, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(131, 45, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.arc(130, 70, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        //Berge
        crc2.beginPath();
        crc2.moveTo(0, 260);
        crc2.lineTo(100, 192);
        crc2.lineTo(130, 230);
        crc2.lineTo(0, 400);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#91A292";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(0, 320);
        crc2.lineTo(320, 98);
        crc2.lineTo(364, 158);
        crc2.lineTo(0, 400);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#91A292";
        crc2.fill();
        //Lift
        crc2.beginPath();
        crc2.moveTo(750, 100);
        crc2.lineTo(750, 170);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(725, 100);
        crc2.lineTo(775, 100);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(550, 300);
        crc2.lineTo(550, 370);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(525, 300);
        crc2.lineTo(575, 300);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(350, 500);
        crc2.lineTo(350, 570);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(325, 500);
        crc2.lineTo(375, 500);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(800, 50);
        crc2.lineTo(750, 100);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(750, 100);
        crc2.lineTo(550, 300);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(550, 300);
        crc2.lineTo(350, 500);
        crc2.closePath();
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(350, 500);
        crc2.lineTo(250, 600);
        crc2.closePath();
        crc2.stroke();
        //plazierte B�ume
        drawTree(670, 450, "#315A10");
        drawTree(550, 500, "#315A10");
        //Schleife f�r zuf�llige B�ume
        for (let i = 0; i < 10; i++) {
            let x = 500 + Math.random() * 200;
            let y = 350 + Math.random() * 200;
            drawTree(x, y, "#549222");
        }
        //Schleife f�r zuf�llige Schneeflocken
        for (let i = 0; i < 2000; i++) {
            let x = Math.random() * 800;
            let y = Math.random() * 600;
            drawSnow(x, y, "#FFFFFF");
        }
    }
    //Funktion zeichne Baum
    function drawTree(_x, _y, _color) {
        crc2.beginPath();
        crc2.moveTo(_x, _y + 20);
        crc2.lineTo(_x - 30, _y + 50);
        crc2.lineTo(_x + 30, _y + 50);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x - 30, _y + 30);
        crc2.lineTo(_x + 30, _y + 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    // Funktion zeichne Schnee
    function drawSnow(_x, _y, _color) {
        crc2.beginPath();
        crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = _color;
        crc2.fill();
    }
})(A02 || (A02 = {}));
//# sourceMappingURL=skipiste.js.map