const tasks = [
  {
    name: "Write for Envato Tuts+",
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
