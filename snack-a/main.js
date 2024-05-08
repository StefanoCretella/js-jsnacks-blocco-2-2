function contaElementi(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count++;
    }
    return count;
}

// Conta il numero di elementi presenti
const array = [1, 2, 3, 4, 5];

// Output in console
console.log(contaElementi(array)); 
