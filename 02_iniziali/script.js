/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function startingChar(nameList){
    const outputArray = [];
    for(let i = 0; i < nameList.length; i++){
        const currentName = nameList[i];
        outputArray.push(currentName[0]);
    }
    return outputArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(startingChar(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]