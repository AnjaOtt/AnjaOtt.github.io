/*Aufgabe: 10
Name: Anja Ott
Matrikel: 256342
Datum: 08.01.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe10 {
    window.addEventListener("load", createElements);
    window.addEventListener("change", warenkorb);

    //Persönliche Angaben/Texteingabefelder erstellen 
  
    var name: HTMLInputElement;
    var vorname: HTMLInputElement;
    var strasse: HTMLInputElement;
    var hausNr: HTMLInputElement;
    var ort: HTMLInputElement;
    var plz: HTMLInputElement;
    var mail: HTMLInputElement;
    var label: HTMLLabelElement;

    //Variablen erstellen und befüllen
    
    var basketBaumart: string[] = ["keine Baumart ausgewählt", "0"];
    var basketHalter: string[] = ["kein Halter ausgewählt", "0"];
    var basketBeleuchtung: string[] = ["keine Beleuchtung ausgewählt", "0"];
    var basketSchmuck: string[][] = [];
    var basketLieferopt: string[] = ["keine Lieferoption ausgewählt", "0"];
    
    //Button
    let feedback: HTMLDivElement = document.createElement("div");

    //Die erstellten Elemente werden später mit Eigenschaften ausgestattet und ans DOM gehängt
    
    function createElements(): void {
        
        //Baumart definieren
        
        let baumart: HTMLDivElement = <HTMLDivElement>document.getElementById("baumart");
        let selectBox: HTMLSelectElement = document.createElement("select");
        selectBox.name = "SelectBaumart";
        selectBox.id = "selectBaumart";
        baumart.appendChild(selectBox);
        
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Baumart") {
                var opt: HTMLElement = document.createElement("option");
                opt.innerText = posten[i].name;
                opt.id = "option" + i;
                selectBox.appendChild(opt);
            }
        }

        //Halterung definieren
        
        let halterung: HTMLDivElement = <HTMLDivElement>document.getElementById("halterung");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Halter") {
                var radioB: HTMLInputElement = document.createElement("input");
                radioB.type = "radio";
                radioB.name = "radioGroupHalterung";
                radioB.value = "radio" + i;
                radioB.id = "radio" + i;
                halterung.appendChild(radioB);
                
                //Label für jede Halterung hinzufügen
                label = document.createElement("label");
                label.id = "label" + i;
                label.htmlFor = radioB.id;
                label.innerText = posten[i].name;
                halterung.appendChild(label);
            }
        }

        //Beleuchtung definieren
        
        let beleuchtung: HTMLDivElement = <HTMLDivElement>document.getElementById("beleuchtung");
        let selectBox2: HTMLSelectElement = document.createElement("select");
        selectBox2.name = "SelectBeleuchtung";
        selectBox2.id = "selectBeleuchtung";
        beleuchtung.appendChild(selectBox2);
        for (let i: number = 0; i < posten.length; i++) {

            if (posten[i].art == "Beleuchtung") {
                var opt2: HTMLElement = document.createElement("option");
                opt2.innerText = posten[i].name;
                opt2.id = "option2." + i;
                selectBox2.appendChild(opt2);
            }
        }

        //Schmuckartikel definieren
        
        let schmuckartikel: HTMLDivElement = <HTMLDivElement>document.getElementById("schmuckartikel");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Schmuck") {
                var checkB: HTMLInputElement = document.createElement("input");
                checkB.type = "checkbox";       //Checkboxen erstellen
                checkB.name = "CheckboxSchmuckartikel";
                checkB.value = "check";
                checkB.id = "check" + i;
                schmuckartikel.appendChild(checkB);
                   
                //Label für jeden Schmuckartikel hinzufügen
                var label2: HTMLLabelElement = document.createElement("label");
                label2.id = "label2." + i;
                label2.htmlFor = checkB.id;
                label2.innerText = posten[i].name;
                schmuckartikel.appendChild(label2);

                //Stepper erstellen
                let stepper: HTMLInputElement = document.createElement("input");
                stepper.type = "number";
                stepper.name = "StepperSchmuckartikel" + i;
                stepper.value = "1";
                stepper.id = "stepper" + i;
                stepper.min = "0";
                stepper.max = "15";
                stepper.step = "1";
                schmuckartikel.appendChild(stepper);
                var br: HTMLElement = document.createElement("br");
                schmuckartikel.appendChild(br);
            }
        }

        //Eigende Daten bzw Lieferadresse
        
        let daten: HTMLDivElement = <HTMLDivElement>document.getElementById("daten");
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
        strasse.placeholder = "Straße";
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
        
        let lieferopt: HTMLDivElement = <HTMLDivElement>document.getElementById("lieferoptionen");
        for (let i: number = 0; i < posten.length; i++) {
            if (posten[i].art == "Lieferung") {
                var radioB2: HTMLInputElement = document.createElement("input");
                radioB2.type = "radio";
                radioB2.name = "radioGroupLieferoptionen";
                radioB2.value = "radio2." + i;
                radioB2.id = "radio2." + i;
                lieferopt.appendChild(radioB2);
                
                //Labels hinzufügen
                var label3: HTMLLabelElement = document.createElement("label");
                label3.id = "label3." + i;
                label3.htmlFor = radioB2.id;
                label3.innerText = posten[i].name;
                lieferopt.appendChild(label3);
            }
        }

        //Button generieren
        
        let button: HTMLDivElement = <HTMLDivElement>document.getElementById("button");
        let submit: HTMLButtonElement = document.createElement("button");
        submit.name = "Button";
        submit.type = "button";
        submit.innerText = "Bestellung überprüfen";
        submit.addEventListener("mousedown", handleMouseDown);
        button.appendChild(submit);
    }

    //Warenkorbfunktion
    
    function warenkorb(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        let stepper: HTMLInputElement[] = [];
        let checkBoxes: HTMLInputElement[] = [];
        let gesamtpreis: number = 0;
        
        //Auswahl überprüfen
        
        for (let i: number = 0; i < posten.length; i++) {
            console.log(_event.target);
            if (posten[i].art == "Schmuck") {
                stepper[i] = <HTMLInputElement>document.getElementById("stepper" + i);
                checkBoxes[i] = <HTMLInputElement>document.getElementById("check" + i);
            }
            if (target.value == posten[i].name && target.id == "selectBaumart") {
                basketBaumart[0] = posten[i].name;
                basketBaumart[1] = "" + posten[i].preis;
            }
            if (target.id == "radio" + i) {
                basketHalter[0] = posten[i].name;
                basketHalter[1] = "" + posten[i].preis;

            }
            if (target.id == "radio2." + i) {
                basketLieferopt[0] = posten[i].name;
                basketLieferopt[1] = "" + posten[i].preis;

            }
            if (target.value == posten[i].name && target.id == "selectBeleuchtung") {
                basketBeleuchtung[0] = posten[i].name;
                basketBeleuchtung[1] = "" + posten[i].preis;

            }
            if (target.id == "check" + i || target.id == "stepper" + i) {
                basketSchmuck[i] = [posten[i].name, "" + (posten[i].preis * parseInt(stepper[i].value))];

            }
           
        }
        //Warenkorb Zusammenfassung
        
        let korb: HTMLDivElement = <HTMLDivElement>document.getElementById("zusammenfassung");
        korb.style.width = "30%";
        korb.style.height = "auto";
        korb.style.backgroundColor = "#b6cf8f";
        korb.innerHTML = "<span class='wk'>Warenkorb</span><br>";
        korb.innerHTML += "" + basketBaumart[0] + " " + basketBaumart[1] + "€ <br>";
        korb.innerHTML += "" + basketHalter[0] + " " + basketHalter[1] + "€ <br>";
        korb.innerHTML += "" + basketBeleuchtung[0] + " " + basketBeleuchtung[1] + "€ <br>";
        korb.innerHTML += " " + basketLieferopt[0] + " " + basketLieferopt[1] + "€ <br>";

        gesamtpreis = parseFloat(basketBaumart[1]) + parseFloat(basketHalter[1]) + parseFloat(basketLieferopt[1]);
        for (let i: number = 0; i < stepper.length; i++) {
            if (checkBoxes[i] != null && checkBoxes[i].checked == true) {
                gesamtpreis += parseFloat(basketSchmuck[i][1]);
                korb.innerHTML += "" + basketSchmuck[i][0] + " " + basketSchmuck[i][1] + "€ <br>";
            }
        }
        korb.innerHTML += "<hr> Rechnungsbetrag: " + Math.round(gesamtpreis * 100) / 100 + "€";
    }

    //Feedback vom Button
    
    function handleMouseDown(_event: MouseEvent): void {
        feedback.innerText = " ";
        feedback.style.paddingBottom = "1em";
        if (name.checkValidity() == false || strasse.checkValidity() == false || hausNr.checkValidity() == false || ort.checkValidity() == false || plz.checkValidity() == false || mail.checkValidity() == false) {
            feedback.innerText = "Bitte überprüfe die Angaben deiner Bestellung.";
            feedback.style.color = "#e35252";
            document.body.appendChild(feedback);
        }
        else {
            feedback.innerText = "Vielen Dank für deine Bestellung!";
            feedback.style.color = "#b6cf8f";
            document.body.appendChild(feedback);
        }
    }
}