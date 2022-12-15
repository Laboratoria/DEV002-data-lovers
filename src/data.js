// estas funciones son de ejemplo

export const filtrarpeliculas = (dataGhibli,search) => {
  let nuevaData=dataGhibli.filter(movie=>{
     movie.title === search 
  })
  return nuevaData
};
//console.log(nuevaData)
//export const prueba = (dataGhibli, cards) => {
 // return dataGhibli;
//};

