import {getAllCharacters} from "./data.js";

//crear funciones para probar (encerrar)

const inputs = document.querySelectorAll(".inputSearch");  //cambiar nombre

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

      let characterName = "";
      result.forEach(character => {
          characterName +=
          `<div class="character">
              <img class="character-image" src="${character.image || "assets/user.png"}"/>
              <h3 class="name">${character.name}</h3>
          </div>`
      })
      //obtener result y cambiarle el HTML
      document.getElementById("results").innerHTML = characterName
    }
  })
})

// esconder los ... y mostrar characters
const dotButton = document.getElementById("dotsButton");
const characterButton = document.getElementById("charactersButton");

dotButton.addEventListener("click", () => {
  document.getElementById("dotsButton").hidden = true;
  document.getElementById("charactersButton").classList.remove("inactive");
})

// al hacer click en characters, se esconde home y se muestra el nav con los personajes (nombre e imagen)
characterButton.addEventListener("click", async() => {
  document.getElementById("home").hidden = true;
  document.getElementById("navSearcher").classList.remove("inactive");

  //data contiene el resultado de la promesa
  let data = await getAllCharacters();

  let characterName = "";
  data.forEach(character => {
    characterName +=
    `<div class="character">
      <img class="character-image" src="${character.image || "assets/user.png"}"/>
      <h3 class="name">${character.name}</h3>
    </div>`
})
  //obtener result y cambiarle el HTML Y ocultar los resultados de la API
  document.getElementById("results").innerHTML = characterName
})

// recargar página una vez que se presiona el logo y va a home
  const logoButtonNav = document.getElementById("logoButtonNav");

  logoButtonNav.addEventListener("click", () => {
    window.location.reload(logoButtonNav)
  })