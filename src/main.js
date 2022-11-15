import {showCharacterbyName} from './data.js';
import data from './data/harrypotter/data.js';

const searchI = document.querySelector('#search-character');
const searchB = document.getElementById("search-button");
const list = document.getElementById("characters-list-example");
let showCharacter;
let colorHat;





searchB.addEventListener("click", searchButton);
searchI.addEventListener('keyup', searchButton);

    function searchButton() {
        let cName = searchI.value;
        let characterFound = showCharacterbyName(data,cName);
        console.log(characterFound);

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