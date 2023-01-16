// Ejercicio 1. Escribe un script que muestre tu nombre y el curso y el campo
// de la informática donde te gustaría trabajar.

// Mensaje para el usuario sobre de que trata el programa
alert("PRESENTACIÓN SOBRE MI");
//Mostrar la información por pantalla
alert("Me llamo Doriana Angelica Da Costa Magello");
alert("1º de Desarrollo de Aplicaciones Multiplataforma");
alert("Me Gustaría trabajar en el área de los Videosjuegos o desarrollando Páginas Web");



// Ejercicio 2. Realiza la suma de los números que se introduzcan por teclado hasta que se lea un cero.

// Mensaje para el usuario sobre de que trata el programa
alert("SUMA DE TODOS LOS NÚMEROS INTRODUCIDOS (CERO PARA TERMINAR)");

// Declarar la variable suma
let sum = 0;
// Declarar la variable valor
let values = 1;

// Realizamos un bucle while, para pedir números hasta que se introduzca un cero
while (values !== 0) {
    values = parseInt(prompt("Introduzca un valor (cero para terminar):"));
    // Se suman todos los valores
    if (isNaN(values)) {
        alert("Valor no válido, introduzca un número válido:");
    } else if (values === 0) {
        // termina el bucle
    } else {
        sum += values;
    }
}

// Resultado para imprimir
alert("La suma de los números introducidos es de: " + sum);



// Ejercicio 3. Leer 4 valores numéricos de una cifra. Esos valores en realidad son un solo número 
// y habrá que escribirlo por pantalla completo. Por ejemplo, introduzco el 1, 2, 3 y 4. 
// El resultado es 1234.

// Mensaje para el usuario sobre de que trata el programa
alert("INTRODUZCA 4 NÚMEROS Y SE MOSTRARÁN JUNTOS");

//Declarar variable para almacenar el número completo
let numeroCompleto = "";

//Bucle for para pedir 4 valores numéricos de una cifra
for (let i = 1; i <= 4; i++) {
    let numeros = parseInt(prompt("Introduce el valor " + i + ":"));
    // Comprobar si el valor ingresado es un número válido
    if (isNaN(numeros)) {
        alert("Valor no válido, introduzca un número válido:");
        i--;
    } else {
        //Añadir el valor introducido al número completo
        numeroCompleto += numeros;
    }
}

//Mostrar el número completo en pantalla
alert("El número completo es: " + numeroCompleto);



//4. Leer el valor de la nota de un alumno y poner la nota correspondiente en texto.
// Por ejemplo, un 7.2 es notable.

while (true) {
    // Mensaje para el usuario sobre de que trata el programa
    alert("ESTE EJERCICIO NOS DICE LA NOTA QUE PERTENECE DE UN VALOR INTRODUCIDO");
    // El usuario introducira la nota
    let nota = parseFloat(prompt("Introduzca la nota"));
    // Verificar si la nota es un número válido
    if (isNaN(nota)) {
        alert("Valor no válido, introduzca un número válido:");
        continue;
    } else if (nota < 0 || nota > 10) {
        alert("ERROR!! Debe introducir números del 0 al 10");
        continue;
    }
    // Verificar el rango de la nota introducida y mostrar un mensaje correspondiente a la 
    // categoría de nota a la que pertenece.
    if (nota < 5) {
        // Imprime el resultado con el mensaje.
        alert("Un " + nota + " es Suspenso");
    } else if (nota < 6) {
        alert("Un " + nota + " es Suficiente");
    } else if (nota < 7) {
        alert("Un " + nota + " es Bien");
    } else if (nota < 8) {
        alert("Un " + nota + " es Notable");
    } else if (nota < 9) {
        alert("Un " + nota + " es Excelente");
    } else {
        alert("Un " + nota + " es Sobresaliente");
    }
    break;
}


//5. Introducir 10 valores en un array, mostrar la suma de sus valores, el mayor valor, 
// el menor valor y la media de los valores.

// Mensaje para el usuario sobre de que trata el programa
alert("INTRODUCIR 10 NÚMEROS, SE MOSTRARÁ LA SUMA, EL NÚMERO MENOR, MAYOR Y SU MEDIA.");
// Declaramos un array llamado valor
let valor = [];

for (let i = 0; i < 10; i++) {
    let num = prompt("Introduzca el valor " + (i + 1) + ":");
    if (!isNaN(num)) {
        valor.push(Number(num));
    } else {
        alert("El valor ingresado no es un número. Por favor, ingrese un número válido.");
        i--;
    }
}

// Declaramos la variable llamada suma 
let suma = 0;

for (let i = 0; i < valor.length; i++) {
    suma += valor[i];
}
// Imprime el resultado de la suma con todos los números ingresados
alert("La suma es: " + suma);

// Declaramos la variable llamada mayor
let mayor = valor[0];
for (let i = 0; i < valor.length; i++) {
    if (valor[i] > mayor) {
        mayor = valor[i];
    }
}
alert("El número mayor es: " + mayor);

let menor = valor[0];
for (let i = 0; i < valor.length; i++) {
    if (valor[i] < menor) {
        menor = valor[i];
    }
}
// Imprime el resultado
alert("El número menor es: " + menor);
alert("La media de todos los números es: " + suma / valor.length);




// 6. Introducir 10 valores en una línea separada por espacios en blancos. En un array 
// deben de introducirse los valores pares y en otro los impares. Por ejemplo:
// Entrada: 123 5 22 68 90 12 654 112 47 899
// Resultado:
// Pares: 22, 68, 90, 12, 654, 112
// Impares: 123, 5, 47, 899

// Mensaje para el usuario sobre de que trata el programa
alert("INTRODUZCA 10 NÚMEROS PARA MOSTRAR LOS NÚMEROS PARES E IMPARES");

let pares = [];
let impares = [];
let contador = 0;
while (contador < 10) {
    let valores = prompt("Ingrese 10 números separados por espacios:");
    let arr = valores.split(" ");
    let isNumber = true;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            alert("Error, debe ingresar solo números.");
            isNumber = false;
            break;
        }
    }
    if (isNumber && arr.length == 10) {
        for (let i = 0; i < arr.length; i++) {
            let numero = parseInt(arr[i]);
            if (numero % 2 === 0) {
                pares.push(numero);
            } else {
                impares.push(numero);
            }
        }
        alert("Pares: " + pares + "\nImpares: " + impares);
        break;
    } else if (isNumber && arr.length < 10) {
        alert("Error, debe ingresar 10 números");
    }
}
