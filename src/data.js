export const showCharacterbyName = (data, cName) => {
  let characterSelected = data.characters.filter(element => element.name == cName);
  return characterSelected;
}

export const showCharacterRealTime = (data) => {
  let characterLower = data.characters.filter(element => element.name);
  // let characterLower = characterSelected.toLowerCase();
  console.log(characterLower);

  return characterLower;
}