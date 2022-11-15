import { example, orderCharacters, printCharacters, printElements } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';

let list = document.getElementById("characteresList");
listElements(data.characters.map((character) => character.name));

/*ordena caracteres a-z*/
let orderAscendent = document.getElementById("filterAscendent");
orderAscendent.addEventListener("click", () => {
    list.innerHTML = '';
    let names = data.characters.map((character) => character.name).sort();
    listElements(names);
});
/*ordena caracteres z-a*/
let orderDescendent = document.getElementById("filterDescendent");
orderDescendent.addEventListener("click", () => {
    list.innerHTML = '';
    let names = data.characters.map((character) => character.name).sort().reverse();
    listElements(names);
});

/*function reverseNames() {
   let names = data.characters.map((character) => character.name).sort().reverse();
   elemento.innerHTML = printElements(names);
}*/

function listElements(elements) {
    elements.forEach((cardElement) => {
        let li = document.createElement('li');
        li.innerHTML = cardElement;
        li.className = 'card-element';
        list.appendChild(li);
    })
}
/*let order = document.getElementById("filtroReverseOrder");
order.addEventListener("click", () => {
    list.innerHTML = '';
    let names = data.characters.map((character) => character.name).sort();
    listElements(names);
});*/


//console.log(reverseOrder);
//console.log(data.characters.map((character) => character.name).sort().reverse());
/* let list = [5, 3, 4, 0, 9];
console.log(list.sort().reverse());
console.log(list.map(function (a) {
    return a + "a";
}))

function cuadrado(a) {
    return a * a;
}

console.log(list.map(cuadrado));

console.log(list.map((a) => a * a)); */