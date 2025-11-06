// 1 - arrays
const list = [1, 2, 3, 4, 5];

console.log(list);

console.log(typeof list);

// 2 - Mais sobre arrays
const arr = ["a", "b", "c", "d", "d"];

console.log(arr["0"]);
console.log(arr["4"]);
console.log(arr["6"]);

// 3 - Propriedades
const numeros = [2, 4, 5];

console.log(numeros.length);
console.log(numeros["length"]);

const meunome = "joão";

console.log(meunome.length);

// 4 - métodos
const outrosnumeros = [1, 2, 3];

const allnumbers = numeros.concat(outrosnumeros);

console.log(allnumbers);

const texto = "algum texto";

console.log(texto.toUpperCase());

console.log(typeof texto.toUpperCase);

console.log(texto.indexOf("a"));

// 5 - objetos
const person = {
  name: "João",
  age: 16,
  jobs: "estudante",
};

console.log(person);

console.log(person.name);

console.log(person.name.length);

console.log(typeof person);

// 6 - criando e deletando propriedades
const carro = {
  engine: 2.0,
  brand: "Vw",
  model: "Tiguan",
  km: 20000,
};

console.log(carro);

carro.doors = 4;

console.log(carro);

delete carro.km;

console.log(carro);

// 7 - mais sobe objetos
const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

// 8 - conhecendo melhor os obejtos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));

// 9 - Mutação
const a = {
  name: "João",
};

const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 16;

console.log(a);
console.log(b);

delete b.age;

console.log(a);

// 10 - loop em array
const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando o usuario: ${users[i]}`);
}

// Método de array

// 11 - push e pop
const array = ["a", "b", "c"];

array.push("d");
console.log(array);
console.log(array.length);

array.pop();
console.log(array);

const itemremovido = array.pop();
console.log(itemremovido);
console.log(array);

array.push("z", "x", "y");
console.log(array);

// 12 - shift e anshift

const numbers = [1, 2, 3];

const number = numbers.shift();

console.log(number);
console.log(numbers);

numbers.unshift(4, 5, 6);
numbers.unshift(7);

console.log(numbers);

// 13 - indexOf e lastindexOf
const myElements = ["Morango", "Maçã", "Abacate", "Pera", "Abacate"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));
console.log(myElements[myElements.lastIndexOf("Abacate")]);

console.log(myElements.indexOf("Abacate"));
console.log(myElements.lastIndexOf("Abacate"));

// 14 - slices
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);
console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);
console.log(testeSlice);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

// 15 - foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((n) => {
  console.log(`O número é ${n}`);
});

const posts = [
  { title: "Primeiro post", category: "PHP" },
  { title: "Segundo post", category: "JavaScript" },
  { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.title} da categoria ${post.category}`);
});

// 16 - includes
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));
console.log(brands.includes("Fia"));

if (brands.includes("BMW")) {
  console.log("Há carros da marca BMW!");
}

// 17 - reverse
const reverseTeste = [1, 2, 3, 4, 5];

console.log(reverseTeste);

reverseTeste.reverse();

console.log(reverseTeste);

//  Métodos de string

// 18 - trim
const trimTeste = " testando \n   ";
console.log(trimTeste);

console.log(trimTeste.trim());

console.log(trimTeste.length);

console.log(trimTeste.trim().length);

// 19 - padstart
const testePadStart = "1";

const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, 0);

console.log(testePadEnd);

// 20 - split
const frase = "O rato roeu a roupa do rei de roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21 - join
const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;

console.log(itensParaComprar);
console.log(fraseDeCompra);

// Saiu da string
// 21 - repeat
const testeRepeat = "teste, ";

console.log(testeRepeat.repeat(5));

// 22 - rest operator/parameters
const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 20, 34, 65, 99, 288282));

// 23 - for of
const somaInfinita2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }

  return total;
};

console.log(somaInfinita2(2, 4, 6, 8));

// 24 - destructuring em objetos
const userDetails = {
  firstName: "João",
  lastName: "Eugenio",
  job: "Estudante",
};

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

// renomear as variaveis
const { firstName: primeiroNome } = userDetails;

console.log(firstName);
console.log(primeiroNome);

// 25 - destructuring em arrays
const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON
const myJson =
  '{"name": "Matheus", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}';

console.log(myJson);

console.log(typeof myJson);

// 28 - converção objeto para JSON e vice versa

const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject);

myObject.isOpenToWork = true;

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);
console.log(typeof myNewJson);
