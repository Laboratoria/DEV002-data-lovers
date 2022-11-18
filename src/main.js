

import { example } from './data.js';
import data from './data/ghibli/ghibli.js';



for (const img in data) {
  console.log(`${img}: ${data[img]}`);
}
console.log("esto es un ejemplo" , example, data, img);


// import data from './data/lol/lol.js';
//import data from './data/ghibli/ghibli.js';

/*const API = './data/ghibli/ghibli.json/films';
import data from './data/rickandmorty/rickandmorty.js';


fetch(API)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  }); */

