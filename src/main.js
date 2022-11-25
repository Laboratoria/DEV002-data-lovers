import {getAllCharacters} from "./data.js";

//código dentro de una función: TU le dices cuando se ejecuta, si está fuera, JS elige cuando se ejecuta
// manejo inputs
const inputs = document.querySelectorAll(".inputSearch");

export const createCharactersHtml = (characters) =>{
  let characterName = "";
  characters.forEach(character => {
    characterName +=
    `<div class="character">
      <img class="character-image" src="${character.image || "assets/user.png"}"/>
      <h3 class="name">${character.name}</h3>
    </div>`
  })
  return characterName
}

const characterNotFound = () => {
  let characterDataNotFound =
    `<div class="characterNotFound">
      <h3 class="notFound">No results for this search</h3>
    </div>`
  return characterDataNotFound
}

inputs.forEach(input =>{
  if (input) {
    input.addEventListener("keydown", async (event) =>{
      if (event.keyCode === 13){
        document.getElementById("home").hidden = true;
        document.getElementById("navSearcher").classList.remove("inactive");
        //data contiene el resultado de la promesa
        let data = await getAllCharacters();
        //filter(función de arreglo) necesita una condición que se entrega con return. la condición entrega true o false
        let result = data.filter((characters) => {
            return characters.name.toLowerCase().includes(input.value.toLowerCase())
        })
        if (result == false){
          const dataNotFound = characterNotFound(result);
          document.getElementById("results").innerHTML = dataNotFound
        } else {
          const charactersHTML = createCharactersHtml(result);
          document.getElementById("results").innerHTML = charactersHTML
        }
      }
    })
  }
})

// esconder los ... y mostrar characters
export const dotButton = document.getElementById("dotsButton");

if (dotButton) {
  dotButton.addEventListener("click", () => {
  document.getElementById("dotsButton").hidden = true;
  document.getElementById("charactersButton").classList.remove("inactive");
  })
}

// al hacer click en characters, se esconde home y se muestra el nav con los personajes (nombre e imagen)
const characterButton = document.getElementById("charactersButton");

if (characterButton) {
  characterButton.addEventListener("click", async() => {
  document.getElementById("home").hidden = true;
  document.getElementById("navSearcher").classList.remove("inactive");
  let data = await getAllCharacters();
  const charactersHTML = createCharactersHtml(data);
  document.getElementById("results").innerHTML = charactersHTML
  })
}

// recargar página una vez que se presiona el logo y va a home
const logoButtonNav = document.getElementById("logoButtonNav");

if (logoButtonNav){
  logoButtonNav.addEventListener("click", () => {
    window.location.reload(logoButtonNav)
  })
}