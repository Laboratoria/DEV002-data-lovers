import data from './harrydata.js';
console.log(data)

const selectCharacters = document.querySelector('#chooseCharacters');
console.log(selectCharacters)

// const test1 = document.querySelector('.test');
// console.log(test1)

selectCharacters.addEventListener('change', () => {
  let valorOption = selectCharacters.value;
  console.log(valorOption)
  if (valorOption == 'a-z') {
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const characters = data.characters;
    characters.forEach(element => {
      let img= element.image !== "" ? element.image : "imag/incognito.jpg";
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">
      
        <img  class="imagen" src="${img}">
         <div class="caja">
          <p class="data">Name: ${element.name}</p>
          <p class="data">Species: ${element.species}</p>
         <p class="data">Gender: ${element.gender}</p>
          <p class="data">Alive: ${element.alive}</p>
          <p class="data">Specie: ${element.species}</p>
        </div>
     </div>
     
      `;
      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);

    });
  }

});
document.getElementById("btnCharac").addEventListener("click", () => {
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const characters = data.characters;
    characters.forEach(element => {
      let img= element.image !== "" ? element.image : "imag/incognito.jpg";
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">
      
        <img  class="imagen" src="${img}">
         <div class="caja">
          <p class="data">Name: ${element.name}</p>
          <p class="data">Species: ${element.species}</p>
         <p class="data">Gender: ${element.gender}</p>
          <p class="data">Alive: ${element.alive}</p>
          <p class="data">Specie: ${element.species}</p>
        </div>
     </div>
     
      `;
      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);

    });
  

});



// seleccionamos los hechizos de la A-Z
const selectSpells = document.querySelector('#segundoSelect');
console.log(selectSpells)

const test1 = document.querySelector('.test');
console.log(test1)

selectSpells.addEventListener('change', () => {
  let valorOption = selectSpells.value;
  console.log(valorOption)
  if (valorOption == 'spellsa-z') {
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const spells = data.spells;
    spells.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">
        <img  class="imagen" src="imag/magic.png">
         <div class="caja">
          
          <p class="data">Name: ${element.name}</p>
          <p class="data">Other name: ${element.other_name}</p>
          <p class="data">Description: ${element.description}</p>
          <p class="data">Type: ${element.spell_type}</p>
          <p class="data">Etymology: ${element.etymology}</p>
        </div>
     </div>
      `;
      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
    });
  }

});