import { example, orderCharacters, printCharacters, printElements, showCharacterbyName } from './data.js';
import data from './data/harrypotter/data.js';







let list = document.getElementById("characteresList");
let orderAscendent = document.getElementById("filterAscendent");
let orderDescendent = document.getElementById("filterDescendent");































listElements(data.characters.map((character) => character.name + character.house));
orderAscendent.addEventListener("click", () => {
    list.innerHTML = '';
    let names = data.characters.map((character) => character.name).sort();
    listElements(names);
});
orderDescendent.addEventListener("click", () => {
    list.innerHTML = '';
    let names = data.characters.map((character) => character.name).sort().reverse();
    listElements(names);
});

function listElements(elements) {
    elements.forEach((cardElement) => {
        let li = document.createElement('li');
        let liHouses = document.createElement
        li.innerHTML = cardElement;
        li.className = 'card-element';
        list.appendChild(li);
    })
}