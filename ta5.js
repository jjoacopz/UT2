function leapYears(año) {
    const esBisiesto = (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
    console.log(esBisiesto);
}

leapYears(1842); 
leapYears(1435); 
leapYears(1244); 
leapYears(2000);
