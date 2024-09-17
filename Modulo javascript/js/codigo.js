let animal = 'Perro';
let vehiculo = 'Carro';

/* Codigo escrito primer ejercicio */
let saludo = 'Hola';
let numeroMagico = 5;
const saludiFinal = 'Mundo';
const esVerdadero = true;

// Ejercisio numero dos.

var edad = 33;
var altura = 1.68;
var nombre = "Cristian"
var esEstudiante = true;
// Introduccion al POO //

var objeto1 = document.getElementById("objeto1");

            objeto1.style.width = "200px";
            objeto1.style.height = "150px";
            objeto1.style.backgroundColor = "blue";

            var boton = document.getElementsByTagName("button")[0];

            boton.style.width = "80px";
            boton.style.height = "30px";
            boton.innerHTML = "Enviar";

//Arrays clase 114 modulo js.

var datos = [];
        datos["nombre"] = "Cristian";
        datos["edad"] = 33;
        datos["apellido"] = "Daghero";
        datos["pais"] = "Argentina";

        document.write(datos["pais"]);

//Condicion IF ELSE .

var numero1 = 3;
var numero2 = "3";

    if (numero1 !== numero2) {
                alert("Los dos numeros tienen el mismo dato");
        } else {
                alert("Los dos numeros no son iguales sin importar el tipo de dato");
            }

//Condicionales dentro de otras condicionales//

var numero1 = prompt("introduzca el primer numero");
            var numero2 = prompt("introduzca el segundo numero");

            var operacion = prompt("Que tipo de operacion quieres realizar (suma/resta/multiplicacion/division)").toLowerCase();

            document.write("<p>");

                if (operacion == "suma") {
                    document.write(parseInt(numero1) + parseInt(numero2));
                } else if (operacion == "multiplicacion") {
                    document.write(parseInt(numero1) * parseInt(numero2));
                } else if (operacion == "resta") {
                    document.write(parseInt(numero1) - parseInt(numero2));
                } else if (operacion == "division") {
                    document.write(parseInt(numero1) / parseInt(numero2));
                }
            document.write("</p>");

// Condicionales IF anidados// fuinsion isNaN()= esto no es un numero.Lo que hace es verificar que lo que esta dentro del parentesis no sea un numero en ese caso daria verdadero.

/*Estructura de control ternario : condicion ? expresion1 : expresion2
                                   condicion ? true : false
    Condicion: condicion que se evaluapara determinar si se ejecuta la expresion1 o la expresion2.
    
    Expresion1 : Se ejecuta si la condicion es verdader.
    Expresion2 : Se ejecuta si la condicion es falsa.
*/
let edad = 17,
mensaje;

if (edad >= 18) {
    mensaje = "Eres mayor de edad"
} else {
    mensaje = "Eres menor de edad"
}

console.log(mensaje);
// Pasar a condicion ternaria.//

mensaje = edad >= 18 ? "eres mayor de edad" : "menor de edad";

// Otra funsion ternaria de ejemplo//

let a = 1;

let numero = a === 3 ? 'tres': a === 8 ? 'ocho' : a === 10 ? 'diez' : 'ningun numero'; 
 
    console.log(numero);

/* La sentencia switch :  En JavaScript, la sentencia switch es una herramienta útil para evaluar múltiples condiciones en función de un solo valor o expresión. Permite ejecutar diferentes bloques de código dependiendo del valor comparado. Funciona de manera similar a una serie de sentencias if-else, pero con una estructura más compacta y legible.
*/

var numero1 = prompt("Ingrese el primer numero");
var numero2 = prompt("Ingrese el segundo numero");

document.write("<p>");

    if (!isNaN(numero1) && !isNaN(numero2)) {

        var operacion = prompt("Que tipo de operacion quieres realizar suma/resta/multiplicacion/division").toLowerCase();


        switch( operacion ) {
            case "suma":
                document.write(parseInt(numero1) + parseInt(numero2));
                breack;

            case "multiplicacion":
                document.write(parseInt(numero1) * parseInt(numero2));
                breack;

            case "resta":
                document.write(parseInt(numero1) - parseInt(numero2));
                breack; 
                
            case "division":
                document.write(parseInt(numero1) / parseInt(numero2));
                breack;

            default :
                alert("Ingrese correctamente el texto de la operacion");
                break;
        } 

    }
    
document.write("</p>"); 

// Bucle While(mientras): El bucle while en JavaScript es una estructura de control que permite ejecutar un bloque de código de forma repetitiva mientras se cumpla una condición específica. //
/* Evaluación de la condición: Al iniciar el bucle, se evalúa la expresión condición. Si es true, se ejecuta el bloque de código.
Ejecución del bloque de código: Si la condición es true, se ejecuta todo el código dentro del bloque de llaves {}.
Actualización de la variable: Luego de ejecutar el bloque de código, se actualiza la variable o expresión involucrada en la condición.
Repetición: Se vuelve al paso 1, evaluando nuevamente la condición. El bucle continúa ejecutándose mientras la condición sea true.*/

var meses =["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Ocutbre","Noviembre","Diciembre"];

var contador = 0;

while(contador<meses.length) {

    document.write("<tr>");
    document.write("<td>");

    document.write(contador+1);

    document.write("</td>");
    document.write("<td>");

    document.write(meses[contador]);

    document.write("</td>");
    document.write("</tr>");

    contador++;    
}

alert(contador);

