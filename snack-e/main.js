function rimuoviDallaTesta(array) {
    // Verifica se l'array è vuoto o ha un solo elemento
    if (array.length <= 1) {
        return [];
    }

    // Crea un nuovo array contenente tutti gli elementi tranne il primo
    const newArray = array.slice(1);
    return newArray;
}

// Elementi in coda
const arrayA = [1, 2, 3, 4, 5];

// Rimuovi il primo elemento
const arrayB = rimuoviDallaTesta(arrayA);

// Stampa in console
console.log(arrayB);