/*
Aufgabe: 6
Name: Anja Ott
Matrikel: 256342
Datum: 24.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace A06 {

    export class Skier extends MovingObjects {
  
        dx: number; //Bewegung auf der x-Achse
        dy: number; //Bewegung auf der y-Achse
        color: string; // Farbe des Skifahrers



        constructor(_x: number, _y: number) {

           super(_x,_y)
            
            this.dx = Math.random() * 1.5 - 3.5;
            this.dy = Math.random() * 1 + 1;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";           
        }

        
        
        
        move(): void {
            if (this.x < 0 || this.y > 600) {
                this.x = Math.random() *200 + 800;
                this.y = Math.random() * 100 ;
                this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }

            this.x += this.dx;
            this.y += this.dy; 

            
        }
        
        

        draw(): void {
            
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x, this.y, 10, - 23);
            
            crc2.beginPath();
            crc2.arc(this.x + 5, this.y - 23, 7, 0, 2 * Math.PI);
            crc2.fillStyle = this.color;
            crc2.fill();
            
            crc2.beginPath();
            crc2.moveTo(this.x + 20, this.y - 4);
            crc2.lineTo(this.x - 20, this.y + 4);
            crc2.stroke();
            
        }
        
        
    }
}