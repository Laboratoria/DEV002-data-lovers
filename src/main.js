import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//Llama a la primera coincidencia con el id containerPokemon del archivo HTML
const container = document.querySelector("#containerPokemon");

//Función para llamar al set de datos de la API de Pokémon
fetch("https://raw.githubusercontent.com/Laboratoria/DEV002-data-lovers/main/src/data/pokemon/pokemon.json")
    .then(response => response.json())
    .then(data => {
        data.pokemon.map(pokemon =>
            createCard(pokemon));

    });

//Función para crear/darle forma a las tarjetas
function createCard(pokemon){
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
    number.classList.add('number');
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

}



// console.log(example, data);
