// Define Kelvin variable
const kelvin = 293;
console.log(`The temperature is ${kelvin} degrees Kelvin.`)

//Define Celsius variable: 273 degrees less than Kelvin
let celsius = kelvin - 273;
console.log(`The temperature is ${celsius} degrees Celsius.`)

//Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9 / 5) + 32;

//Round down Fahrenheit
fahrenheit = Math.floor(fahrenheit);

//Use console.log for Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Newton = Celsius * (33/100)
let newton = celsius * (33 / 100);
newton = Math.floor(newton);

//Use console.log for Newton
console.log(`The temperature is ${newton} degrees Newton.`);
