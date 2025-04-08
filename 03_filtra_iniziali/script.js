/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const searchedInitial = "A";

// Dichiara la funzione qui.

function filterByInitials(namesList, searchedInitial) {    
    const filteredNames = [];
    
    for (let i = 0; i < namesList.length; i++) {
        const currentName = namesList[i];
        
        if (currentName [0] === searchedInitial) {
            filteredNames.push(currentName);
        }
    }    
    return filteredNames;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filterByInitials(names, searchedInitial));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]