const tasks = [
  {
    name: "write for Envato Tuts+",
    duration: 120,
  },
  {
    name: "Work out",
    duration: 60,
  },
  {
    name: "Procrastinate on Duolingo",
    duration: 240,
  },
];

//-----------------AGREGAR NUEVA TAREA-----------------
const agregar = tasks.push({ name: "hola", duration: 10 });
console.log(tasks);
//-----------------RETORNAR TAMAÑO DEL ARRAY-----------
const total = tasks.length;
console.log(total);
//
var tareasFiltradas = [];
tasks.forEach((tarea) =>{
  if(tarea.name.toUpperCase().indexOf("W")=== 0){
    tareasFiltradas.push(tarea)
  }
})
console.log(tareasFiltradas);