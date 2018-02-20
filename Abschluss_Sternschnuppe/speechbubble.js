/*
Aufgabe: Abschlussarbeit
Name: Anja Ott
Matrikel: 256342
Datum: 23.02.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var ShootingStar;
(function (ShootingStar) {
    class Speechbubble {
        constructor(_x, _y) {
            console.log("constructor test");
            this.x = _x;
            this.y = _y;
        }
        drawBubble(_x, _y) {
            ShootingStar.crc2.beginPath();
            ShootingStar.crc2.moveTo(_x, _y);
            ShootingStar.crc2.lineTo(_x + 300, _y);
            ShootingStar.crc2.lineTo(_x + 300, _y + 80);
            ShootingStar.crc2.lineTo(_x, _y + 80);
            ShootingStar.crc2.closePath();
            ShootingStar.crc2.fillStyle = "#ffffff";
            ShootingStar.crc2.fill();
            ShootingStar.crc2.beginPath();
            ShootingStar.crc2.moveTo(_x + 50, _y + 80);
            ShootingStar.crc2.lineTo(_x + 50, _y + 110);
            ShootingStar.crc2.lineTo(_x + 90, _y + 80);
            ShootingStar.crc2.closePath();
            ShootingStar.crc2.fillStyle = "#ffffff";
            ShootingStar.crc2.fill();
            ShootingStar.crc2.beginPath();
            ShootingStar.crc2.strokeStyle = "#000000";
            ShootingStar.crc2.fillStyle = "#000000";
            ShootingStar.crc2.font = "45px Rouge Script";
            ShootingStar.crc2.fillText("Make a wish!", _x + 45, _y + 50);
            ShootingStar.crc2.fill();
            ShootingStar.crc2.stroke();
            ShootingStar.crc2.closePath();
        }
    }
    ShootingStar.Speechbubble = Speechbubble;
})(ShootingStar || (ShootingStar = {}));
//# sourceMappingURL=speechbubble.js.map