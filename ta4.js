function sumAll(a, b) {
    if (a > b) {
        [a, b] = [b, a]; 
    }
    
    let suma = 0;
    for (let i = a; i <= b; i++) {
        suma += i;
    }
    
    console.log(suma);
}

sumAll(4, 1);