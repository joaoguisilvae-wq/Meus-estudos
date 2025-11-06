// 1 - métodos
const animal = {
  nome: "bob",
  latir: function () {
    console.log("au au");
  },
};
console.log(animal.nome);

animal.latir();

// 2 - aprofundando em métodos
const pessoa = {
  nome: "João",

  getNome: function () {
    return this.nome;
  },

  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("putario");
console.log(pessoa.getNome());

// 3 - protype
const txt = "asd";
console.log(Object.getPrototypeOf(txt));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(Object.getPrototypeOf(arr));

// 4 - mais sobre prototype
const myObject = {
  a: "b",
};

console.log(Object.getPrototypeOf(myObject));
console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject));
console.log(Object.getPrototypeOf(mySecondObject) === myObject);

// 5 - classes basicas
const cachorro = {
  raca: null,
  patas: 4,
};

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog);
console.log(bulldog.patas);

// 6 - função construtora
function criarCachorro(nome, raca) {
  const cachorro = Object.create({});

  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}

const bob = criarCachorro("Lua", "Pastor alemão");
console.log(bob);

// 7 - funções como classe
function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("Pomelo", "husky");
console.log(husky);

// 8 - métodos na função construtora
Cachorro.prototype.uivar = function () {
  console.log("auuuuuu!");
};

husky.uivar();

// 9 - classes es6
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// 10 - mais sobre classes
class Caminhão {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhão() {
    console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
  }
}

const scania = new Caminhão(6, "Vermelha");

console.log(scania);
scania.descreverCaminhão();

// oq nn funciona
Caminhão.motor = 4;

const c2 = new Caminhão(4, "Preta");

console.log(c2);

c2.descreverCaminhão();

console.log(c2.motor);

// oq funciona
Caminhão.prototype.motor = 4.0;

const c3 = new Caminhão(8, "azul");

console.log(c3);
console.log(c3.motor);

// 11 - override
class Humano {
  constructor(nome, idade) {
    (this.nome = nome), (this.idade = idade);
  }
}

const jg = new Humano("João", 16);

console.log(jg);

console.log(Humano.prototype.idade);

Humano.prototype.idade = "Não definido";

console.log(jg.idade);

console.log(Humano.prototype.idade);

// 12 - symbol
class Aviao {
  constructor(marca, turbina) {
    this.marca = marca;
    this.turbina = turbina;
  }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boing = new Aviao("Boing", 10);

console.log(boing);

console.log(boing[asas]);

console.log(boing[pilotos]);

// 13 - getters e setters
class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Você esta lendo: ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArrays = tags.split(", ");
    this.tags = tagsArrays;
  }
}

const myPost = new Post("alguem aq?", "É um post sobre nada");

console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "Programação, JS, Html";
console.log(myPost);

// 14 - herança
class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas, patas);
    this.nome = nome;
  }
}

const labubu = new Lobo(3, "Labubu");
console.log(labubu);

// 15 - instaceof
console.log(labubu instanceof Lobo);

console.log(boing instanceof Caminhão);

console.log(Lobo instanceof Mamifero);
console.log(new Lobo(4, "teste") instanceof Mamifero);
