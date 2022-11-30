import { aToZ, zToA, charactersAlive, charactersDead, speciesHuman, speciesHalfGiant, spellsZToA, spellsCharm, spellsHex, spellsJinx, spellsTransportation, alReves } from './data.js';
import data from './harrydata.js';




const test1 = document.querySelector('.test');
console.log(test1)

const selectCharacters = document.querySelector('#chooseCharacters');
console.log(selectCharacters)


const selectSpells = document.querySelector('#segundoSelect');
console.log(selectSpells)


const selectBooks = document.querySelector('#tercerSelect');
console.log(selectBooks)

const selectPotions = document.querySelector('#cuartoSelect')
console.log(selectPotions)

// Filtramos  a los personajes   --------------------------------

selectCharacters.addEventListener('change', () => {
  let valorOption = selectCharacters.value;
  console.log(valorOption)

  if (valorOption == 'a-z') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';


    const filtro = aToZ(data.characters)
    console.log(filtro)

    filtro.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

        ${element.image !== "" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

         <div class="caja">
            <p class="data">Name: ${element.name}</p>
            <p class="data">Species: ${element.species}</p>
            <p class="data">Gender: ${element.gender}</p>
            <p class="data">Ancestry: ${element.ancestry}</p>
            <p class="data">Actor: ${element.actor}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;

      test1.appendChild(createElement);

      return
    });

    // filtramos de Z-A

  } else if (valorOption == 'z-a') {

    const x = document.querySelector(".test")
    x.innerHTML = ""

    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const filterzToA = zToA(data.characters)

    console.log(filterzToA)

    filterzToA.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

        ${element.image !== "" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

         <div class="caja">
            <p class="data">Name: ${element.name}</p>
            <p class="data">Species: ${element.species}</p>
            <p class="data">Gender: ${element.gender}</p>
            <p class="data">Ancestry: ${element.ancestry}</p>
            <p class="data">Actor: ${element.actor}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
      return
    });

    // Filtramos por personajes vivos
  } else if (valorOption == 'alive') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const alive = charactersAlive(data.characters)
    console.log(alive)
    alive.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

        ${element.image !== "" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

         <div class="caja">
            <p class="data">Name: ${element.name}</p>
            <p class="data">Species: ${element.species}</p>
            <p class="data">Gender: ${element.gender}</p>
            <p class="data">Ancestry: ${element.ancestry}</p>
            <p class="data">Actor: ${element.actor}</p>
            <p class="data">Status: ${element.alive}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
      return
    });

    // Filtar por personajes muertos
  } else if (valorOption == "dead") {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const dead = charactersDead(data.characters);
    console.log(dead)
    dead.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');

      const templateTest = `
      <div id="template">

        ${element.image !== "" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

         <div class="caja">
            <p class="data">Name: ${element.name}</p>
            <p class="data">Species: ${element.species}</p>
            <p class="data">Gender: ${element.gender}</p>
            <p class="data">Ancestry: ${element.ancestry}</p>
            <p class="data">Actor: ${element.actor}</p>
            <p class="data">Status: ${element.alive}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
      return
    });
    // Filtramos por especie humana
  } else if (valorOption == 'speciesHuman') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const aaa = speciesHuman(data.characters)
    console.log(aaa)
    aaa.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

        ${element.image !== "" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

         <div class="caja">
            <p class="data">Name: ${element.name}</p>
            <p class="data">Species: ${element.species}</p>
            <p class="data">Gender: ${element.gender}</p>
            <p class="data">Ancestry: ${element.ancestry}</p>
            <p class="data">Actor: ${element.actor}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
      return
    });
    // Filtramos por especie half-giant
  } else if (valorOption == 'speciesHalfGiant') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const aaa = speciesHalfGiant(data.characters)
    console.log(aaa)
    aaa.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

        ${element.image !== "" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

         <div class="caja">
            <p class="data">Name: ${element.name}</p>
            <p class="data">Species: ${element.species}</p>
            <p class="data">Gender: ${element.gender}</p>
            <p class="data">Ancestry: ${element.ancestry}</p>
            <p class="data">Actor: ${element.actor}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
      return
    });
  }
});


// seleccionamos los HECHIZOS de la A-Z  -----------------------------------

selectSpells.addEventListener('change', () => {

  const x = document.querySelector(".test")
  x.innerHTML = ""

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
          <p class="data">Id: ${element.id}</p>
          <p class="data">Name: ${element.name}</p>
          <p class="data">Other name: ${element.other_name}</p>
          <p class="data">Pronunciation: ${element.pronunciation}</p>
          <p class="data">Etymology: ${element.etymology}</p>

        </div>
     </div>
      `;
      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
    });

  } else if (valorOption == 'spellsz-a') {
    const x = document.querySelector(".test")
    x.innerHTML = ""

    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const bb = spellsZToA(data.spells)

    console.log(bb)

    bb.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

      <img  class="imagen" src="imag/magic.png">
         <div class="caja">
          <p class="data">Id: ${element.id}</p>
          <p class="data">Name: ${element.name}</p>
          <p class="data">Other name: ${element.other_name}</p>
          <p class="data">Pronunciation: ${element.pronunciation}</p>
          <p class="data">Etymology: ${element.etymology}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
      return
    });
    // Filtramos los hechizos de tipo encanto
  } else if (valorOption == 'spellTypeCharm') {
    const x = document.querySelector(".test")
    x.innerHTML = ""

    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const encanto = spellsCharm(data.spells)

    console.log(encanto)

    encanto.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

        <img class='imagen' src=imag/charmSpell.jpg>

         <div class="caja">
            <p class="data">Name: ${element.name}</p>
            <p class="data">Species: ${element.species}</p>
            <p class="data">Gender: ${element.gender}</p>
            <p class="data">Ancestry: ${element.ancestry}</p>
            <p class="data">Actor: ${element.actor}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
      return
    });
    // Filtramos los hechizos de tipo embrujo
  } else if (valorOption == 'spellTypeHex') {
    const x = document.querySelector(".test")
    x.innerHTML = ""

    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const dd = spellsHex(data.spells)

    console.log(dd)

    dd.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

      <img class='imagen' src=imag/hex.jpg>
         <div class="caja">
            <p class="data">Name: ${element.name}</p>
            <p class="data">Species: ${element.species}</p>
            <p class="data">Gender: ${element.gender}</p>
            <p class="data">Ancestry: ${element.ancestry}</p>
            <p class="data">Actor: ${element.actor}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
      return
    });
    // Filtramos los hechizos de tipo maleficio
  } else if (valorOption == 'spellTypeJinx') {
    const x = document.querySelector(".test")
    x.innerHTML = ""

    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const maleficio = spellsJinx(data.spells)

    console.log(maleficio)

    maleficio.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

      <img class='imagen' src=imag/jinx.jpg>

         <div class="caja">
            <p class="data">Name: ${element.name}</p>
            <p class="data">Species: ${element.species}</p>
            <p class="data">Gender: ${element.gender}</p>
            <p class="data">Ancestry: ${element.ancestry}</p>
            <p class="data">Actor: ${element.actor}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
      return
    });
    // Filtramos los hechizos de tipo tranportación
  } else if (valorOption == 'spellTypeTransportation') {
    const x = document.querySelector(".test")
    x.innerHTML = ""

    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

    const escoba = spellsTransportation(data.spells)

    console.log(escoba)

    escoba.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

      <img class='imagen' src=imag/transportación.png>

         <div class="caja">
            <p class="data">Name: ${element.name}</p>
            <p class="data">Species: ${element.species}</p>
            <p class="data">Gender: ${element.gender}</p>
            <p class="data">Ancestry: ${element.ancestry}</p>
            <p class="data">Actor: ${element.actor}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
      return
    });
  }

});

