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
         <h4 class="data"> ${element.name}</h4>
         <p class="data">Ancestry: ${element.species}</p>
        <p class="data">Gender: ${element.gender}</p>
         <p class="data">Alive: ${element.alive}</p>
         <p class="data">Specie: ${element.species}</p>
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
         <h4 class="data"> ${element.name}</h4>
         <p class="data">Ancestry: ${element.species}</p>
        <p class="data">Gender: ${element.gender}</p>
         <p class="data">Alive: ${element.alive}</p>
         <p class="data">Specie: ${element.species}</p>
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
         <h4 class="data"> ${element.name}</h4>
         <p class="data">Ancestry: ${element.species}</p>
        <p class="data">Gender: ${element.gender}</p>
         <p class="data">Alive: ${element.alive}</p>
         <p class="data">Specie: ${element.species}</p>
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
         <h4 class="data"> ${element.name}</h4>
         <p class="data">Ancestry: ${element.species}</p>
        <p class="data">Gender: ${element.gender}</p>
         <p class="data">Alive: ${element.alive}</p>
         <p class="data">Specie: ${element.species}</p>
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
         <h4 class="data"> ${element.name}</h4>
         <p class="data">Ancestry: ${element.species}</p>
        <p class="data">Gender: ${element.gender}</p>
         <p class="data">Alive: ${element.alive}</p>
         <p class="data">Specie: ${element.species}</p>
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
         <h4 class="data"> ${element.name}</h4>
         <p class="data">Ancestry: ${element.species}</p>
        <p class="data">Gender: ${element.gender}</p>
         <p class="data">Alive: ${element.alive}</p>
         <p class="data">Specie: ${element.species}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
      return
    });
  }
});

