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
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0=m oder 1=w) und Kommentar");
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
        let splitted = _input.split(",", 6); //String wird in 6 Teile gesplittet
        if (Number.isNaN(parseInt(splitted[0]))) {
            return "'Matrikelnummer' muss eine Zahl sein";
        }
        else if (splitted[1] == "") {
            return "'Name' darf nicht leer sein";
        }
        else if (splitted[2] == "") {
            return "'Vorname' darf nicht leer sein";
        }
        else if (parseInt(splitted[3]) == NaN) {
            return "'Alter' muss eine Zahl sein";
        }
        else if (parseInt(splitted[4]) != 1 && parseInt(splitted[4]) != 0) {
            return "'Geschlecht' bitte mit 0=m oder 1=w eingeben; Eingabe war: " + splitted[4];
        }
        else if (splitted[5] == "") {
            return "Bitte Kommentar eingeben";
        }
        else {
            let studentDat = {
                matrikel: parseInt(splitted[0]),
                name: splitted[1],
                vorname: splitted[2],
                alter: parseInt(splitted[3]),
                geschlecht: parseInt(splitted[4]) == 1,
                kommentar: splitted[5]
            };
            students.push(studentDat);
            return "Daten erfolgreich gespeichert";
        }
    }
    function queryData(_matrikel) {
        for (let i = 0; i < students.length; i++) {
            if (students[i].matrikel == _matrikel) {
                let matrikelnummer = "Matrikelnummer " + students[i].matrikel;
                let name = "Name: " + students[i].name;
                let vorname = "Vorname: " + students[i].vorname;
                let alter = "Alter: " + students[i].alter;
                let geschlecht;
                if (students[i].geschlecht) {
                    geschlecht = "Geschlecht: weiblich";
                }
                else
                    geschlecht = "Geschlecht: m�nnlich";
                let kommentar = "Kommentar: " + students[i].kommentar;
                return "Deine Daten: " + "\n" + matrikelnummer + "\n" + name + "\n" + vorname + "\n" + alter + "\n" + geschlecht + "\n" + kommentar;
            }
            else {
                return "Deine Daten sind in der Datenbank nicht vorhanden";
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=StudiVZ.js.map