// Do - While ; El bucle do-while en JavaScript es una estructura de control que permite ejecutar un bloque de código al menos una vez, y luego repite su ejecución mientras una condición específica se evalúe como verdadera. A diferencia del bucle while, la condición en el bucle do-while se verifica después de ejecutar el bloque de código, lo que garantiza que este se ejecute al menos una vez, incluso si la condición inicial es falsa.//

/* Sintaxis del bucle do-while ; 
do {
  // Bloque de código a ejecutar
} while (condición);
*/
EJemplo
/*do {
    var numero = prompt("Escribe un numero del 1 al 20");
} while (numero<1 || numero>20 || isNaN(numero));
*/


//En JavaScript, el bucle for es una herramienta fundamental para la repetición de tareas. Se utiliza para ejecutar un bloque de código un número determinado de veces, o hasta que se cumpla una condición específica.//
for (var i=1; i<=10; i++) {

    document.write("<table><caption>Tabla de multiplicar del"+i+"</caption><tbody>");

        for (var x=1; x<=10; x++) {

            document.write("<tr>");

                document.write("<td>"+i+"</td><td>x</td><td>"+x+"</td><td>"+(i*x)+"</td>");

            document.write("</tr>");

        }

    document.write("</tbody></table><br>");
}

// Funciones : (Instrucciones).

/* En JavaScript, una función es un bloque de código reutilizable que realiza una tarea específica. Las funciones son esenciales para organizar y modular el código, haciendo que sea más legible, mantenible y escalable.
*/

/* Se utilizan para ; Las funciones encapsulan un conjunto de instrucciones que pueden ser ejecutadas varias veces sin necesidad de reescribir el código. Esto las hace muy útiles para realizar tareas repetitivas o complejas de manera eficiente.
*/

/* Su sintaxis es : 
                  funtion name of funtion () {
                    // Instrucciones                  
                }
*/

function saludo () {

    alert("Hola que tal!");
    document.write("¿Como estas?<br>");

}

saludo();

function preguntar_nombre() {

    var nombre = prompt("¿Cual es tu nombre?");
    document.write("<h1>"+nombre+"</h1>");

}

preguntar_nombre();

// Parametros de una funcion// 

/* Los parámetros en las funciones de JavaScript son variables que se definen dentro de la declaración de la función y se utilizan para pasar datos a la función cuando se llama. Los argumentos son los valores reales que se pasan a la función cuando se llama.
*/
// Ej N° 1://
var saludo = function (nombre) {

    document.write(nombre);

}

var pre_nombre = prompt("¿Cual es tu nombre?");

saludo(pre_nombre);

// Ej n°2 ://

function suma(num1, num2) {
    document.write(num1+num2);
}

suma(15, 15);

/* En JavaScript, los argumentos variables son una forma de permitir que una función reciba un número indeterminado de argumentos. Esto significa que no es necesario especificar un número fijo de argumentos al definir la función, y la función puede ser llamada con cualquier cantidad de argumentos.
*/

function suma () {

    var suma = 0;
    var arg = arguments;

    for (i=0; i<arg.length; i++) {

        suma+=parseInt(arg[i]);

    }
    document.write(suma+"<br>");
}

suma(35, 75, 15, 20, 2, 500, 200, 15, 3);
suma(35, 75, 15, 20, 2, 500, 200, 15);
suma(35, 75, 15, 20, 200, 15, 3);
suma(35, 20, 2, 500, 200, 15, 3);

// Clase 133 : "Clousure"

/* En JavaScript, una clausura o closure es una función que recuerda y accede al ámbito léxico en el que se creó, incluso después de que la función externa haya terminado de ejecutarse. En otras palabras, una clausura es una función que "recuerda" el entorno en el que se creó.
*/

// Ejemplo N° 1 

function inicia() {
    var nombre = "Cristian";
    function escribeMinombre() {
        document.write(nombre);
    }
    escribeMinombre();
}
inicia();

// Ejemplo n°2:

var operacion = function() {
    var valor = 0;
    var incrementar = function() {
        return valor+=5;
    }
    return incrementar;
}

var ejecutador = operacion();

console.log(ejecutador());

// Ejemplo n°3:

function crearMultiplicador(n) {
    return function(m) {
        return n * m;
    }
}

var suma10 = crearMultiplicador(10);
var suma20 = crearMultiplicador(20);
var suma30 = crearMultiplicador(30);

console.log(suma30(15));
document.write(suma20(10));

// Ejemplo numero 4 

function crearTamaños (pixeles) {
    return function() {
        document.body.style.fontSize = pixeles+'px';
    }
}

var tamano15 = crearTamaños(15);
var tamano30 = crearTamaños(30);
var tamano45 = crearTamaños(45);

document.getElementById('tamano15').onclick = tamano15;
document.getElementById('tamano30').onclick = tamano30;
document.getElementById('tamano45').onclick = tamano45;

// funtion arrow:

/* Sintaxis más corta: Especialmente útiles para funciones simples de una sola línea.
Contexto léxico de this: Capturan el valor de this del contexto donde se definen, lo que puede simplificar el manejo de this en métodos y callbacks.
Expresiones concisas: Permiten omitir la palabra clave return en funciones de una sola línea.
*/
// Ejemplos de las funciones flecha:

// Función tradicional
function sumar(a, b) {
    return a + b;
  }
  
  // Función flecha equivalente
  const sumar = (a, b) => a + b;
  
  // Función flecha sin parámetros
  const saludar = () => console.log('Hola!');
  
  // Función flecha con un solo parámetro
  const duplicar = numero => numero * 2;

  










