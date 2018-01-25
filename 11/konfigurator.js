/*Aufgabe: 10
Name: Anja Ott
Matrikel: 256342
Datum: 08.01.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);
    //Pers�nliche Angaben/Texteingabefelder erstellen 
    var name;
    var vorname;
    var strasse;
    var hausNr;
    var ort;
    var plz;
    var mail;
    var label;
    //Variablen erstellen und bef�llen
    var basketBaumart = ["keine Baumart ausgew�hlt", "0"];
    var basketHalter = ["kein Halter ausgew�hlt", "0"];
    var basketBeleuchtung = ["keine Beleuchtung ausgew�hlt", "0"];
    var basketSchmuck = [];
    var basketLieferopt = ["keine Lieferoption ausgew�hlt", "0"];
    //Button
    let feedback = document.createElement("div");
    //Die erstellten Elemente werden sp�ter mit Eigenschaften ausgestattet und ans DOM geh�ngt
    function createElements() {
        //Baumart definieren
        let baumart = document.getElementById("baumart");
        let selectBox = document.createElement("select");
        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        baumart.appendChild(selectBox);
        for (let i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Baumart") {
                var opt = document.createElement("option");
                opt.innerText = Aufgabe10.posten[i].name;
                opt.id = "option" + i;
                selectBox.appendChild(opt);
            }
        }
        //Halterung definieren
        let halterung = document.getElementById("halterung");
        for (let i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Halter") {
                var radioB = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                //Label f�r jede Halterung hinzuf�gen
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = Aufgabe10.posten[i].name;
                halterung.appendChild(label);
            }
        }
        //Beleuchtung definieren
        let beleuchtung = document.getElementById("beleuchtung");
        let selectBox2 = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        for (let i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Beleuchtung") {
                var opt2 = document.createElement("option");
                opt2.innerText = Aufgabe10.posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }
        //Schmuckartikel definieren
        let schmuckartikel = document.getElementById("schmuckartikel");
        for (let i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Schmuck") {
                var checkB = document.createElement("input");
                checkB.type = "checkbox"; //Checkboxen erstellen
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);
                //Label f�r jeden Schmuckartikel hinzuf�gen
                var label2 = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = Aufgabe10.posten[i].name;
                schmuckartikel.appendChild(label2);
                //Stepper erstellen
                let stepper = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "15";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                var br = document.createElement("br");
                schmuckartikel.appendChild(br);
            }
        }
        //Eigende Daten bzw Lieferadresse
        let daten = document.getElementById("daten");
        name = document.createElement("input");
        name.type = "text";
        name.name = "DatenName";
        name.placeholder = "Name";
        name.pattern = "[a-zA-Z]{1,}";
        name.required = true;
        daten.appendChild(name);
        vorname = document.createElement("input");
        vorname.type = "text";
        vorname.name = "DatenName";
        vorname.placeholder = "Vorame";
        vorname.pattern = "[a-zA-Z]{1,}";
        vorname.required = true;
        daten.appendChild(vorname);
        strasse = document.createElement("input");
        strasse.type = "text";
        strasse.name = "DatenStrasse";
        strasse.placeholder = "Stra�e";
        strasse.pattern = "[a-zA-Z]{1,}";
        strasse.required = true;
        daten.appendChild(strasse);
        hausNr = document.createElement("input");
        hausNr.type = "text";
        hausNr.name = "DatenHausnummer";
        hausNr.placeholder = "Hausnummer";
        hausNr.pattern = "[0-9]{1,}";
        hausNr.required = true;
        daten.appendChild(hausNr);
        plz = document.createElement("input");
        plz.type = "text";
        plz.name = "DatenPLZ";
        plz.placeholder = "Postleitzahl";
        plz.pattern = "[0-9]{5}";
        plz.required = true;
        daten.appendChild(plz);
        ort = document.createElement("input");
        ort.type = "text";
        ort.name = "DatenOrt";
        ort.placeholder = "Ort";
        ort.pattern = "[a-zA-Z]{1,}";
        ort.required = true;
        daten.appendChild(ort);
        mail = document.createElement("input");
        mail.type = "email";
        mail.name = "DatenMail";
        mail.placeholder = "E-Mail";
        mail.required = true;
        daten.appendChild(mail);
        //Lieferoptionen definieren
        let lieferopt = document.getElementById("lieferoptionen");
        for (let i = 0; i < Aufgabe10.posten.length; i++) {
            if (Aufgabe10.posten[i].art == "Lieferung") {
                var radioB2 = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);
                //Labels hinzuf�gen
                var label3 = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = Aufgabe10.posten[i].name;
                lieferopt.appendChild(label3);
            }
        }
        //Button generieren
        let button = document.getElementById("button");
        let submit = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Bestellung �berpr�fen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }
    //Warenkorbfunktion
    function warenkorb(_event) {
        let target = _event.target;
        let stepper = [];
        let checkBoxes = [];
        let gesamtpreis = 0;
        //Auswahl �berpr�fen
        for (let i = 0; i < Aufgabe10.posten.length; i++) {
            console.log(_event.target);
            if (Aufgabe10.posten[i].art == "Schmuck") {
                stepper[i] = document.getElementById("stepper" + i);
                checkBoxes[i] = document.getElementById("check" + i);
            }
            if (target.value == Aufgabe10.posten[i].name && target.id == "selectBaumart") {
                basketBaumart[0] = Aufgabe10.posten[i].name;
                basketBaumart[1] = "" + Aufgabe10.posten[i].preis;
            }
            if (target.id == "radio" + i) {
                basketHalter[0] = Aufgabe10.posten[i].name;
                basketHalter[1] = "" + Aufgabe10.posten[i].preis;
            }
            if (target.id == "radio2." + i) {
                basketLieferopt[0] = Aufgabe10.posten[i].name;
                basketLieferopt[1] = "" + Aufgabe10.posten[i].preis;
            }
            if (target.value == Aufgabe10.posten[i].name && target.id == "selectBeleuchtung") {
                basketBeleuchtung[0] = Aufgabe10.posten[i].name;
                basketBeleuchtung[1] = "" + Aufgabe10.posten[i].preis;
            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i] = [Aufgabe10.posten[i].name, "" + (Aufgabe10.posten[i].preis * parseInt(stepper[i].value))];
            }
        }
        //Warenkorb Zusammenfassung
        let korb = document.getElementById("zusammenfassung");
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "#b6cf8f";
        korb.innerHTML = "<span class='wk'>Warenkorb</span><br>";
        korb.innerHTML += "" + basketBaumart[0] + " " + basketBaumart[1] + "� <br>";
        korb.innerHTML += "" + basketHalter[0] + " " + basketHalter[1] + "� <br>";
        korb.innerHTML += "" + basketBeleuchtung[0] + " " + basketBeleuchtung[1] + "� <br>";
        korb.innerHTML += " " + basketLieferopt[0] + " " + basketLieferopt[1] + "� <br>";
        gesamtpreis = parseFloat(basketBaumart[1]) + parseFloat(basketHalter[1]) + parseFloat(basketLieferopt[1]);
        for (let i = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(basketSchmuck[i][1]);
                korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "� <br>";
            }
        }
        korb.innerHTML += "<hr> Rechnungsbetrag: " + Math.round(gesamtpreis * 100) / 100 + "�";
    }
    //Feedback vom Button
    function handleMouseDown(_event) {
        feedback.innerText = " ";
        feedback.style.paddingBottom = "1em";
        if (name.checkValidity() == false || strasse.checkValidity() == false || hausNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Bitte �berpr�fe die Angaben deiner Bestellung.";
            feedback.style.color = "#e35252";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Vielen Dank f�r deine Bestellung!";
            feedback.style.color = "#b6cf8f";
            document.body.appendChild(feedback);
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=konfigurator.js.map