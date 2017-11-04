/*
Aufgabe: 3
Name: Anja Ott
Matrikel: 256342
Datum: 04.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A02 {

    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    
    let snowX: number[] = [];
    let snowY: number[] = [];
    let cloudX: number[] = [];
    let cloudY: number[] = [];
    let driverX: number[] = [];
    let driverY: number[] = [];

    let imgData: ImageData;

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



        //plazierte Bäume
        drawTree(670, 450, "#315A10");
        drawTree(550, 500, "#315A10");


        //Schleife für zufällige Bäume

        for (let i: number = 0; i < 10; i++) {
            let x: number = 500 + Math.random() * 200;
            let y: number = 350 + Math.random() * 200;
            drawTree(x, y, "#549222");
        }

        //Schleife für Schnee
        for (let i: number = 0; i < 2000; i++) {
            snowX[i] = 0 + Math.random() * 800;
            snowY[i] = 0 + Math.random() * 600;
        }
        
        //Schleife für Wolke
        for (let i: number = 0; i < 1; i++) {
            snowX[i] = 0 + Math.random() * 800;
            snowY[i] = 0 + Math.random() * 100;
        }
        
        //Schleife für Skifahrer
        for (let i: number = 0; i < 1; i++) {
            driverX[i] = 800;
            driverY[i] = 50;
        }


        //Hintergrund speichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Funktionsaufruf
          animate();
    }

    //Funktion zeichne Baum

    function drawTree(_x: number, _y: number, _color: string): void {

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
    function drawSnow(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }

    //Funktion zeichne Wolken
    function drawCloud(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x,_y, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x+40, _y, 22, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x+20, _y, 25, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.arc(_x, _y-20, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    
    //Funktion zeichne Skifahrer
    function drawDriver(_x: number, _y: number): void {
       crc2.fillStyle = "#000000";
        crc2.fillRect(_x, _y, 10, - 23);
        crc2.fillStyle = "#000000";
        crc2.beginPath();
        crc2.arc(_x + 5, _y - 23, 7, 0, 2 * Math.PI);
        crc2.fill();
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.beginPath();
        crc2.moveTo(_x + 20, _y - 4);
        crc2.lineTo(_x - 20, _y + 4);
        crc2.stroke();


    }
    
    //Funktion zum Animieren
        function animate(): void {
        console.log("Timeout");
        crc2.putImageData(imgData, 0, 0);

        //Schneeflocken
        for (let i: number = 0; i < snowX.length; i++) {
            if (snowY[i] > 600) {
                snowY[i] = 0;
            }
            snowY[i] += Math.random();
            drawSnow(snowX[i], snowY[i]);
        }

        //Wolke
        for (let i: number = 0; i < cloudX.length; i++) {
            if (cloudX[i] > 800) {
                cloudX[i] = 0;
            }
            cloudX[i] += 0.4;
            drawCloud(cloudX[i], cloudY[i]);
        }

        //Skifahrer
        for (let i: number = 0; i < driverX.length; i++) {
           if (driverX[i] < 0 || driverY[i] > 600) {
                driverX[i] = 800;
                driverY[i] = 50;
            }
            driverX[i] -= 3;
            driverY[i] += 2;
            drawDriver(driverX[i], driverY[i]);
        }
        window.setTimeout(animate, 20); //alle 20 ms führt sich die Funktion neu aus
    }

}







