import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/ghibli/ghibli.js';
const API = './data/ghibli/ghibli.json';
// import data from './data/rickandmorty/rickandmorty.js';


fetch(API)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });

