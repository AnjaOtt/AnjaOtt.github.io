/*
Aufgabe: 5
Name: Anja Ott
Matrikel: 256342
Datum: 17.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A05;
(function (A05) {
    class Cloud {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += Math.random() * 2;
            console.log("move cloud");
        }
        draw() {
            A05.crc2.beginPath();
            A05.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            A05.crc2.fillStyle = "#ffffff";
            A05.crc2.fill();
            A05.crc2.beginPath();
            A05.crc2.arc(this.x + 40, this.y, 22, 0, 2 * Math.PI);
            A05.crc2.fillStyle = "#ffffff";
            A05.crc2.fill();
            A05.crc2.beginPath();
            A05.crc2.arc(this.x + 20, this.y, 25, 0, 2 * Math.PI);
            A05.crc2.fillStyle = "#ffffff";
            A05.crc2.fill();
            A05.crc2.beginPath();
            A05.crc2.arc(this.x, this.y - 20, 20, 0, 2 * Math.PI);
            A05.crc2.fillStyle = "#ffffff";
            A05.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    A05.Cloud = Cloud;
})(A05 || (A05 = {}));
//# sourceMappingURL=classCloud.js.map