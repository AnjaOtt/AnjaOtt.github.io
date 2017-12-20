/*
Aufgabe: 9
Name: Anja Ott
Matrikel: 256342
Datum: 15.12.17
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A09 {
    window.addEventListener("load", init);
    window.addEventListener("keydown", handleKeyDown);
    let text: HTMLElement;
    
    //String-Array zum Generieren der Buchstaben
    let letters: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let saveLetter: string = "";

    // Div-Boxen für Alphabeth erstellen und gestalten
    
    function init(): void {
        for (let i: number = 0; i < letters.length; i++) {           
            let l: HTMLDivElement = document.createElement("div");
            l.style.width = "35px";
            l.style.height = "35px";
            l.style.margin = "5px";
            l.style.backgroundColor = "#b7b7b7";
            l.style.color = "white";
            l.style.fontSize = "25px";
            l.innerText = letters[i];
            l.id = letters[i];
            l.className = "letters";

            l.addEventListener("click", handleLetterClick);
            document.body.appendChild(l);
        }

        //Brieffeld erstellen und gestalten
            
        let box: HTMLDivElement = document.createElement("div");        
        box.style.width = "1165px";
        box.style.height = "500px";
        box.style.marginTop = "20px";
        box.style.backgroundColor = "#b7b7b7";
        
        box.addEventListener("click", handleBoxClick);
        document.body.appendChild(box);
    }


    // Funktion zum Hervorheben des geklickten Buchstaben
    
    function handleLetterClick(_event: MouseEvent): void {      
        console.log(_event.target);

        let l: HTMLDivElement = <HTMLDivElement>_event.target;
        l.style.color = "#ffffff";
        l.style.backgroundColor = "#000000";
        saveLetter = l.id;

        let letterList: NodeListOf<HTMLDivElement> = <NodeListOf<HTMLDivElement>>document.getElementsByClassName("letters"); //Jedes Div der Klasse letters in Variable speichern

        for (let i: number = 0; i < letterList.length; i++) {   // Wenn der gespeicherte Buchstabe nicht mit der ID aus der Buchstabenliste übereinstimmt, wird die Farbe des Hintergrunds zurückgesetzt 
            if (saveLetter != letterList[i].id) {
                letterList[i].style.backgroundColor = "#b7b7b7";
            }
        }
    }
    
    //Funktion für Tastatureingabe
    
    function handleKeyDown(_event: KeyboardEvent): void {

        if (_event.keyCode > 64 && _event.keyCode < 91 || _event.keyCode == 16 || _event.keyCode == 20) {
            saveLetter = String.fromCharCode(_event.keyCode);

        } else {
            return;
        }
    }
    
    // Funktion zum Plazieren des gespeicherten Buchstabens in dem Brieffeld
    
    function handleBoxClick(_event: MouseEvent): void {
        if (saveLetter == "")
            return;

        text = document.createElement("div");
        text.innerText = saveLetter;
        text.style.position = "absolute";
        text.style.color = "#000000";
        text.style.width = "35px";
        text.style.height = "35px";
        text.style.fontSize = "30px";
        text.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 80%)";
        text.style.left = _event.pageX + "px";
        text.style.top = _event.pageY + "px";
        text.addEventListener("click", deleteLetter);
        document.body.appendChild(text);
    }

    //Funktion zum Löschen eines Buchstabens durch gedrückte Alt-Taste und Klicken

    function deleteLetter(_event: MouseEvent): void {
        if (_event.altKey == false)
            return;

        else {
            let remove: HTMLDivElement = <HTMLDivElement>_event.target;
            document.body.removeChild(remove);
        }
    }

}
