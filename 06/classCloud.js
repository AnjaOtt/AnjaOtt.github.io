/*
Aufgabe: 6
Name: Anja Ott
Matrikel: 256342
Datum: 24.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A06;
(function (A06) {
    class Cloud extends A06.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        move() {
            if (this.x > 800) {
                this.x = 0;
            }
            this.x += Math.random() * 2;
        }
        draw() {
            A06.crc2.beginPath();
            A06.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            A06.crc2.fillStyle = "#ffffff";
            A06.crc2.fill();
            A06.crc2.beginPath();
            A06.crc2.arc(this.x + 40, this.y, 22, 0, 2 * Math.PI);
            A06.crc2.fillStyle = "#ffffff";
            A06.crc2.fill();
            A06.crc2.beginPath();
            A06.crc2.arc(this.x + 20, this.y, 25, 0, 2 * Math.PI);
            A06.crc2.fillStyle = "#ffffff";
            A06.crc2.fill();
            A06.crc2.beginPath();
            A06.crc2.arc(this.x, this.y - 20, 20, 0, 2 * Math.PI);
            A06.crc2.fillStyle = "#ffffff";
            A06.crc2.fill();
        }
    }
    A06.Cloud = Cloud;
})(A06 || (A06 = {}));
//# sourceMappingURL=classCloud.js.map