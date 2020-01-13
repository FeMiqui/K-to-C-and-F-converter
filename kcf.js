//constant temperature of today's temperature in kelvin
const kelvin = 0;

//this is today's temperature in C
var celsius = kelvin - 273;

//this is today's temperature in F
let fahrenheit = celsius * (9/5) + 32;

//now we round the temperature in fahrenheit to the nearest integer
fahrenheit = Math.floor(fahrenheit);

//print statement:
console.log(`The temperature is ${celsius} degrees Celsius`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
