/*
Aufgabe: 6
Name: Anja Ott
Matrikel: 256342
Datum: 24.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A06;
(function (A06) {
    class Skier extends A06.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
            this.dx = Math.random() * 1.5 - 3.5;
            this.dy = Math.random() * 1 + 1;
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        move() {
            if (this.x < 0 || this.y > 600) {
                this.x = Math.random() * 200 + 800;
                this.y = Math.random() * 100;
                this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            this.x += this.dx;
            this.y += this.dy;
        }
        draw() {
            A06.crc2.fillStyle = this.color;
            A06.crc2.fillRect(this.x, this.y, 10, -23);
            A06.crc2.beginPath();
            A06.crc2.arc(this.x + 5, this.y - 23, 7, 0, 2 * Math.PI);
            A06.crc2.fillStyle = this.color;
            A06.crc2.fill();
            A06.crc2.beginPath();
            A06.crc2.moveTo(this.x + 20, this.y - 4);
            A06.crc2.lineTo(this.x - 20, this.y + 4);
            A06.crc2.stroke();
        }
    }
    A06.Skier = Skier;
})(A06 || (A06 = {}));
//# sourceMappingURL=classSkier.js.map