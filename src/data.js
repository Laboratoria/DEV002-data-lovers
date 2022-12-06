export const filtro = (arr = [], casa) => {
  console.log('filtrando');
  return arr.filter((element) => element.house === casa);
};

export const anotherExample = () => {
  return 'OMG';
};

export function obtenerDatos() {
  // const url = 'https://hp-api.herokuapp.com/api/characters';
  const url = './data/harrypotter/harry.json';
  return fetch(url)
  .then(respuesta => respuesta.json())
  .then(resultado => resultado.characters);//.characters, porque en esta ocasion estoy trayendo solo los personajes por la carpeta json
}
