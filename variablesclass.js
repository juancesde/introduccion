var animal="mapache";
const user="user";
const pass="12345"
let userName = document.getElementById("id").value

var animalAcuatico="pez globo";
animalAcuatico="pinguino";
console.log(animalAcuatico);


let saludar = "dice Hola";
debugger
if (true) { //condicion para validar regla de negocio si el abuelo es de la 3era edad
    let saludar = "dice Hola tambien";
    console.log(saludar); // "dice Hola tambien"
}
console.log(saludar); // "dice Hola"

const animalTerrestre="mapache";
console.log(animalTerrestre);

var x1=5
var x2=3
alert(`Bienvenido: ${x1+x2}`);
 
// objetos
const mascota = {
    nombre: 'Tom',
    edad: 5,
    tipo: 'gato'
  }

  const dueño = {
    nombre: userName,
    edad: 5,
    tipo: 'gato'
  }
  mascota.raza ="persa"
  console.log(`La mascota es un
   ${mascota.tipo} tiene el nombre de ${mascota.nombre}
   con una edad de ${mascota.edad} ${mascota.raza}`)

   //funcion para imprimir saludo al usuario cuando 
   //inicia en la pagina web
