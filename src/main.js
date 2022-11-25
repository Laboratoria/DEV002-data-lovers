import {getAllCharacters} from "./data.js";

// manejo inputs
const inputs = document.querySelectorAll(".inputSearch");
const createCharactersHtml = (characters) =>{
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
const characterNotFound = (characters) => {
  let characterDataNotFound =
    `<div class="characterNotFound">
      <h3 class="notFound">No results for this search</h3>
    </div>`
  return characterDataNotFound
}

inputs.forEach(input =>{
  input.addEventListener("keydown", async (event) =>{
    if (event.keyCode === 13){
      document.getElementById("home").hidden = true;
      document.getElementById("navSearcher").classList.remove("inactive");
      //data contiene el resultado de la promesa
      let data = await getAllCharacters();
      //filter(función de arreglo) necesita una condición que se entrega con return. la condición entrega true o false
      let result = data.filter((characters) => {
        return characters.name.toLowerCase().includes(input.value)
      })
      if (result == false){
        const dataNotFound = characterNotFound(result);
        document.getElementById("results").innerHTML = dataNotFound
      } else {
        window.localStorage.setItem('Character', JSON.stringify(result));
        const charactersHTML = createCharactersHtml(result);
        document.getElementById("results").innerHTML = charactersHTML
      }
    }
  })
})

// esconder los ... y mostrar characters
const dotButton = document.getElementById("dotsButton");

dotButton.addEventListener("click", () => {
  document.getElementById("dotsButton").hidden = true;
  document.getElementById("charactersButton").classList.remove("inactive");
})

// al hacer click en characters, se esconde home y se muestra el nav con los personajes (nombre e imagen)
const characterButton = document.getElementById("charactersButton");

characterButton.addEventListener("click", async() => {
  document.getElementById("home").hidden = true;
  document.getElementById("navSearcher").classList.remove("inactive");
  let data = await getAllCharacters();
  window.localStorage.setItem('Character', JSON.stringify(data));
  const charactersHTML = createCharactersHtml(data);
  document.getElementById("results").innerHTML = charactersHTML
})

// recargar página una vez que se presiona el logo y va a home
const logoButtonNav = document.getElementById("logoButtonNav");

logoButtonNav.addEventListener("click", () => {
  window.location.reload(logoButtonNav)
})

/* Sort function */
const sortABtn = document.querySelector('#a-z');
const sortZBtn = document.querySelector('#z-a');

function sortingCharacters (charactersList){
  const newCharactersSorted = charactersList.sort((a, b) => {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0
  })
  return newCharactersSorted
}

sortABtn.onclick = () => {
  const newCharacters = JSON.parse(window.localStorage.getItem('Character'));
  const charactersHTML = createCharactersHtml(sortingCharacters(newCharacters));
  document.getElementById("results").innerHTML = charactersHTML
}

sortZBtn.onclick = () => {
  console.log('Ordename z - a')
  const newCharacters = JSON.parse(window.localStorage.getItem('Character'));
  const charactersHTML = createCharactersHtml(sortingCharacters(newCharacters).reverse());
  document.getElementById("results").innerHTML = charactersHTML
}