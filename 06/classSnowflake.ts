/*
Aufgabe: 6
Name: Anja Ott
Matrikel: 256342
Datum: 24.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A06 {

    export class Snowflake extends MovingObjects {
        

        constructor(_x: number, _y: number) {
            super(_x, _y);
        }
        
        
        move(): void{
            if(this.y > 600){
                this.y = 0;
                }
            this.x += Math.random() * 2 -1;
            this.y += Math.random() * 2;
            }
        
        
        draw(): void{
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            }
        
    }
}