import { ave } from './data.js';
import data from './harrydata.js';




const test1 = document.querySelector('.test');
console.log(test1)

const selectCharacters = document.querySelector('#chooseCharacters');
console.log(selectCharacters)


const selectSpells = document.querySelector('#segundoSelect');
console.log(selectSpells)




// Seleccionamos a los personajes de A-Z  --------------------------------

selectCharacters.addEventListener('change', () => {
let valorOption = selectCharacters.value;
console.log(valorOption)
  if (valorOption == 'a-z') {
    // const x= document.getElementById("test")
    // x.innerHTML=""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

      // const personajes=data.characters;


      const filtro= ave(data.characters)

     filtro.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

        ${element.image!=="" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

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

  } else if (valorOption == 'z-a'){
    const x= document.getElementById("test")
    x.innerHTML=""
    // const x=document.getElementById("cardConteiner")
    // x.innerHTML=""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

      const persoanjes=data.characters;
     persoanjes.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

        ${element.image!=="" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

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
  }else if (valorOption == 'alive'){
   const x= document.getElementById("test")
   x.innerHTML=""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

      const persoanjes=data.characters;
     persoanjes.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

        ${element.image!=="" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

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

  } else if(valorOption == "dead"){
   const x= document.getElementById("test")
   x.innerHTML=""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

      const persoanjes=data.characters;
     persoanjes.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');

      const templateTest = `
      <div id="template">

        ${element.image!=="" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

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
  }else if(valorOption == 'species'){
    const x=document.getElementById("test")
    x.innerHTML=""
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

      const persoanjes=data.characters;
     persoanjes.forEach(element => {
      const createElement = document.createElement("div")
      createElement.setAttribute("class", 'contenedorCard');
      const templateTest = `
      <div id="template">

        ${element.image!=="" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

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

    // selectSpells.innerHTML = "";
});


// seleccionamos los hechizos de la Z-A  ---------------------------------

// selectCharacters.addEventListener('change', () => {
//   let valorOption = selectCharacters.value;
//   console.log(valorOption)
//   if (valorOption == 'z-a') {
//     const accederAlDom = document.getElementById('home')
//     accederAlDom.style.display = 'none';
//     const cardConteiner = document.getElementById('cardConteiner');
//     cardConteiner.style.display = 'block';

//       const persoanjes=data.characters;
//      persoanjes.forEach(element => {
//       const createElement = document.createElement("div")
//       createElement.setAttribute("class", 'contenedorCard');
//       const templateTest = `
//       <div id="template">

//         ${element.image!=="" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

//          <div class="caja">
//             <p class="data">Name: ${element.name}</p>
//             <p class="data">Species: ${element.species}</p>
//             <p class="data">Gender: ${element.gender}</p>
//             <p class="data">Ancestry: ${element.ancestry}</p>
//             <p class="data">Actor: ${element.actor}</p>
//           </div>
//      </div>`;

//       createElement.innerHTML = templateTest;
//       test1.appendChild(createElement);

//     });
//   }
//     // selectSpells.innerHTML = "";
// });


// seleccionamos a los personajes vivos  -----------------------------------

// selectCharacters.addEventListener('change', () => {
//   let valorOption = selectCharacters.value;
//   console.log(valorOption)
//   if (valorOption == 'alive') {
//     const accederAlDom = document.getElementById('home')
//     accederAlDom.style.display = 'none';
//     const cardConteiner = document.getElementById('cardConteiner');
//     cardConteiner.style.display = 'block';

//       const persoanjes=data.characters;
//      persoanjes.forEach(element => {
//       const createElement = document.createElement("div")
//       createElement.setAttribute("class", 'contenedorCard');
//       const templateTest = `
//       <div id="template">

//         ${element.image!=="" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

//          <div class="caja">
//             <p class="data">Name: ${element.name}</p>
//             <p class="data">Species: ${element.species}</p>
//             <p class="data">Gender: ${element.gender}</p>
//             <p class="data">Ancestry: ${element.ancestry}</p>
//             <p class="data">Actor: ${element.actor}</p>
//           </div>
//      </div>`;

//       createElement.innerHTML = templateTest;
//       test1.appendChild(createElement);

//     });
//   }
//     // selectSpells.innerHTML = "";
// });


// seleccionamos a los personajes muertos  -----------------------------------

// selectCharacters.addEventListener('change', () => {
//   let valorOption = selectCharacters.value;
//   console.log(valorOption)
//   if (valorOption == 'dead') {
//     const accederAlDom = document.getElementById('home')
//     accederAlDom.style.display = 'none';
//     const cardConteiner = document.getElementById('cardConteiner');
//     cardConteiner.style.display = 'block';

//       const persoanjes=data.characters;
//      persoanjes.forEach(element => {
//       const createElement = document.createElement("div")
//       createElement.setAttribute("class", 'contenedorCard');

//       const templateTest = `
//       <div id="template">

//         ${element.image!=="" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

//          <div class="caja">
//             <p class="data">Name: ${element.name}</p>
//             <p class="data">Species: ${element.species}</p>
//             <p class="data">Gender: ${element.gender}</p>
//             <p class="data">Ancestry: ${element.ancestry}</p>
//             <p class="data">Actor: ${element.actor}</p>
//           </div>
//      </div>`;

//       createElement.innerHTML = templateTest;
//       test1.appendChild(createElement);

//     });
//   }
//     selectSpells.innerHTML = "";
// });

// seleccionamos a los personajes por su especie--------------------

// selectCharacters.addEventListener('change', () => {
//   let valorOption = selectCharacters.value;
//   console.log(valorOption)
//   if (valorOption == 'species') {
//     console.log('here')
//     const accederAlDom = document.getElementById('home')
//     accederAlDom.style.display = 'none';
//     const cardConteiner = document.getElementById('cardConteiner');
//     cardConteiner.style.display = 'block';

//       const persoanjes=data.characters;
//      persoanjes.forEach(element => {
//       const createElement = document.createElement("div")
//       createElement.setAttribute("class", 'contenedorCard');
//       const templateTest = `
//       <div id="template">

//         ${element.image!=="" ? `<img class='imagen' src=${element.image}>` : `<img class='imagen' src='imag/incógnito.jpg'>`}

//          <div class="caja">
//             <p class="data">Name: ${element.name}</p>
//             <p class="data">Species: ${element.species}</p>
//             <p class="data">Gender: ${element.gender}</p>
//             <p class="data">Ancestry: ${element.ancestry}</p>
//             <p class="data">Actor: ${element.actor}</p>
//           </div>
//      </div>`;

//       createElement.innerHTML = templateTest;
//       test1.appendChild(createElement);

//     });
//   }
//     selectSpells.innerHTML = "";
// });

// seleccionamos los HECHIZOS de la A-Z  -----------------------------------

selectSpells.addEventListener('change', () => {
  let valorOption = selectSpells.value;
  console.log(valorOption)
  if (valorOption == 'spellsa-z') {
    const accederAlDom = document.getElementById('home')
    accederAlDom.style.display = 'none';
    const cardConteiner = document.getElementById('cardConteiner');
    cardConteiner.style.display = 'block';

      const spells=data.spells;
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
  }

});
