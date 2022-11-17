import {createArrayObjects, filterCompare, filterAscendent,filterDescendent} from './data.js';
import data from './data/harrypotter/data.js';

const searchInput = document.getElementById('search-character');
const searchButton = document.getElementById("search-button");

let list = document.getElementById("characteresList");
let orderAscendent = document.getElementById("filterAscendent");
let orderDescendent = document.getElementById("filterDescendent");

searchButton.addEventListener("click", searchButton);
searchInput.addEventListener('keyup', searchRealTime);

let charactersNameHouse = createArrayObjects(data);

listElements(data.characters.filter(element => element.name));

function listElements(elements) {
    elements.forEach((element) => {
        let  li = document.createElement('li');
        let span = document.createElement('span');
        let i = document.createElement('i')
        let p = document.createElement('p');
    
        li.className = 'card-element'
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

        list.appendChild(li);
        li.appendChild(span);
        span.appendChild(i);
        li.appendChild(p);
    })
}

function searchRealTime() {
    let cName = searchInput.value;
    list.innerHTML = '';
    listElements(filterCompare(charactersNameHouse, cName));
}

orderAscendent.addEventListener("click", () => {
    list.innerHTML = '';
    listElements(filterAscendent(charactersNameHouse));
});

orderDescendent.addEventListener("click", () => {
    list.innerHTML = '';
    listElements(filterDescendent(charactersNameHouse));
});