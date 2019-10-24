const nombre = prompt("¿Cuál es tu nombre?")
const año = prompt("¿Cuál es tu año de nacimiento?");
const mesDeNacimiento = prompt("¿En que mes naciste? Respuesta numérica")
const mesActual = 10;

let edad = mesDeNacimiento <= mesActual && alert(2019 - año) || mesDeNacimiento >= mesActual && alert(2019 - año - 1);

