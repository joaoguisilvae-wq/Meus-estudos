// 1 - setTimeout
console.log("Ainda não executou");

setTimeout(function () {
  console.log("requisição assincrona");
}, 2000);

console.log("Ainda não executou2");

// 2 - setInterval
console.log("ainda não começou");

setInterval(function () {
  console.log("intervalo assincrono");
}, 3000);

console.log("ainda não começou2");
