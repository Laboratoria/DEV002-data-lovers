import { aToZ, zToA, charactersAlive, charactersDead, speciesHuman, speciesHalfGiant, spellsZToA, spellsCharm, spellsHex, spellsJinx, spellsTransportation, alReves } from './data.js';
import data from './harrydata.js';




const test1 = document.querySelector('.test');

const selectCharacters = document.querySelector('#chooseCharacters');


const selectSpells = document.querySelector('#segundoSelect');


const selectBooks = document.querySelector('#tercerSelect');

const selectPotions = document.querySelector('#cuartoSelect')

// Filtramos  a los personajes   --------------------------------

selectCharacters.addEventListener('change', () => {
  let valorOption = selectCharacters.value;

  if (valorOption == 'a-z') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';


    const filtro = aToZ(data.characters)

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

  if (valorOption == 'recently') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';


    const libros = data.books

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
  if (valorOption == 'ascendiente') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';


    const pociones = data.potions

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
  } else if (valorOption == 'descendiente') {
    const x = document.querySelector(".test")
    x.innerHTML = ""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';


    const pociones = alReves(data.potions)

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

let filtrar = document.addEventListener('keyup', e => {
  const x = document.querySelector(".test")
    x.innerHTML = ""
  if (e.target.matches('#search')) {

    let inputSearch = (e.target.value).toLowerCase();
    console.log(inputSearch);
    let dios = (data.characters).filter(elemento => (elemento.name).toLowerCase().includes(inputSearch))

    console.log(dios)

  }
})
