function rimuoviDallaCoda(array) {
    // Verifica se l'array ha una lunghezza inferiore o uguale a 1
    // Se è così, non c'è nulla da rimuovere, quindi restituisce un array vuoto
    if (array.length <= 1) {
        return [];
    }

    const newArray = array.slice(0, array.length - 1);
    return newArray;
}

// Elementi in coda
const arrayA = [1, 2, 3, 4, 5];

// Rimozione ultimo elemento
const arrayB = rimuoviDallaCoda(arrayA);

// stampa in console gli elementi rimanenti
console.log(arrayB); 
