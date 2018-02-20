/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace ShootingStar {

    export class Shootingstar {
        x: number;
        y: number;
        xPosition: number;
        yPosition: number;
        speed: number;


        constructor(_x: number, _y: number) {
            console.log("constructor test");
            this.setBeginningPosition();
            this.setPosition();
            this.x = _x;
            this.y = _y;
            this.speed = 0.03;
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            let xMove: number = this.xPosition - this.x;
            let yMove: number = this.yPosition - this.y;
            if (Math.abs(xMove) < 1 && Math.abs(yMove) < 1)
                this.setPosition();
            else {
                this.x += xMove * this.speed;
                this.y += yMove * this.speed;
            }
        }


        draw(): void {
            //Stern
            crc2.beginPath();
            crc2.moveTo(this.x + 200, this.y + 95);
            crc2.lineTo(this.x + 225, this.y + 140);
            crc2.lineTo(this.x + 175, this.y + 140);
            crc2.closePath();
            crc2.fillStyle = "#ffffcc";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 200, this.y + 155);
            crc2.lineTo(this.x + 225, this.y + 110);
            crc2.lineTo(this.x + 175, this.y + 110);
            crc2.closePath();
            crc2.fillStyle = "#ffffcc";
            crc2.fill();

            //Schweif
            crc2.beginPath();
            crc2.moveTo(this.x + 200, this.y + 120);
            crc2.lineTo(this.x, this.y);
            crc2.lineTo(this.x + 195, this.y + 120);
            crc2.closePath();
            crc2.fillStyle = "#ffffcc";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 200, this.y + 127);
            crc2.lineTo(this.x + 30, this.y + 30);
            crc2.lineTo(this.x + 195, this.y + 127);
            crc2.closePath();
            crc2.fillStyle = "#ffffcc";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 200, this.y + 135);
            crc2.lineTo(this.x + 40, this.y + 40);
            crc2.lineTo(this.x + 195, this.y + 135);
            crc2.closePath();
            crc2.fillStyle = "#ffffcc";
            crc2.fill();

        }
        setPosition(): void {

            this.xPosition = 1000;
            this.yPosition = 700;
        }


        setBeginningPosition(): void {
            this.x = 500;
            this.y = 200;
        }
    }
}