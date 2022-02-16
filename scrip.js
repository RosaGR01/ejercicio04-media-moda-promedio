/*
  Del siguiente arreglo de número obtener lo siguiente: media, mediana y moda
  El formato de la respuesta es:
  {
  media: 0,
  mediana: 0,
  moda: 0,
  }
 
  NOTA: solo se puede utilizar: sort, filter, pop y reduce, para interactuar con el arreglo
 */
 const datos = [12, 45, 17, 7, 22, 71, 50, 37, 10, 48, 17, 51, 17, 30, 12, 81];
 
 const datosOrdenados = datos.sort((a,b) => a-b);
 const media = (datos.reduce((suma,elemento) => suma + elemento,0))/datos.length;
 const mediana = (datosOrdenados[(datosOrdenados.length - 1) >> 1] + datosOrdenados[datosOrdenados.length >> 1]) / 2;
 function mode(arr) {
     return arr.sort((a,b) =>  arr.filter(v => v===a).length - arr.filter(v => v===b).length).pop();
 }
 const moda = mode(datos);
 const NuevoArray =[{
     media: media,
     mediana: mediana,
     moda: moda
 }
 ];
 console.log(NuevoArray);