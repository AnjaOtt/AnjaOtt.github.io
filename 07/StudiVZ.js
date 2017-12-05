/*
Aufgabe: 7
Name: Anja Ott
Matrikel: 256342
Datum: 01.12.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let splitted = _input.split(",");
        let studentDat = {
            matrikel: parseInt(splitted[0]),
            name: splitted[1],
            vorname: splitted[2],
            alter: parseInt(splitted[3]),
            geschlecht: parseInt(splitted[4]) == 0,
            kommentar: splitted[5]
        };
        if (Number.isNaN(studentDat.matrikel)) {
            return "Matrikelnummer falsch";
        }
        students.push(studentDat);
        return "Deine Daten: " + "\nMatrikelnr: " + studentDat.matrikel + "\nName: " + studentDat.name + "\nVorname: " + studentDat.vorname + "\nAlter: " + studentDat.alter + "\nGeschlecht: " + studentDat.geschlecht + "\nKommentar: " + studentDat.kommentar;
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikel == _matrikel) {
                return "Deine Daten: " + "\nMatrikelnr: " + students[i].matrikel + "\nName: " + students[i].name + "\nVorname: " + students[i].vorname + "\nAlter: " + students[i].alter + "\nGeschlecht: " + students[i].geschlecht + "\nKommentar: " + students[i].kommentar;
            }
            else {
                continue;
            }
        }
        return "Matrikelnummer nicht gespeichert";
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=StudiVZ.js.map