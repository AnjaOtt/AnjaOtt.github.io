/*Aufgabe: 11
Name: Anja Ott
Matrikel: 256342
Datum: 24.01.18
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace Aufgabe11 {
    
    export interface Bestellposten {
        art: string;
        name: string;
        preis: number;
    }

    export let posten: Bestellposten[] = [
        { art: "Baumart", name: "Nordmanntanne", preis: 40.00 },
        { art: "Baumart", name: "Fichte", preis: 30.00 },
        { art: "Baumart", name: "Kleiner Tischbaum", preis: 25.00 },
        { art: "Baumart", name: "Kiefer", preis: 35.00 },
        { art: "Halter", name: "Halter, schwarz", preis: 15.00 },
        { art: "Halter", name: "Halter, grün", preis: 15.00},
        { art: "Halter", name: "Halter, gold", preis: 20.00 },
        { art: "Halter", name: "Topf", preis: 10.00 },
        { art: "Beleuchtung", name: "Lichterkette lang", preis: 20.00 },
        { art: "Beleuchtung", name: "Lichterkette kurz", preis: 10.00 },
        { art: "Beleuchtung", name: "Elektrische Kerzen", preis: 35.00 },
        { art: "Beleuchtung", name: "Wachskerzen, 50 Stk.", preis: 30.00 },
        { art: "Schmuck", name: "Kugel, ombre", preis: 2.50 },
        { art: "Schmuck", name: "Kugel, grau", preis: 0.90 },
        { art: "Schmuck", name: "Kugel, rauchblau", preis: 0.90 },
        { art: "Schmuck", name: "Kugel, silber", preis: 1.99 },
        { art: "Schmuck", name: "Kugel, gold", preis: 2.99 },
        { art: "Schmuck", name: "Kugel, roségold", preis: 2.99 },
        { art: "Schmuck", name: "Lametta,", preis: 0.50 },
        { art: "Schmuck", name: "Lametta, silber", preis: 0.50 },
        { art: "Schmuck", name: "Lametta, gold", preis: 0.50 },
        { art: "Schmuck", name: "Glasspitze", preis: 4.50 },
        { art: "Schmuck", name: "Strohstern", preis: 0.50 },
        { art: "Schmuck", name: "Zuckerstange", preis: 0.30 },
        { art: "Lieferung", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferung", name: "Express-Lieferung", preis: 4.99 }
    ];
    
    //export let bA: string[][] = [];
    //export let b: string[][] = [];
    
  /*  for (var i: number = 0; i < posten.length; i++) {
        if (posten[i].art == "Baumart") {
           var temp: any = [posten[i].name, posten[i].preis]; 
           bA.push(temp);
        }

        if (posten[i].art == "Beleuchtung") {
           var temp: any = [posten[i].name, posten[i].preis]; 
           b.push(temp);
        }
    }*/
}