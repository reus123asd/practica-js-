const resultado = 1;
const promesa = new Promise((resolve, reject) => {
  console.log("estoy haciendo algo mas");
  if (resultado == 1) resolve("se hizo");
  else reject("algo fallo");
});

promesa
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((message) => {
    console.error(message);
  });

//-----------------------------------------------------------------

const promesa1 = new Promise((resolve, reject) => {
  console.log("estoy haciendo algo mas...");
  setTimeout(function () {
    resolve("se ah terminado");
  }, 5000);
});

promesa1
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((message) => {
    console.error(message);
  });

//-------------------------------------------------------------------

const promesa2 = new Promise((resolve, reject) => {
  console.log("estoy haciendo algo mas...");
  setTimeout(function () {
    resolve(promesa3());
  }, 2000);
});

const promesa3 = () => {
  return new Promise((resolve, reject) => {
    console.log("estoy haciendo algo mas........");
    setTimeout(function () {
      resolve("se ah terminado todo");
    }, 2000);
  });
};

promesa2
  .then((resultado) => {
    return resultado;
  })
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((message) => {
    console.error(message);
  });
