// 1 - Let, Const e Var
// var
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x);
}
console.log(x);

// let
let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a);
}
console.log(a);

// 2 - Arrow function
const sum = function (a, b) {
  return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum);
console.log(arrowSum);

const greeting = (name) => {
  if (name) {
    return `Hello ${name}`;
  } else {
    return "Hello";
  }
};
console.log(greeting("jg"));
console.log(greeting());

// this
const user = {
  name: "Theo",
  sayUserName() {
    setTimeout(function () {
      console.log(this);
      console.log("Username: " + this.name);
    }, 1000);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 2000);
  },
};
// user.sayUserName();
// user.sayUserNameArrow();

// 3 - filter
const arr = [1, 2, 3, 4, 5, 6];

const highNumbers = arr.filter((n) => {
  if (n > 3) {
    return n;
  }
});

console.log(arr);
console.log(highNumbers);

const users = [
  { name: "João", avaliable: true },
  { name: "Matheus", avaliable: false },
  { name: "Maria", avaliable: true },
  { name: "Pedro", avaliable: false },
  { name: "Filho", avaliable: false },
  { name: "Vector", avaliable: true },
];

const avaliableUsers = users.filter((user) => user.avaliable);
console.log(avaliableUsers);

// 4 - map
const products = [
  { name: "Camiseta", price: 10.99, category: "Roupas" },
  { name: "Chaleira Elétrica", price: 150, category: "Eletro" },
  { name: "Fogão", price: 499, category: "Eletro" },
  { name: "Calça Jeans", price: 87.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
});

console.log(products);

// 5 - template literals
const userName = "João";
const userAge = 16;

console.log(`O nome do usuario é ${userName} e tem ${userAge} anos`);

// 6 - destructuring
const fruits = ["Maçã", "Mamão", "Laranja"];
const [f1, f2, f3] = fruits;

console.log(f1, f3);

const productsDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Periférico",
  color: "Cinza",
};

const { name: productName, price, category, color } = productsDetails;

console.log(
  `O nome do produto é ${productName} ele custa R$${price} é um ${category} e é da cor ${color}`
);

// 7 - spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

const a4 = [0, ...a3, 7];

console.log(a4);

const carName = { name: "Gol" };
const carBrand = { brand: "Vw" };
const otherInfos = { km: 1000000, price: 49999 };

const car = { ...carName, ...carBrand, ...otherInfos };

console.log(car);

// 8 - classes
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa gola V", 20);

console.log(shirt);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(30));

// 9 - herança
class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores São: ");
    this.colors.forEach((color) => {
      console.log(color);
    });
  }
}

const hat = new ProductWithAttributes("Chapéu", 90, [
  "Azul",
  "Vermelho",
  "preto",
]);

console.log(hat);
hat.showColors();

console.log(hat.productWithDiscount(10));
