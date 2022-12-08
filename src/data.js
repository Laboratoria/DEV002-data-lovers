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

function alphabeticalOrder(data, order) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const sortData = [];
  if (order === 'asc') {
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (data[j].charAt(0).toLowerCase() === alphabet[i]) {
          sortData.push(data[j]);
        }
      }
    }
  } else if (order === 'desc') {
    for (let i = alphabet.length - 1; i >= 0; i--) {
      for (let j = 0; j < data.length; j++) {
        if (data[j].charAt(0).toLowerCase() === alphabet[i]) {
          sortData.push(data[j]);
        }
      }
    }
  }
}