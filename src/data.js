// import data from "./data/harrypotter/data";

export const showCharacterbyName = (data, cName) => {
  let characterSelected = data.characters.filter(element => element.name == cName);

  return characterSelected;
};

export const showAutomatic = (data) => {
  let filtered = data.characters.filter(element => element.name);
  let finalArray = filtered.map( (element) => ({name: element.name, house: element.house}))

  return finalArray;
};

// export const printCharacters = (data) => {
//   return data.characters
//   .filter(character => character.house == "Gryffindor")
//   .map((character) => character.name)
//   .join("<br />");
// };

// export const printElements = (elements) => {
//   return elements.join("<br />");
// };

// export const orderCharacters = (data) => {
//   return data.characters
//   .reverse();
// };

/*let characters = data.characters;
characters.sort(function (a, b) {
    if (a.house > b.house) {
      return 1;
    }
    if (a.house < b.house) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });*/
  

