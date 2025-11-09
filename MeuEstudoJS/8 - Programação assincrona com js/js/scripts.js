// // 1 - setTimeout
// console.log("Ainda não executou");

// setTimeout(function () {
//   console.log("requisição assincrona");
// }, 2000);

// console.log("Ainda não executou2");

// // 2 - setInterval
// console.log("ainda não começou");

// // setInterval(function () {
// //   console.log("intervalo assincrono");
// // }, 3000);

// console.log("ainda não começou2");

// // 3 - promise
// const promessa = Promise.resolve(5 + 5);

// console.log("Algum código");

// promessa
//   .then((value) => {
//     console.log(`A soma é ${value}`);
//     return value;
//   })
//   .then((value) => value - 1)
//   .then((value) => console.log(`Agora é ${value}`));

// console.log("Mais outor código");

// // 4 - falha na promise
// Promise.resolve(4 * "asd")
//   .then((n) => {
//     if (Number.isNaN(n)) {
//       throw new Error("Dados incorretos");
//     }
// //   })
// //   .catch((err) => console.log(`Um erro aconteceu ${err}`));

// // 5 - rejeição de promises
// function checkNumber(n) {
//   return new Promise((resolve, reject) => {
//     if (n > 10) {
//       resolve("o número é maior que 10");
//     } else {
//       reject(new Error("Numero muito baixo"));
//     }
//   });
// }

// const a = checkNumber(20);

// const b = checkNumber(10);

// a.then((v) => console.log(`O resultado é: ${v}`)).catch((err) =>
//   console.log(`Um erorr ocorreu ${err}`)
// );

// b.then((v) => console.log(`O resultado é: ${v}`)).catch((err) =>
//   console.log(`Um erorr ocorreu ${err}`)
// );

// 6 - resolver multiplas promessas

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve(10);
//   }, 1000);
// });

// const p2 = Promise.resolve(10 + 10);

// const p3 = new Promise((resolve, reject) => {
//   if (30 > 10) {
//     resolve(30);
//   } else {
//     reject("ERRO");
//   }
// });

// Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - async function
async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(2, 4).then((value) => {
  console.log(`O valor da soma é ${value}`);
});

console.log("teste async");

// 8 - async await
function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolveu a Promise");
    }, 2000);
  });
}
async function chamadaAsync() {
  console.log("Chamando a promise, e esperando o resultado");
  const result = await resolveComDelay();
  console.log(`O resultado chegou ${result}`);
}

chamadaAsync();

// 9 - generators
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
