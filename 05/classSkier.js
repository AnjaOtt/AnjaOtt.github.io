/*
Aufgabe: 5
Name: Anja Ott
Matrikel: 256342
Datum: 17.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A05;
(function (A05) {
    class Skier {
        constructor(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
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
            A05.crc2.fillStyle = this.color;
            A05.crc2.fillRect(this.x, this.y, 10, -23);
            A05.crc2.beginPath();
            A05.crc2.arc(this.x + 5, this.y - 23, 7, 0, 2 * Math.PI);
            A05.crc2.fillStyle = this.color;
            A05.crc2.fill();
            A05.crc2.beginPath();
            A05.crc2.moveTo(this.x + 20, this.y - 4);
            A05.crc2.lineTo(this.x - 20, this.y + 4);
            A05.crc2.stroke();
        }
        update() {
            console.log("move Skifahrer");
            this.move();
            this.draw();
        }
    }
    A05.Skier = Skier;
})(A05 || (A05 = {}));
//# sourceMappingURL=classSkier.js.map