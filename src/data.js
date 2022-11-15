export const showCharacterbyName = (data, cName) => {
  let characterSelected = data.characters.filter(element => element.name == cName);
  console.log(characterSelected)
  return characterSelected;
}