// Mostrar la data en los botones de personajes
document.getElementById("btnCharac").addEventListener("click", () => {

  const x = document.querySelector(".test")
  x.innerHTML = ""
  const accederAlDom = document.getElementById('home')
  accederAlDom.style.display = 'none';
  const cardConteiner = document.getElementById('cardConteiner');
  cardConteiner.style.display = 'block';

  const characters = data.characters;
  characters.forEach(element => {
    let img = element.image !== "" ? element.image : "imag/incognito.jpg";
    const createElement = document.createElement("div")
    createElement.setAttribute("class", 'contenedorCard');
    const templateTest = `
    <div id="template">

      <img  class="imagen" src="${img}">
       <div class="caja">
       <h4 class="data"> ${element.name}</h4>
        <p class="data">Ancestry: ${element.species}</p>
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
         <h4 class="data"> ${element.name}</h4>
         <p class="data">Other name: ${element.other_name}</p>
         <p class="data">Description: ${element.description}</p>
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
         <h4 class="data"> ${element.name}</h4>
         <p class="data">Other name: ${element.other_name}</p>
         <p class="data">Description: ${element.description}</p>
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
         <h4 class="data"> ${element.name}</h4>
         <p class="data">Other name: ${element.other_name}</p>
         <p class="data">Description: ${element.description}</p>
         <p class="data">Etymology: ${element.etymology}</p>
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
         <h4 class="data"> ${element.name}</h4>
         <p class="data">Other name: ${element.other_name}</p>
         <p class="data">Description: ${element.description}</p>
         <p class="data">Etymology: ${element.etymology}</p>
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
         <h4 class="data"> ${element.name}</h4>
         <p class="data">Other name: ${element.other_name}</p>
         <p class="data">Description: ${element.description}</p>
         <p class="data">Etymology: ${element.etymology}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
      return
    });
    // Filtramos los hechizos de tipo transportación
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
         <h4 class="data"> ${element.name}</h4>
         <p class="data">Other name: ${element.other_name}</p>
         <p class="data">Description: ${element.description}</p>
         <p class="data">Etymology: ${element.etymology}</p>
          </div>
     </div>`;

      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);
      return
    });
  }

});
// Mostrar la data en los botones de hechizos
document.getElementById("btnSpells").addEventListener("click", () => {

  const x = document.querySelector(".test")
  x.innerHTML = ""
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
        <img  class="imagen" src="imag/Spell.jpg">
         <div class="caja">
         <h4 class="data"> ${element.name}</h4>
          <p class="data">Other name: ${element.other_name}</p>
          <p class="data">Description: ${element.description}</p>
          <p class="data">Etymology: ${element.etymology}</p>
        </div>
     </div>
      `;
    createElement.innerHTML = templateTest;
    test1.appendChild(createElement);

  });


});
//Mostramos los libros del mas antiguo
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
      <img  class="imagenB" src="${element.img}">
         <div class="caja">
         <h4 class="data"> ${element.title}</h4>
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
      <img  class="imagenB" src="${element.img}">
         <div class="caja">
         <h4 class="data"> ${element.title}</h4>
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
//Mostrar la data en el boton de libros
document.getElementById("btnBooks").addEventListener("click", () => {

  const x = document.querySelector(".test")
  x.innerHTML = ""
  const accederAlDom = document.getElementById('home')
  accederAlDom.style.display = 'none';
  const cardConteiner = document.getElementById('cardConteiner');
  cardConteiner.style.display = 'block';

  const books = data.books;
  books.forEach(element => {
    const createElement = document.createElement("div")
    createElement.setAttribute("class", 'contenedorCard');
    const templateTest = `
    <div id="template">
        <img  class="imagenB" src="${element.img}">
         <div class="caja">
         <h4 class="data"> ${element.title}</h4>
          <p class="data">Release Day: ${element.releaseDay}</p>
          <p class="data">Description: ${element.description}</p>
          <p class="data">Author: ${element.author}</p>
        </div>
     </div>
      `;
    createElement.innerHTML = templateTest;
    test1.appendChild(createElement);

  });


});
//Mostrar filtro posiones
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
      <img  class="imagen" src="imag/Pociones.jpg">
         <div class="caja">
         <h4 class="data"> ${element.name}</h4>
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
      <img  class="imagen" src="imag/Pociones.jpg">
         <div class="caja">
         <h4 class="data"> ${element.name}</h4>
          <p class="data">Description: ${element.description}</p>
         </div>
     </div>`;

      createElement.innerHTML = templateTest;

      test1.appendChild(createElement);

      return
    });
  }
})
//Mostrar la data en el boton de posiones
document.getElementById("btnPotions").addEventListener("click", () => {

  const x = document.querySelector(".test")
  x.innerHTML = ""
  const accederAlDom = document.getElementById('home')
  accederAlDom.style.display = 'none';
  const cardConteiner = document.getElementById('cardConteiner');
  cardConteiner.style.display = 'block';

  const potions = data.potions;
  potions.forEach(element => {
    const createElement = document.createElement("div")
    createElement.setAttribute("class", 'contenedorCard');
    const templateTest = `
    <div id="template">
        <img  class="imagen" src="imag/Pociones.jpg">
         <div class="caja">
         <h4 class="data"> ${element.name}</h4>
          <p class="data">Description: ${element.description}</p>

        </div>
     </div>
      `;
    createElement.innerHTML = templateTest;
    test1.appendChild(createElement);

  });


});

// Dandole funcionalidad a la barra de búsqueda
document.addEventListener('keyup', e => {
  const x = document.querySelector(".test")
  x.innerHTML = ""

  const o = document.querySelector("#home")
  o.innerHTML = ""


  if (e.target.matches('#search')) {

    let inputSearch = (e.target.value).toLowerCase();
    console.log(inputSearch);
    // dios contiene el nuevo array
    let buscarPersonajes = (data.characters).filter(elemento => (elemento.name).toLowerCase().includes(inputSearch))

    buscarPersonajes.forEach(element => {

      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">
          <img  class="imagen" src="imag/incógnito.jpg">
           <div class="caja">
           <h4 class="data"> ${element.name}</h4>
          </div>
       </div>
        `;
      createElement.innerHTML = templateTest;
      test1.appendChild(createElement);

    });
  }
})
