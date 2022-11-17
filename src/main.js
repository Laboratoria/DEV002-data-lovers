import {getAllCharacters} from "./data.js";



// const data = dataTest();
const input = document.getElementById("search");

//console.log("datos " + data);
//console.log("input " + input);

input.addEventListener("keydown", async (event) =>{
  const inputDos = document.getElementById("search");
  //const keyInput = event.key;
  //console.log("dos " +inputDos.value)
  const data = await getAllCharacters();
  //console.log(data)
  const result = data.filter((characters) => {
      return characters.name.toLowerCase().includes(inputDos.value);
  })
  console.log("resultado " + inputDos.value, result);
})

