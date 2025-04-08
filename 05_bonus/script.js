/* Scrivi una funzione che accetti una stringa contenente un nome 
 e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function greetingByTime (utentName){
    const d = new Date();
    const hour = d.getHours();
    let message = "";
    if(hour <= 13) message= "Buongiorno";
    else if (hour > 13 && hour <= 17) message = "Buon pomeriggio";
    else message = "Buonasera";

    return message +" " + utentName;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(greetingByTime(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.