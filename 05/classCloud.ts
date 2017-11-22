/*
Aufgabe: 5
Name: Anja Ott
Matrikel: 256342
Datum: 17.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A05 {

    export class Cloud {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        
        
        move(): void{
            if(this.x > 800){
                this.x = 0;
                }
            this.x += Math.random() * 2;
            console.log("move cloud");
            }
 
        
        draw(): void{
             crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 40, this.y, 22, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 20, this.y, 25, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            
            crc2.beginPath();
            crc2.arc(this.x, this.y - 20, 20, 0, 2 * Math.PI);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            }
        
        update(): void{
            this.move();
            this.draw();
            }


    }
}