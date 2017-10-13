/*
Aufgabe: 1
Name: Anja Ott
Matrikel: 256342
Datum: 13.10.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

window.addEventListener("load", init);

function init(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2);
    
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(400, 300);
    crc2.stroke();
}