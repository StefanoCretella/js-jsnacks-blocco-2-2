// Funzione per trovare l'indice di un elemento in un array
function trovaIndice(array, elemento) {
    for (let i = 0; i < array.length; i++) {

        // Se l'elemento corrente è uguale a quello cercato restituisci l'indice
        if (array[i] === elemento) {
            return i;
        }
    }

    // Se l'elemento non è presente, restituisci -1 (tipo 0 e numeri maggiori di 5)
    return -1;
}

const array = [1, 2, 3, 4, 5];
console.log(trovaIndice(array, 0)); // Output: -1
console.log(trovaIndice(array, 5)); // Output: 4
