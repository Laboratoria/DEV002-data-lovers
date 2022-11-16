// estas funciones son de ejemplo

export const filterAZ = (data) => {
  const sortletterAz = data.sort ((a, b) =>{
  return a.title.localeCompare(b.title);
});
return sortletterAz;
}

export const filterZA = (data) => {
  const sortletterZa = data.sort((a,b) => {
  return a.title.localeCompare(a.title);
});
return sortletterZa;
}
