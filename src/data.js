// estas funciones son de ejemplo

export const filtrarPeliculas = (dataGhibli,search) => {
  let nuevaData = dataGhibli.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()) || movie.director.toLowerCase().includes(search.toLowerCase()))
  //console.log(nuevaData)
    return nuevaData
  }
  
export const ordenarAsc = (dataGhibli) => {
  let dataOrdenada = dataGhibli.sort((a,b) => a.release_date - b.release_date);
    console.log(dataOrdenada)
    return dataOrdenada
}

export const ordenarDesc = (dataGhibli) => {
  let dataOrdenada = dataGhibli.sort((a,b) => b.release_date - a.release_date);
  //console.log("ordenar descendente", ordenarDesc, dataOrdenada)
    return dataOrdenada
}

export const porcentajeDirector = (filtrarPeliculas) => {
  const directoresTotal = nuevaData.length;
  const directores = filtrarPeliculas(nuevaData).length;
  const calculoPorcentaje = score.reduce()(directoresTotal / directores * 100);
  const infoPorc = `Un ${calculoPorcentaje}% de los directores realizaron estas peliculaas`;
  return infoPorc
}
/*export const porcentajePersonajesSlytherin = (array) => {
  const personajesTotal = array.length;
  const personajesCasa = filtrarSlytherin(array).length;
  const calculoPorcentaje = Math.round(personajesCasa / personajesTotal * 100);
  const infoPorc = `Un ${calculoPorcentaje}% de los personajes pertenecen a esta casa`;
  return infoPorc 
}*/



//console.log(nuevaData)
//export const prueba = (dataGhibli, cards) => {
 // return dataGhibli;
//};

