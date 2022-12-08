export const filtro = (arr = [], casa) => {
  console.log('filtrando');
  // console.log(arr);
  return arr.filter((element) => element.house === casa);
};

export const anotherExample = () => {
  return 'OMG';
};

export async function obtenerDatos() {
  // const url = 'https://hp-api.herokuapp.com/api/characters';
  const url = './data/harrypotter/harry.json';
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  return resultado.characters;//.characters, porque en esta ocasion estoy trayendo solo los personajes por la carpeta json
}


