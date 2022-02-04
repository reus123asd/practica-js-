 async que se pone delante de una declaración de función para convertirla en una función async.

Una función asíncrona es una función que sabe que es posible que se use la palabra clave  await dentro de ella para invocar código asíncrono.

La palabra clave async se añade a las funciones para que devuelvan una promesa en lugar de un valor directamente.

La palabra “async” ante una función significa solamente una cosa: que la función siempre devolverá una promesa.

await hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.

------------------------------------------------------------------------------------------

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("¡Hecho!"), 1000)
  });

  let result = await promise; // espera hasta que la promesa se resuelva (*)

  alert(result); // "¡Hecho!"
}

f();