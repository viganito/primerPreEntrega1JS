function multiplicar(num1, num2) {
    return num1 * num2;
}

function esPar(numero) {
    return numero % 2 === 0;
}

alert("Calculá esa Multiplicación que siempre te fue muy dificil en esta página más sencillo sin ninguna calculadora en mano.");
alert("¿EMPEZAMOS?");
let numero1 = parseInt(prompt("Insertá tu primer número:"));
let numero2 = parseInt(prompt("Insertá tu segundo número:"));
let resultado = multiplicar(numero1, numero2);
console.log("Resultado de la multiplicación: " + resultado);

if (esPar(resultado)) {
    console.log("El resultado es par.");
} else {
    console.log("El resultado es impar.");
}

alert("Resultado de tu cálculo: " + resultado);