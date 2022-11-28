//import { anotherExample, example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';

// console.log(anotherExample, data);

const cargarAPIhp=document.querySelector('#cargarAPI');
cargarAPIhp.addEventListener('click', obtenerDatos);

//obtenerDatos();

function obtenerDatos() {
    const url = 'https://hp-api.herokuapp.com/api/characters';
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarHTML(resultado));
}
function mostrarHTML(datos){
    console.log(datos);
  const contenido = document.querySelector('.contenido');
   console.log(contenido);
    let html ='';
         datos.forEach(personaje => {
         console.log(personaje);
            const {name, house, image} = personaje;
        html += `<p> Nombre: ${name} Casa: ${house}</p>  <img src="">`;
        html += `<img class='foto' src="${image}">`;
            
      });
      contenido.innerHTML= html;
}
