/*
Spread Operator (operador de expansión)

Su sintaxis es ...*/


// const numbers = [-12, 2, 3, 23, 43, 2, 3]
//  console.log(numbers)
//  console.log(...numbers) 

//Enviar elementos en un array a una función

//  const addNumbers = (a, b, c) => {
//     console.log(a+b+c)
// }

// // addNumbers(1,2,3)

// let numbersToAdd = [1,2,3]

// // addNumbers(numbersToAdd,2,3)

// addNumbers(...numbersToAdd) 

//console.log(numbers);

//Añadir un array a otro array
    // let users = ['javier', 'david', 'rosa', 'juan', 'mercedes']

    // let newUsers = ['marta', 'jaime', 'laura']

    // //users.push(newUsers[0],newUsers[1],newUsers[2])// pesada

    // users.push(...newUsers) // se puede usar para cualquier opcion de añadir por lo general es push.

    // console.log(users); 

//Copiar arrays
    // let arr1 = [1, 2, 3, 4,5]
    // let arr2 = [...arr1]
    // console.log(arr2);

//Concatenar arrays
    // let arr1 = [1, 2, 3, 4, 5]
    // let arr2 = [6, 7, 8]

    // //let arrConcat = arr1.concat(arr2); //tradicional
    // let arrConcat = [...arr1, ...arr2] //mejor
    // console.log(arrConcat)

// Enviar un número indefinido de argumentos a una función (parámetros REST)

    // const restParms = (...numbers) => {
    //     console.log(numbers)
    // }

    // restParms(1,2,3,4,5,6,7,8) 

//librería math
const numbers = [-12, 2, 3, 23, 43, 2, 3]

console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

// //Eliminar elementos duplicados
console.log([...new Set(numbers)])