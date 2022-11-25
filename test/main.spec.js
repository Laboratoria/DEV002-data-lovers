//import {dotButton} from "../src/main";

test("ocultar dotButton y mostrar characterButton", () => {
    document.body.innerHTML =
    `<button class="dotsButton" id="dotsButton" >...</button>;
    <button class="charactersButton inactive" id="charactersButton">Characters</button>`;
    require("../src/main");

    const dotsButton = document.getElementById("dotsButton")
    dotsButton.dispatchEvent(new Event("click"))
    const characterButton = document.getElementById("charactersButton")

    expect(characterButton.classList.contains("inactive")).toBe(false);
});

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

describe('window.location', () => {
    const { location } = window;

    beforeAll(() => {
        delete window.location;
        window.location = { reload: jest.fn() };
    });

    afterAll(() => {
        window.location = location;
    });

    it("mocks `reload`", () => {
        expect(jest.isMockFunction(window.location.reload)).toBe(true);
    });

    it("redirigir a home", () => {
        document.body.innerHTML =
            `<button id="logoButtonNav">
                <img src="assets/logo-gold.png" alt="Harry's Cabinet">
            </button>`
        require("../src/main");

        const navBtn = document.getElementById("logoButtonNav")
        navBtn.dispatchEvent(new Event("click"))
        //window.location.reload();
        expect(window.location.reload).toBe(true);
    });
});

// test("cambiar html results por character", () => {
//     const { createCharactersHtml } = require("../src/main");

//     const inputs = document.querySelectorAll(".inputSearch")
//     inputs.dispatchEvent(new Event("onclick", "keyCode === 13"))
//     const resultSection = document.getElementById("results")

//     expect(resultSection).toBe(createCharactersHtml);
// });


//describe, en lugar de test ayuda a agrupar distintos test relacionados
//typeof no da tipo de elemento en html, si no que en JS
//hay que decirle a jest que se corre web para cambiar de ambiente --env=jsdom