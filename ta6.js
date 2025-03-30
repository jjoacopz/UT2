function convertToCelsius(temp) {
    const celsius = ((temp - 32) * 5/9).toFixed(1);
    console.log(`${temp}°F es igual a ${celsius}°C`);
}

function convertToFahrenheit(temp) {
    const fahrenheit = (temp * 9/5 + 32).toFixed(1);
    console.log(`${temp}°C es igual a ${fahrenheit}°F`);
}

convertToCelsius(100); 
convertToFahrenheit(37.8); 
