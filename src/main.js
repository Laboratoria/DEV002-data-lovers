import {showCharacterbyName, showAutomatic } from './data.js';
import data from './data/harrypotter/data.js';

const searchI = document.querySelector('#search-character');
const searchB = document.getElementById("search-button");
let showCharacter;
let colorHat;
let list = document.getElementById("characteresList");
let orderAscendent = document.getElementById("filterAscendent");
let orderDescendent = document.getElementById("filterDescendent");

searchB.addEventListener("click", searchButton);
// searchI.addEventListener('keyup', searchButton);

searchI.addEventListener('keyup', showRealTime);

    function searchButton() {
        let cName = searchI.value;
        let characterFound = showCharacterbyName(data,cName);
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

// listElements(data.characters.map((character) => character.name));

listElements(data.characters.filter(element => element.name));

orderAscendent.addEventListener("click", () => {
    list.innerHTML = '';
    // let names = data.characters.filter((character) => character.name).sort();

    // console.log(names.sort(function(a, b) {
        //     return((a.name < b.name)? -1: ((a.name > b.name)? 1: 0));
        // }));
    let names = showAutomatic(data);
    listElements(names.sort(function(a, b) {
        return((a.name < b.name)? -1: ((a.name > b.name)? 1: 0));
    }));
});

orderDescendent.addEventListener("click", () => {
    list.innerHTML = '';
    // let names = data.characters.filter((character) => character.name).sort().reverse();
    // listElements(names);
    let names = showAutomatic(data);
    listElements(names.sort(function(a, b) {
        return((a.name < b.name)? 1: ((a.name > b.name)? -1: 0));
    }));

});

function listElements(elements) {
    elements.forEach((element) => {
        // let li = document.createElement('li');
        // let liHouses = document.createElement
        // li.innerHTML = cardElement;
        // li.className = 'card-element';
        // list.appendChild(li);
            let  div = document.createElement('div');
            let span = document.createElement('span');
            let i = document.createElement('i')
            let p = document.createElement('p');
    
            div.className = 'card-element'
            p.innerHTML = element.name;
            p.className = 'card-p';
            i.className = 'fa-solid fa-hat-wizard';
            i.id = 'span-i';
            span.className = 'card-span';
    
            if(element.house == "Gryffindor") {
                span.style.color = "#740001";
                } else if(element.house == "Hufflepuff") {
                    span.style.color = "#F0C75E";
                } else if(element.house == "Slytherin" ) {
                    span.style.color = "#2A623D";
                } else if(element.house == "Ravenclaw") {
                    span.style.color = "#728DDA";
                } else {
                    span.style.color = "#000";
                }
    
                list.appendChild(div)
                div.appendChild(span);
                span.appendChild(i)
                div.appendChild(p);
            })
}

function showRealTime() {
    let cName = searchI.value;
    let character = showAutomatic(data);
    list.innerHTML = '';
    character.filter(element => element.name.toLowerCase().includes(cName.toLowerCase().trim()))
    .forEach(element => {
        let  div = document.createElement('div');
        let span = document.createElement('span');
        let i = document.createElement('i')
        let p = document.createElement('p');

        div.className = 'card-element'
        p.innerHTML = element.name;
        p.className = 'card-p';
        i.className = 'fa-solid fa-hat-wizard';
        i.id = 'span-i';
        span.className = 'card-span';

        if(element.house == "Gryffindor") {
            span.style.color = "#740001";
            } else if(element.house == "Hufflepuff") {
                span.style.color = "#F0C75E";
            } else if(element.house == "Slytherin" ) {
                span.style.color = "#2A623D";
            } else if(element.house == "Ravenclaw") {
                span.style.color = "#728DDA";
            } else {
                span.style.color = "#000";
            }


            // i.style.color = colorHat;

            list.appendChild(div)
            div.appendChild(span);
            span.appendChild(i)
            div.appendChild(p);
        })
}