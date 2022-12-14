export const filtro = (arr = [], casa) => {
  
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

export function calcularPorcentaje(datos) {

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


  return { porcentajeMujeres, porcentajeHombres };

  }

  export function calcularPorcentajeEscuelas(datos, escuelas) {
    
    // Crea un objeto para almacenar el porcentaje de hombres y mujeres de cada escuela
    const resultados = {};
  
    // Itera sobre cada escuela
    for (const escuela of escuelas) {
      // Obtiene un array con todos los personajes de la escuela actual
      const personajes = filtro(datos, escuela);
  
      // Calcula el porcentaje de hombres y mujeres de la escuela actual
      const porcentajes = calcularPorcentaje(personajes);
  
      // Guarda los resultados en el objeto resultados
      resultados[escuela] = porcentajes;
    }
  
    // Devuelve los resultados
    return resultados;
  }
  