selectBooks.addEventListener('change', () => {
  let valorOption = selectBooks.value;
  console.log(valorOption)

  if (valorOption == 'recently') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';


    const libros = data.books
    console.log(libros)

    libros.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

        ${element.image !== "" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

         <div class="caja">
            <p class="data">Tittle: ${element.title}</p>
            <p class="data">Release Day: ${element.releaseDay}</p>
            <p class="data">Autor: ${element.autor}</p>
            <p class="data">Description: ${element.description}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;

      test1.appendChild(createElement);

      return
    });
  } else if (valorOption == 'oldest') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';


    const oldest = alReves(data.books)
    console.log(oldest)

    oldest.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

        ${element.image !== "" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

         <div class="caja">
            <p class="data">Tittle: ${element.title}</p>
            <p class="data">Release Day: ${element.releaseDay}</p>
            <p class="data">Author: ${element.author}</p>
            <p class="data">Description: ${element.description}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;

      test1.appendChild(createElement);

      return
    });
  }
})

selectPotions.addEventListener('change', () => {
  let valorOption = selectPotions.value;
  console.log(valorOption)
  if (valorOption == 'ascendiente') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';


    const pociones = data.potions
    console.log(pociones)

    pociones.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

      <img  class="imagen" src="imag/potions.png">
         <div class="caja">
         <p class="data">Id: ${element.id}</p>
         <p class="data">Name: ${element.name}</p>
         <p class="data">Description: ${element.description}</p>
         </div>
     </div>`;

      createElement.innerHTML = templateTest;

      test1.appendChild(createElement);

      return
    });
  }else if(valorOption=='descendiente'){
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';


    const pociones = alReves(data.potions)
    console.log(pociones)

    pociones.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

      <img  class="imagen" src="imag/potions.png">
         <div class="caja">
         <p class="data">Id: ${element.id}</p>
         <p class="data">Name: ${element.name}</p>
         <p class="data">Description: ${element.description}</p>
         </div>
     </div>`;

      createElement.innerHTML = templateTest;

      test1.appendChild(createElement);

      return
    });
  }
})
