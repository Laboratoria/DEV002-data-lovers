//npm test main.spec.js

import { sortingCharacters } from '../src/main';

describe('sortingCharacter', () => {
    it(`Debería ordenar [{name: 'Harry'},{name: 'Barry'}] a - z`, () => {
        const result = sortingCharacters([{name: 'Harry'},{name: 'Barry'}])
        expect(JSON.stringify(result)).toBe( JSON.stringify([{name: 'Barry'},{name: 'Harry'}]))
        expect(typeof sortingCharacters).toBe('function')
    });
});

//JSON es una variable global (es un obj que tiene propiedades)
//NO se pueden comparar objetos, se deben pasar a string o comparar una de las propiedades
//el test decía que no podía comparar objetos por lo que se utilizó JSON.stringify() para pasar el objeto a string y poder compararlos
//JSON.stringify() pasa un objeto a string
//JSON.parse() pasa un string a objeto

// test("recarga página al presiona logo en nav", () => {
//     document.body.innerHTML =
//     `<section class="nav-searcher inactive" id="navSearcher"> <!--"inactive"-->
//     <section class="nav-searcher-top">
//         <div class= "searcher-top-logo">
//           <button id="logoButtonNav">
//             <img src="assets/logo-gold.png" alt="Harry's Cabinet">
//           </button>
//         </div>
//         <div class="searcher-top-bar">
//           <div class="searcher-top-bar-input">
//             <input type="text" placeholder="Try 'Gryffindor'" id="searchTwo" class="inputSearch"/>
//             <button>🔍</button>
//         </div>
//         </div>
//     </section>
//     <section class="nav-searcher-bottom">
//         <div class="searcher-bottom-sort">
//             <button>
//               <img src="./assets/sort.svg" alt="sort button icon"/>
//             </button>
//         </div>
//         <div class="searcher-bottom-buttons searcher-bottom-filter">
//             <button>
//               <img src="./assets/filter.svg" alt="filter button icon"/>
//             </button>
//         </div>
//     </section>
//     </section>`
//     require("../src/main");

//     const logoBtn = document.getElementById("logoButtonNav")
//     logoBtn.dispatchEvent(new Event("click"))
//     const navSection = document.getElementById("navSearcher")
    
//     expect(navSection.classList.contains("inactive")).toBe(true);
// });

//describe, en lugar de test ayuda a agrupar distintos test relacionados
//typeof no da tipo de elemento en html, si no que en JS
//hay que decirle a jest que se corre web para cambiar de ambiente --env=jsdom