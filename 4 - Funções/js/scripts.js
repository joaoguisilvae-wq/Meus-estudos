// 1 - Criando Funções
function funlo() {
  console.log("teste");
}

funlo();
funlo();

const pp = function () {
  console.log("funçõa");
};

pp();

function funçãoComParametro(txt) {
  console.log(`impriminto: ${txt}`);
}

funçãoComParametro("lalala");
funçãoComParametro("lelele");

const pepino = function () {
  console.log("pepino e azul");
};

pepino();

// // 2 - Retorno de Funções

a = 10;
b = 20;
c = 30;
d = 40;

function somando(n1, n2) {
  return n1 + n2;
}

const resultado = somando(a, b);

console.log(resultado);
console.log(somando(c, d));

// 3 - Escopo da Função
let y = 10;

function testandoEscopo() {
  let y = 20;
  console.log(`O valor de y é ${y}`);
}

testandoEscopo();

console.log(`y fora da função é ${y}`);

// 4 - Escopo aninhado
let m = 10;

function escopoAninhado() {
  let m = 20;
  if (true) {
    let m = 30;
    if (true) {
      let m = 40;

      console.log(m);
    }
    console.log(m);
  }
  console.log(m);
}

escopoAninhado();

console.log(m);

// 5 - arrow function
const testeArrow = () => {
  console.log("Essa é uma arrow function");
};

testeArrow();

const parOuImpar = (n) => {
  if (n % 2 === 0) {
    console.log("Par");
    return;
  }

  console.log("Impar");
};

parOuImpar(2);
parOuImpar(1);

// 6 - arrow function pequena
const raizQuadrada = (x) => {
  return x * x;
};

console.log(raizQuadrada(5));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(4));

const helloWorld = () => console.log("Hello World");
helloWorld();
console.log(helloWorld());

// 7 - parametro opcionas
const multiplication = function (m, n) {
  if (n === undefined) return m * 2;
  else {
    return m * n;
  }
};

console.log(multiplication(10));
console.log(multiplication(2, 4));

const greeting = (name) => {
  if (!name) {
    console.log("Olá!");
    return;
  } else {
    console.log(`Olá ${name}`);
  }
};

greeting();
greeting("lol");

// 8 - Valor default
const customGreeting = (name, greet = "Olá") => {
  return `${greet}, ${name}`;
};

console.log(customGreeting("João"));
console.log(customGreeting("João", "Bom dia"));

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) console.log(text);
};

repeatText("text");
repeatText("dol", 5);

const contadordeMoveis = (movel = "Sofá", quantidade = 1, cor = "Preto") => {
  for (let a = 1; a <= quantidade; a++) console.log(`${a} ${movel} ${cor} `);
};
contadordeMoveis("livros", 5, "verdes");

// 9 - Closure
function someFunction() {
  let txt = "ALguma coisa";

  function display() {
    console.log(txt);
  }
  display();
}

someFunction();

// 10 - mais de closure
const multiplicationClosure = (n) => {
  return (m) => {
    return n * m;
  };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);
console.log(c1(5));
console.log(c2(10));

// 11 - Recursão
const untilTen = (n, m) => {
  if (n < 10) {
    console.log("A função parou de executar");
  } else {
    const x = n - m;

    console.log(x);

    untilTen(x, m);
  }
};

untilTen(140, 7);

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

const num = 6;

const result = factorial(num);

console.log(`O fatorial do numero ${num} é ${result}`);
