import { filter, sortUpward, sortDownward, calculatePercentage } from './data.js';

// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//Llama a la primera coincidencia con el id containerPokemon del archivo HTML
const container = document.querySelector("#containerPokemon");
const search = document.querySelector("#searchInput");
const buttonUpward = document.querySelector("#buttonUpward");
const buttonDownward = document.querySelector("#buttonDownward");
const buttonUpNumber = document.querySelector("#buttonUpNumber");
const buttonDownNumber = document.querySelector("#buttonDownNumber");
const buttonSort = document.querySelector("#buttonSort");
const buttonList = document.querySelector(".buttonList");
const numberPokemons = document.querySelector("#numberPokemons");
const percentagePokemons = document.querySelector("#percentagePokemons");

//Función para llamar al set de datos de la API de Pokémon
fetch("https://raw.githubusercontent.com/Laboratoria/DEV002-data-lovers/main/src/data/pokemon/pokemon.json")
    .then(response => response.json())
    .then(data => {
        data.pokemon.map(pokemon => {
            createCard(pokemon)
        });
        searchPokemon(data.pokemon);
        nameUpward(data.pokemon);
        nameDownward(data.pokemon);
        numberUpward(data.pokemon);
        numberDownward(data.pokemon);
    })


//Crear variable/objeto que almacenará los colores según el tipo
const colors = {
    grass: '#5AE97B',
    fire: '#FF9C54',
    water: '#4E90D5',
    electric: '#F3D23B',
    ice: '#74CEC0',
    poison: '#AB6AC8',
    ground: '#D97746',
    rock: '#C7B78B',
    bug: '#66CDAA',
    dragon: '#4169E1',
    normal: '#F9F193',
    flying: '#8FA8DD',
    fighting: '#FF6347',
    psychic: '#F97176',
    ghost: '#5269AC',
    dark: '#5A5366',
    steel: '#5A8EA1',
    fairy: '#EC8FE6',
}


//Función para crear/darle forma a las tarjetas
function createCard(pokemon) {
    //Crear el contenedor div de la tarjeta
    const card = document.createElement('div');
    card.classList.add('pokemonCard');

    //Crear el contenedor div de la imagen
    const imageContainer = document.createElement('figure');
    imageContainer.classList.add('imageContainer');

    //Crear un elemento imagen 
    const image = document.createElement('img');
    image.src = pokemon.img;

    //Crear un contenedor de tipo párrafo para el numero
    const number = document.createElement('p');
    number.classList.add('name');
    number.textContent = `${pokemon.num}`;
    //Crear un contenedor de tipo párrafo para el nombre
    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = `${pokemon.name}`;

    //Poblar los contenedores
    imageContainer.appendChild(image);
    card.appendChild(imageContainer);
    card.appendChild(name);
    card.appendChild(number);
    //Poblar al contenedor principal
    container.appendChild(card);

    const type = pokemon.type;
    const cardColor = colors[type[0]];
    card.style.backgroundColor = cardColor;
}

//Función para buscar los pokemones
function searchPokemon(pokemon) {
    search.addEventListener("keyup", () => {
        const newArray = filter(pokemon, search.value);
        // console.log(newArray);
        container.innerHTML = "";
        newArray.forEach(element => {
            createCard(element)
        });
        numberPokemons.innerHTML = ("N°" + newArray.length);
        percentagePokemons.innerHTML = (calculatePercentage(pokemon, newArray) + '%');
    });
}

//Darle función de visibilidad al boton Sort
buttonSort.addEventListener("click", () => {
    buttonList.classList.toggle("show")
})


//Crear función que ordene ascendentemente por nombre
function nameUpward(pokemon) {
    buttonUpward.addEventListener("click", () => {
        const newArray = sortUpward(pokemon, 'name');
        console.log(newArray)
        container.innerHTML = "";
        newArray.forEach(element => {
            createCard(element);
        })
    })
}

//Crear función que ordene descendentemente por nombre
function nameDownward(pokemon) {
    buttonDownward.addEventListener("click", () => {
        const newArray = sortDownward(pokemon, 'name');
        console.log(newArray)
        container.innerHTML = "";
        newArray.forEach(element => {
            createCard(element);
        })
    })
}

//Crear función que ordenen ascendentemente por número
function numberUpward(pokemon) {
    buttonUpNumber.addEventListener("click", () => {
        const newArray = sortUpward(pokemon, "num");
        // console.log(newArray);
        container.innerHTML = "";
        newArray.forEach(element => {
            createCard(element);
        })
    })
}

//Crear función que ordenen descendentemente por número
function numberDownward (pokemon){
    buttonDownNumber.addEventListener("click", () => {
        const newArray = sortDownward(pokemon,"num");
        // console.log(newArray);
        container.innerHTML = "";
        newArray.forEach(element => {
            createCard(element);
        })
    })
}