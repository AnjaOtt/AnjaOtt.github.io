/*
Aufgabe: 5
Name: Anja Ott
Matrikel: 256342
Datum: 17.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A05 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;


    let cloud: Cloud[] = [];
    let snowflake: Snowflake[] = [];
    let skier: Skier[] = [];

    let imgData: ImageData;


    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log("start init");

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



        //Skifahrer
        for (let i: number = 0; i < 7; i++) {
            skier[i] = new Skier(Math.random() * 500 + 750,
                Math.random() * 200 - 25,
                Math.random() * 1.5 - 3.5,
                Math.random() * 1 + 1,
                "hsl(" + Math.random() * 360 + ", 100%, 50%)");
            console.log("for-Schleife Skifahrer init");
        }
        
        //Schneeflocken
        for (let i: number = 0; i < 2000; i++) {
            snowflake[i] = new Snowflake(Math.random()*800, Math.random()*600);
            console.log("for-Schleife Snowflake init");
        }
        
        //Wolken
        for (let i: number = 0; i < 3; i++) {
            cloud[i] = new Cloud(Math.random()*800,Math.random() * 30 + 40);
            console.log("for-Schleife Cloud init");
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


    //Funktion zum Animieren
    function animate(): void {
        console.log("Timeout");
        crc2.putImageData(imgData, 0, 0);

        //Skifahrer
        for (let i: number = 0; i < skier.length; i++) {
            skier[i].update();
        }

        //Schneeflocken
            for (let i: number = 0; i < snowflake.length; i++) {
                snowflake[i].update();
            }

            
            
            //Wolken ziehen lassen
            for (let i: number = 0; i < cloud.length; i++) {
                cloud[i].update();
                    
                }
                


        window.setTimeout(animate, 20); //alle 20 ms führt sich die Funktion neu aus
    }
}








