// estas funciones son de ejemplo

export const filtrarPeliculas = (dataGhibli,search) => {
  let nuevaData = dataGhibli.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()) || movie.director.toLowerCase().includes(search.toLowerCase()))
  console.log(nuevaData)
  // if(nuevaData.length > 1){
    return nuevaData
  // }else{
  //   return "No data"
  // }
 
    
  }



//console.log(nuevaData)
//export const prueba = (dataGhibli, cards) => {
 // return dataGhibli;
//};

