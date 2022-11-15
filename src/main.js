import {showCharacterbyName, showCharacterRealTime} from './data.js';

import data from './data/harrypotter/data.js';

console.log(data);

const searchI = document.querySelector('#search-character');
const searchB = document.getElementById("search-button");
const list = document.getElementById("characters-list-example");
let showCharacter;
let colorHat;

// const colorHouses {
//     Gryffindor: "#740001",
//     Hufflepuff: "#F0C75E",
//     Slytherin: "#2A623D",
//     Ravenclaw: "#728DDA"
// };

searchB.addEventListener("click", searchButton);
searchI.addEventListener('keyup', searchButton)

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

    // function automaticSearch() {
    //     //list.innerHTML = '';
    //     let cName = searchI.value;
    //     console.log(cName)
    //     let charactersNames = showCharacterRealTime(data);
    //     console.log(charactersNames)
    //     // let res = charactersNames.name.includes(cName);
    //     // console.log(res)

    //     for(let character of charactersNames) {
    //         console.log(character) 
    //     }

        // charactersNames.forEach(character => {
        //     if(charactersNames.idexOf(cName) !== -1) {
        //         list.innerHTML += `
        //         <div class="card">
        //             <span><i style="color: ${colorHat}"  class="fa-solid fa-hat-wizard"></i></span>
        //             <p>${character.name}</p>
        //         </div>
        //         ` 
        //     } else { 
        //         list.innerHTML += `
        //         <div class="card">
        //             <p>Not found</p>
        //         </div>
        //         ` 
        //     }
        // })
    // }

    // searchI.addEventListener('keyup', automaticSearch)

    // automaticSearch();