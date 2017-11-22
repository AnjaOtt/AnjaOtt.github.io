/*
Aufgabe: 5
Name: Anja Ott
Matrikel: 256342
Datum: 17.11.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A05;
(function (A05) {
    class Snowflake {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        move() {
            if (this.y > 600) {
                this.y = 0;
            }
            this.x += Math.random() * 2 - 1;
            this.y += Math.random() * 2;
        }
        draw() {
            A05.crc2.beginPath();
            A05.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            A05.crc2.fillStyle = "#ffffff";
            A05.crc2.fill();
        }
        update() {
            this.move();
            this.draw();
        }
    }
    A05.Snowflake = Snowflake;
})(A05 || (A05 = {}));
//# sourceMappingURL=classSnowflake.js.map