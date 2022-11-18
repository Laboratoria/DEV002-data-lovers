
// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

export const showCharacterbyName = (data, cName) => {
  let characterSelected = data.characters.filter(element => element.name == cName);
  return characterSelected;
}

