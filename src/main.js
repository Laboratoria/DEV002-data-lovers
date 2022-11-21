

//import { example } from './data.js';
import data from './data/ghibli/ghibli.js';
let divt = document.getElementById("container");

const filmst = data.films
const app = document.getElementById('app')

filmst.forEach(product => {
  divt.innerHTML += `<li>${product.title} -  ${product.producer}</li>`
})







const search = (query) => {
  return filmst.filter(item => {
    return item.title.includes(query) 
  });
};

//console.log("cas", search("cast"))
//app.innerHTML += `<li>${product.title} -$ ${product.price}</li>`
//console.log("esto es un ejemplo" , example, data, img);
//data.forEach(element => console.log("", element));

// import data from './data/lol/lol.js';
//import data from './data/ghibli/ghibli.js';

//const API = './data/ghibli/ghibli.json/films';



/*fetch(API)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }); */

