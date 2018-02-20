/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var ShootingStar;
(function (ShootingStar) {
    class Shootingstar {
        constructor(_x, _y) {
            console.log("constructor test");
            this.setBeginningPosition();
            this.setPosition();
            this.x = _x;
            this.y = _y;
            this.speed = 0.03;
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            let xMove = this.xPosition - this.x;
            let yMove = this.yPosition - this.y;
            if (Math.abs(xMove) < 1 && Math.abs(yMove) < 1)
                this.setPosition();
            else {
                this.x += xMove * this.speed;
                this.y += yMove * this.speed;
            }
        }
        draw() {
            //Stern
            ShootingStar.crc2.beginPath();
            ShootingStar.crc2.moveTo(this.x + 200, this.y + 95);
            ShootingStar.crc2.lineTo(this.x + 225, this.y + 140);
            ShootingStar.crc2.lineTo(this.x + 175, this.y + 140);
            ShootingStar.crc2.closePath();
            ShootingStar.crc2.fillStyle = "#ffffcc";
            ShootingStar.crc2.fill();
            ShootingStar.crc2.beginPath();
            ShootingStar.crc2.moveTo(this.x + 200, this.y + 155);
            ShootingStar.crc2.lineTo(this.x + 225, this.y + 110);
            ShootingStar.crc2.lineTo(this.x + 175, this.y + 110);
            ShootingStar.crc2.closePath();
            ShootingStar.crc2.fillStyle = "#ffffcc";
            ShootingStar.crc2.fill();
            //Schweif
            ShootingStar.crc2.beginPath();
            ShootingStar.crc2.moveTo(this.x + 200, this.y + 120);
            ShootingStar.crc2.lineTo(this.x, this.y);
            ShootingStar.crc2.lineTo(this.x + 195, this.y + 120);
            ShootingStar.crc2.closePath();
            ShootingStar.crc2.fillStyle = "#ffffcc";
            ShootingStar.crc2.fill();
            ShootingStar.crc2.beginPath();
            ShootingStar.crc2.moveTo(this.x + 200, this.y + 127);
            ShootingStar.crc2.lineTo(this.x + 30, this.y + 30);
            ShootingStar.crc2.lineTo(this.x + 195, this.y + 127);
            ShootingStar.crc2.closePath();
            ShootingStar.crc2.fillStyle = "#ffffcc";
            ShootingStar.crc2.fill();
            ShootingStar.crc2.beginPath();
            ShootingStar.crc2.moveTo(this.x + 200, this.y + 135);
            ShootingStar.crc2.lineTo(this.x + 40, this.y + 40);
            ShootingStar.crc2.lineTo(this.x + 195, this.y + 135);
            ShootingStar.crc2.closePath();
            ShootingStar.crc2.fillStyle = "#ffffcc";
            ShootingStar.crc2.fill();
        }
        setPosition() {
            this.xPosition = 1000;
            this.yPosition = 700;
        }
        setBeginningPosition() {
            this.x = 500;
            this.y = 200;
        }
    }
    ShootingStar.Shootingstar = Shootingstar;
})(ShootingStar || (ShootingStar = {}));
//# sourceMappingURL=shootingstarclass.js.map