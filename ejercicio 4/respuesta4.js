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
// console.log(tasks);
//------------RETORNAR SOLO NOMBRES-------------
const nombre = tasks.map((i) => i.name);
console.log(nombre);
//------------RETORNAR LA DURACION TOTAL-------------
const duracion = tasks.map((i) => i.duration);
const total = duracion.reduce((a, b) => a + b);
console.log(total);
//------------RETORNAR MENOR DURACION-------------
const valores = tasks.map((i)=> i.duration);
const menor = Math.min(...valores);
console.log(menor);
//------------RETORNAR MAYOR DURACION-------------
const valores1 = tasks.map((i)=> i.duration);
const mayor = Math.max(...valores1);
console.log(mayor);
//------------RETORNAR MENOR DURACION DE 140-------------
const tarea = tasks.filter((i) => i.duration < 140);
console.log(tarea);
//------------RETORNAR MAYOR DURACION DE 240-------------
const tarea2 = duracion.filter((i) => {
  if (i.duration > 240) {
    console.log("true");
  } else {
    console.log("false");
  }
} )
console.log(tarea2)

