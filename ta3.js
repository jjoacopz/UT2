function removeFromArray(arreglo, item) {
    const resultado = arreglo.filter(elemento => elemento !== item);
    console.log(resultado);
}

removeFromArray([1, 2, 3, 4, 2], 2);