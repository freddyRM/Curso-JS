//Recorrer el DOM (DOM Traversing) 

/* 
Padre - parent (Nodo del que desciende)
    - parentNode - Devuelve el nodo padre (que puede no ser un elemento)
    - parentElement - Devuelve el nodo elemento padre

    NOTA
    Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode y parentElement devolverá siempre null.

Hijos - child (Nodo que desciende de un padre)
    - childNodes - Devuelve todos los nodos hijos
    - children - Devuelve todos los nodos elementos hijos
    - firstChild - Devueleve el primer nodo hijo
    - firstElementChild - Devueleve el primer nodo elemento hijo
    - lastChild - Devueleve el último nodo hijo
    - lastElementChild - Devueleve el último nodo elemento hijo
    - hasChildNodes() - Devueleve true si el nodo tiene hijos y false si no tiene

Hermanos - siblings (Nodo al mismo nivel)
    - nextSibling - Devuelve el siguiente nodo hermano
    - nextElementSibling - Devuelve el siguiente nodo elemento hermano
    - previousSibling - Devuelve el anterior nodo hermano
    - previousElementSibling - Devuelve el anterior nodo elemento hermano

Cercano
    //proceso experimental
    - closest(selector) - Selecciona el nodo más cercano que cumpla      con el selector, aún es experimental.
*/

//document es lo mas alto.

const parent = document.getElementById('parent')

console.log(parent.parentNode);
//console.log(parent.parentElement)

//console.log(parent.childNodes) //devuelve todos los nodos hijos.
//console.log(parent.children)//este es el que se usa para nodos hijos.
//console.log(parent.firstChild)//devuelve el primer nodo hijo
//console.log(parent.firstElementChild)//devuelve el primer elemento nodo hijo
//console.log(parent.lastChild)//devuelve el ultimo nodo hijo
//console.log(parent.lastElementChild)//devuelve el primer elemento nodo hijo
// console.log(parent.hasChildNodes());
// console.log(parent.firstChild.hasChildNodes())

//console.log(parent.nextSibling)
//console.log(parent.nextElementSibling)
//console.log(parent.parentElement.nextElementSibling)
//console.log(parent.parentElement.previousSibling)
//console.log(parent.parentElement.previousElementSibling)