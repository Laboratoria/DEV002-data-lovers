// estas funciones son de ejemplo

export const filtrarPeliculas = (dataGhibli,search) => {
  let nuevaData = dataGhibli.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()) || movie.director.toLowerCase().includes(search.toLowerCase()))
  //console.log(nuevaData)
    return nuevaData
  }
  
export const ordenarAsc = (dataGhibli) => {
  let dataOrdenada = dataGhibli.sort((a,b) => a.release_date - b.release_date);
    return dataOrdenada
}

export const ordenarDesc = (dataGhibli) => {
  let dataOrdenada = dataGhibli.sort((a,b) => b.release_date - a.release_date);
  //console.log("ordenar descendente", ordenarDesc, dataOrdenada)
    return dataOrdenada
}



//console.log(nuevaData)
//export const prueba = (dataGhibli, cards) => {
 // return dataGhibli;
//};

