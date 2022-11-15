import {orderCharacters, printCharacters, printElements, showCharacterbyName } from './data.js';
import data from './data/harrypotter/data.js';

const searchI = document.querySelector('#search-character');
const searchB = document.getElementById("search-button");
let showCharacter;
let colorHat;
let list = document.getElementById("characteresList");
let orderAscendent = document.getElementById("filterAscendent");
let orderDescendent = document.getElementById("filterDescendent");

searchB.addEventListener("click", searchButton);
searchI.addEventListener('keyup', searchButton);

    function searchButton() {
        let cName = searchI.value;
        let characterFound = showCharacterbyName(data,cName);
        console.log(characterFound);
        list.innerHTML = '';
    characterFound.forEach(element => {
        if(element.house == "Gryffindor") {
                colorHat = "#740001";
            } else if(element.house == "Hufflepuff") {
                colorHat = "#F0C75E";
            } else if(element.house == "Slytherin" ) {
                colorHat = "#2A623D";
            } else if(element.house == "Ravenclaw") {
                colorHat = "#728DDA";
            } else {
                colorHat = "#000";
            }
            showCharacter = `
            <div class="card">
                <span><i style="color: ${colorHat}"  class="fa-solid fa-hat-wizard"></i></span>
                <p>${element.name}</p>
            </div>
            `
            list.innerHTML += showCharacter;
        })
    }

listElements(data.characters.map((character) => character.name));

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