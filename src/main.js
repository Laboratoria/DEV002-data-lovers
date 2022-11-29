import {getAllCharacters} from "./data.js";

// manejo inputs
const inputs = document.querySelectorAll(".inputSearch");
const createCharactersHtml = (characters) =>{
  let characterName = "";
  characters.forEach(character => {
    characterName +=
    `<div class="character">
      <img class="character-image" src="${character.image || "assets/user.png"}"/>
      <button class="name">${character.name}</button>
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
  input.addEventListener("keydown", async (event) =>{
    if (event.keyCode === 13){

      /* Reseting sort options */
      const sortButtons = document.getElementsByName('sort-characters');
      sortButtons.forEach(button => button.checked = false);

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
        window.localStorage.setItem('Character', JSON.stringify(result));
        const charactersHTML = createCharactersHtml(result);
        document.getElementById("results").innerHTML = charactersHTML
        showCharacterDetails()
      }
    }
  })
})

// esconder los ... y mostrar characters
const dotButton = document.getElementById("dotsButton");

if (dotButton){
  dotButton.addEventListener("click", () => {
    document.getElementById("dotsButton").hidden = true;
    document.getElementById("charactersButton").classList.remove("inactive");
  })
}

// al hacer click en characters, se esconde home y se muestra el nav con los personajes (nombre e imagen)
const characterButton = document.getElementById("charactersButton");

/* character details */
function showCharacterDetails(){
  const characterDetailsButton = document.querySelectorAll(".name");
  const searchResultsContainer = document.querySelector("#searchResults");
  const characterDetailsContainer = document.querySelector('.characters-details')
  const detailsContainer = document.querySelector(".details")
  const closeDetailsContainer = document.querySelector("#close-details")

  characterDetailsButton.forEach(button => {
    button.onclick = (e) => {
      const characterName = e.target.innerText
      const characterList = JSON.parse(window.localStorage.getItem("Character"))
      const characterObject = characterList.find(character => character.name === characterName)

      searchResultsContainer.classList.add("inactive")
      characterDetailsContainer.classList.remove("inactive")

      detailsContainer.innerHTML +=
      `
        <div class="character-photo">
          <img src="${characterObject.image || "assets/user.png"}" alt="character selected photo">
        </div>
        <div class="character-principal-details">
          <span class="details-name">${characterObject.name}</span>
          <span class="details-birth">${characterObject.dateOfBirth}</span>
        </div>
        <div class="character-secondary-details">
          <div>
            <span>Alive</span>
            <p>${characterObject.alive}</p>
          </div>
          <div>
            <span>House</span>
            <p>${characterObject.house}</p>
          </div>
          <div>
            <span>Species</span>
            <p>${characterObject.species}</p>
          </div>
          <div>
            <span>Gender</span>
            <p>${characterObject.gender}</p>
          </div>
          <div>
            <span>Ancestry</span>
            <p>${characterObject.ancestry}</p>
          </div>
          <div>
            <span>Actor</span>
            <p>${characterObject.actor}</p>
          </div>
        </div>
      `

      closeDetailsContainer.onclick = () => {
        searchResultsContainer.classList.remove("inactive")
        characterDetailsContainer.classList.add("inactive")
        detailsContainer.innerHTML = ""
      }
    }
  })
}


if (characterButton){
  characterButton.addEventListener("click", async() => {
    document.getElementById("home").hidden = true;
    document.getElementById("navSearcher").classList.remove("inactive");
    let data = await getAllCharacters();
    window.localStorage.setItem('Character', JSON.stringify(data));
    const charactersHTML = createCharactersHtml(data);
    document.getElementById("results").innerHTML = charactersHTML

    showCharacterDetails()
  })
}

// recargar página una vez que se presiona el logo y va a home
const logoButtonNav = document.getElementById("logoButtonNav");

if (logoButtonNav){
  logoButtonNav.addEventListener("click", () => {
    window.location.reload(logoButtonNav)
    window.localStorage.removeItem('Character')
    window.localStorage.removeItem('CharacterFiltered')
  })
}

/* Sort function */
const sortABtn = document.querySelector('#a-z');
const sortZBtn = document.querySelector('#z-a');

export function sortingCharacters (charactersList){
  const newCharactersSorted = charactersList.sort((a, b) => {
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0
  })
  return newCharactersSorted
}

if (sortABtn){
  sortABtn.onclick = () => {
    const newCharacters = JSON.parse(window.localStorage.getItem('Character'))
    const newCharactersFiltered = JSON.parse(window.localStorage.getItem('CharacterFiltered'))

    if(newCharactersFiltered){
      const charactersHTML = createCharactersHtml(sortingCharacters(newCharactersFiltered))
      document.getElementById("results").innerHTML = charactersHTML
      showCharacterDetails()
    } else{
      const charactersHTML = createCharactersHtml(sortingCharacters(newCharacters))
      document.getElementById("results").innerHTML = charactersHTML
      showCharacterDetails()
    }
  }
}

if (sortZBtn) {
  sortZBtn.onclick = () => {
    const newCharacters = JSON.parse(window.localStorage.getItem('Character'))
    const newCharactersFiltered = JSON.parse(window.localStorage.getItem('CharacterFiltered'))

    if(newCharactersFiltered){
      const charactersHTML = createCharactersHtml(sortingCharacters(newCharactersFiltered).reverse())
      document.getElementById("results").innerHTML = charactersHTML
      showCharacterDetails()
    } else {
      const charactersHTML = createCharactersHtml(sortingCharacters(newCharacters).reverse())
      document.getElementById("results").innerHTML = charactersHTML
      showCharacterDetails()
    }
  }
}

/* Filter function */
const filterGryffindorBtn = document.querySelector('#gryffindor');
const filterSlytherinBtn = document.querySelector('#slytherin');
const filterHufflepuffBtn = document.querySelector('#hufflepuff');
const filterRavenclawBtn = document.querySelector('#ravenclaw');
const filterHouseUndefinedBtn = document.querySelector('#houseUndefined');

function filterCharacters (charactersList, filterParam){
  const newCharactersFiltered = charactersList.filter(character => {
    return character.house === filterParam
  })
  window.localStorage.setItem('CharacterFiltered', JSON.stringify(newCharactersFiltered));
  return newCharactersFiltered
}

function setFilterCharacters (filterparam){
  const param = filterparam
  const newCharacters = JSON.parse(window.localStorage.getItem('Character'));
  const filteredCharacters = filterCharacters(newCharacters, param)
  let sortedCharacters = filteredCharacters

  if(sortABtn.checked){
    sortedCharacters = sortingCharacters(sortedCharacters)
  }else if(sortZBtn.checked){
    sortedCharacters = sortingCharacters(sortedCharacters).reverse()
  }
  const charactersHTML = createCharactersHtml(sortedCharacters);
  document.getElementById("results").innerHTML = charactersHTML
  showCharacterDetails()
}

if (filterGryffindorBtn){
  filterGryffindorBtn.onclick = () => {
    const filterParam = 'Gryffindor'
    setFilterCharacters(filterParam)
  }
}

if (filterSlytherinBtn){
  filterSlytherinBtn.onclick = () => {
    const filterParam = 'Slytherin'
    setFilterCharacters(filterParam)
  }
}

if (filterHufflepuffBtn){
  filterHufflepuffBtn.onclick = () => {
    const filterParam = 'Hufflepuff'
    setFilterCharacters(filterParam)
  }
}

if (filterRavenclawBtn){
  filterRavenclawBtn.onclick = () => {
    const filterParam = 'Ravenclaw'
    setFilterCharacters(filterParam)
  }
}

if (filterHouseUndefinedBtn){
  filterHouseUndefinedBtn.onclick = () => {
    const newCharacters = JSON.parse(window.localStorage.getItem('Character'));

    let sortedCharacters = newCharacters
    if(sortABtn.checked){
      sortedCharacters = sortingCharacters(sortedCharacters)
    }else if(sortZBtn.checked){
      sortingCharacters(sortedCharacters).reverse()
    }

    window.localStorage.removeItem('CharacterFiltered')
    const charactersHTML = createCharactersHtml(newCharacters);
    document.getElementById("results").innerHTML = charactersHTML
  }
}


