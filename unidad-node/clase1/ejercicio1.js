// 1. Crear un archivo llamado hola.js que muestre por consola un “Hola Mundo”
// 2. Ejecutar node hola.js muestre el mensaje “Hola Mundo”
console.log("Hola Mundo");

// 3. Crear otro archivo llamado “Calculos.js”
// 4. Crear una función que reciba dos números y retorne la suma de ellos
// 5. Crear una función que reciba dos números y devuelva el resultado entre la división del primero sobre el segundo

console.log("----Calculos.js----");
let num1 = 26;
let num2 = 4;

function suma(numero1, numero2){
    return numero1 + numero2;
}

function division(numero1, numero2){
    if(numero2 == 0){
        return "No se puede dividir por 0";
    }
    return numero1 / numero2;
}

console.log( `La suma entre ${num1} y ${num2} es: ${suma(num1, num2)}`);
console.log( `La division de ${num1} sobre ${num2} es: ${division(num1, num2)}`);

// 6. Crear una función que reciba un Array de N elementos y devuelva el mayor valor de ese array

let arrayNumeros = [2, 8, 9, 7, 5, 6];

const mayorValor = (arrayNumeros) => {
    return Math.max(...arrayNumeros); // spread -> Expandimos los elementos del array
    //const max = (array) => Math.max(...array); version profe
};


// 7. Hacer uso del console.log para mostrar la suma de 5 y 10
console.log(`La suma de 5 y 10 es: ${suma(5, 10)}`);

// 8. Hacer uso del console.log para mostrar la suma la división de 20 y 2 (que sucede si envió 20 y 0)
console.log(`La division de 20 sobre 2 es: ${division(20, 2)}`);
console.log(`La division de 20 sobre 0 es: ${division(20, 0)}`);
// 9. Hacer uso del console.log para mostrar el mayor de la lista [2,8,9,7,5,6]
console.log(`Mi array de numeros es: ${arrayNumeros}`)
console.log(`El numero más grande de mi array es:${mayorValor(arrayNumeros)}`);

// 10. Ejecutar node Calculos.js para ver los resultados