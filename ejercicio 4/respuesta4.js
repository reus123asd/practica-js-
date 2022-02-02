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
console.log(tasks);
//------------RETORNAR SOLO NOMBRES-------------
const name = tasks.map((i) => i.name);
console.log(name);
//------------RETORNAR LA DURACION TOTAL-------------
const duracion = tasks.map((i) => i.duration);
const total = duracion.reduce((a, b) => a + b);
console.log(total);
//------------RETORNAR MENOR DURACION-------------

//------------RETORNAR MENOR DURACION DE 140-------------
const tarea = duracion.filter((i) => i < 140);
console.log(tarea);
//------------RETORNAR MAYOR DURACION DE 240-------------
const tarea2 = duracion.filter((i) => {
  if (i.duration >= 240) {
    return true;
  } else {
    return false
  }
} )


