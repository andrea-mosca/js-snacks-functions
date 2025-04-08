/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vowelsCount(string){
    let vowelsNumber = 0;
    for(let i = 0; i < string.length; i++){   
        if(string[i] === "a"||
            string[i] === "e"||
            string[i] === "i"||
            string[i] === "o"||
            string[i] === "u"
        ) vowelsNumber += 1;
    }    
    return vowelsNumber;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(vowelsCount(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)