/* Para pedir un dato al usuario se puede usar prompt(mensaje) */
const prompt= require('prompt-sync')();

//var dato = prompt('Introduzca su nombre: ');

/* Para imprimir un dato se puede usar console.log(dato) */

//console.log(dato);

/* 1 - Solicita un nombre, la edad y muestra por consola el mensaje 
"Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template 
strings */

/* var nombre = prompt('introduzca su nombre: ');
var edad = prompt('introduzca su edad: ');

//edad = parseInt(edad);
edad = Number(edad);

console.log('Hola '+nombre+', tienes '+edad+' años y el año que viene tendrás '+(edad + 1)+' años');

 */

 /* 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado) */

    /* var b = prompt('introduzca la base: ');
    var h = prompt('introduzca la altura: ');
    var r = prompt('introduzca el radio: ');
    
    console.log('el Area de un triangulo es: '+Number(b)*(Number(h)/2));
    console.log('el Area de un rectangulo es: '+Number(b)*Number(h));
    console.log('el Area de un circulo es: '+(Math.PI)*(Math.pow(Number(r),2)));
 */

/*3 - Solicita un número e imprime todos los números pares e impares 
    desde 1 hasta ese número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar*/

   /*  var value = prompt('introduzca un numero: ');

    for (let i = 1; i<=Number(value);i++){
        let result = (i%2 == 0) ? "par" : "impar";
        console.log( i +" - es "+result);
    } */


/*
4 - Escribe un programa que pida un número entero mayor que 1 y 
    que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo 
    y la unidad
*/

    /* var c = prompt("ingrese un numero: ");
    let i = 2;
    let aux = true;

    while ( (i < c) && aux ) {
        if (c % i === 0) {
         aux = false;
        }
        i++;
    }
    if(aux){
        console.log(c+" Es primo" );
    }else{
        console.log(c+" No es primo" ); 
    } */


/*
5 - Escriba un programa que pida un número entero mayor que cero y 
calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus 
    anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120
*/
    
    /* do{
        var c = prompt("ingrese un numero: ");
        if(Number(c)<1 || isNaN(Number(c)))
            console.log("El valor es menor igual a cero");
    }while(Number(c)<1 || isNaN(Number(c)))
    
    let aux = c;
    
    for(let i = c; i > 1; i--){
        aux=aux*(i-1);
    }
    console.log("El factorial de "+c+" es: "+aux ); */
/*
6 - Escribe un programa que permita ir introduciendo una serie 
indeterminadade números mientras su suma no supere 50. Cuando esto 
ocurra, se debe mostrar el total acumulado y el contador de cuantos 
números se han introducido
*/

    /* let cont = 0;
    let aux = 0;
    do{
        var c = prompt("ingrese un numero: ");
        if(isNaN(Number(c))){
            console.log("El valor es un string");
        }else{
            aux = aux + Number(c);
            cont=cont + 1;
        }

    }while(aux <= 50)

    console.log("El total acumulado es: "+(aux-Number(c))+" y los numeros introducidos fueron: "+(cont-1));
 */

/*
7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará 
    pares y el tercero impares, ambos estarán vacíos. Después multiplica 
    cada uno de los números del primer array por un número aleatorio 
    entre 1 y 10, si el resultado es par guarda ese número en el array 
    de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el 
    formato 2 x 3 = 6
    -el array de pares e impares
*/
    /* let a = [1,2,3,4,5];
    let pares = [];
    let impares = [];
    let aux5 = [];

    function esPar(numero) {
        return numero % 2 === 0;
    }

    //console.log(a.length);
    for (let i = 0; i < a.length; i++){
       let aux3 = a[i]*(Math.floor(Math.random() * 10) + 1);
       aux5.push(aux3); 
       if(aux3%2===0){ 
            pares.push(aux3);
       }else{ 
            impares.push(aux3);
       }
    }
    console.log("\npares: "+pares+"\nimpares: "+impares); */

    /*
    // Pass a function to map function
    let aux = a.map( function (x){
        return x*(Math.floor(Math.random() * 10) + 1);
    });
    const par1 = aux.filter(esPar);
    const impar1 = aux.filter((x) => !esPar(x));


    // Pass a function to map with array function
    const aux1 = a.map((x) => x*(Math.floor(Math.random() * 10) + 1));
    const par2 = aux.filter(esPar);
    const impar2 = aux.filter((x) => !esPar(x));

    console.log(aux);
    console.log(aux1);
    console.log(aux5);
    console.log("\npares: "+pares+"\nimpares: "+impares);

    const [par, impar] = a.reduce((acc, numero) => {
        if (numero % 2 === 0) {
          acc[0].push(numero);
        } else {
          acc[1].push(numero);
        }
      
        return acc;
      }, [[], []]);

    console.log("\npar: "+par2+"\nimpar: "+impar2); */

/*
8 - Dado un array de letras, solicita un número de DNI y calcula 
    que letra le corresponde. El número no puede ser negativo ni tener 
    más de 8 dígitos. La posición de la letra es el resultado del módulo 
    del número introducido entre 23

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 
'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/
    /* let num;
    // Create a regular expression that matches positive integers.
    const pattern = /^[0-9]{1,8}$/;
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X','B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    do{
        num = prompt('por favor ingrese su DNI: ');
        num = num.trim();

        if(!pattern.test(num)){
            console.log('\nDNI no valido\n');
            continue
        }else{
            break;
        }

    }while(true)

    console.log("Letra pertenecinte a tu codigo es: "+letras[num%23]); */
  

/*
9 - Solicitar al usuario una palabra y mostrar por consola el número de 
consonantes, vocales y longitud de la palabra.*/

    /* const consonantes = ['B','C','D','F','G','H','J','K','L', 
    'M','N','Ñ','P','Q','R','S','T','V','X','Z','W','Y'];
    const vocales = ['A','E','I','O','U'];
    let cont_cons = 0;
    let cont_voc = 0;
    let palabra = prompt("por favor ingresar una palabra: ");


    //for (let i = 0; i < palabra.length; i++){
    for (let letra of palabra){
        if(consonantes.includes(letra.toUpperCase())){ 
        //if(consonantes.includes(palabra[i].toUpperCase())){
            cont_cons=cont_cons + 1;
        }else{
            if(vocales.includes(letra.toUpperCase())){
            //if(vocales.includes(palabra[i].toUpperCase())){
                cont_voc = cont_voc + 1;
            }
        }
    }
    console.log("cantidad de vocales: "+cont_voc+" cantidad de consonantes: "+cont_cons+" longitud de la cadena: "+palabra.length);
 */
/*
10 - Dado un array que contiene 
["azul", "amarillo", "rojo", "verde", "rosa"] 
determinar si un color introducido por el usuario a 
través de un prompt se encuentra dentro del array o no. */

    const colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

    let color = prompt("por favor ingresar una palabra: ");

    const index = colores.indexOf(color.toLowerCase()) < 0 ?"No tiene":colores.indexOf(color.toLowerCase());
    console.log(index);