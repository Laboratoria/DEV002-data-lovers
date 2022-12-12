export const filtro = (arr = [], casa) => {
  
  console.log('filtrando');
  return arr.filter((element) => element.house === casa);
};

export async function obtenerDatos() {

  const url = './data/harrypotter/harry.json';
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  return resultado.characters;//.characters, porque en esta ocasion estoy trayendo solo los personajes por la carpeta json
}

export const orderAZ = (arr) => {
    let ascendent = arr.sort(function(a, b) {
      return((a.name < b.name)? -1: ((a.name > b.name)? 1: 0));
    })
  return ascendent;
}

// export const orderZA = (arr) => {
//     let descendent = arr.sort(function(a, b) {
//       return((a.name < b.name)? 1: ((a.name > b.name)? -1: 0));
//       })
//       return descendent;
//   }

export function calcularPorcentaje(datos) {
  console.log(calcularPorcentaje)
  let hombres = 0;
  let mujeres = 0;

  for(let i = 0; i < datos.length; i++) {
    if(datos[i].gender === 'Female') {
      mujeres++; 
    } else {
      hombres++; 
    }
  }
  
  let porcentajeMujeres = (mujeres / datos.length) * 100; 
  porcentajeMujeres = porcentajeMujeres.toFixed(1);
  let porcentajeHombres = (hombres / datos.length) * 100;
  porcentajeHombres = porcentajeHombres.toFixed(1);
  console.log(porcentajeMujeres)

  return { porcentajeMujeres, porcentajeHombres };

  
}

