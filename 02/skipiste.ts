/*
Aufgabe: 2
Name: Anja Ott
Matrikel: 256342
Datum: 20.10.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A02 {

    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
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

        //Baum1    
        crc2.beginPath();
        crc2.moveTo(760, 260);
        crc2.lineTo(730, 290);
        crc2.lineTo(790, 290);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#315A10";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(760, 240);
        crc2.lineTo(730, 270);
        crc2.lineTo(790, 270);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#315A10";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(760, 220);
        crc2.lineTo(730, 250);
        crc2.lineTo(790, 250);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#315A10";
        crc2.fill();

        //Baum2
        crc2.beginPath();
        crc2.moveTo(670, 340);
        crc2.lineTo(640, 370);
        crc2.lineTo(700, 370);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#549222";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(670, 320);
        crc2.lineTo(640, 350);
        crc2.lineTo(700, 350);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#549222";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(670, 300);
        crc2.lineTo(640, 330);
        crc2.lineTo(700, 330);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#549222";
        crc2.fill();

        drawTree(670, 450, "#315A10");
        drawTree(550, 500, "#315A10");

        for (let i: number = 0; i < 10; i++) {
            let x: number = 500 + Math.random() * 200;
            let y: number = 350 + Math.random() * 200;
            drawTree(x, y, "#549222");
        }
    }
    
    function drawTree(_x: number, _y: number, _color: string): void {
        //Bäume
        
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
}