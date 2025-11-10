// 1 - movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[3].textContent);
// Encontrando elementos

// 2 - selecionando por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - selecionando por id
const title = document.getElementById("title");

console.log(title);

// 4 - selecionando por class
const products = document.getElementsByClassName("product");

console.log(products);

// 5 - selecionando por css
const productsQuerry = document.querySelectorAll(".product");

console.log(productsQuerry);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer); //.childNodes[1]

// Alterando html

// 6 - insertBefore
const p = document.createElement("p");
console.log(p);

const header = title.parentElement;
console.log(header);

header.insertBefore(p, title);

// meu exemplo
const po = document.createElement("p");

po.textContent = "novo texto de footer";

const footer = document.querySelector("footer");

const pa = document.querySelector("footer p");

footer.insertBefore(po, pa);

// 7 - appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// meu exemplo

const newTitle = document.createElement("h2");

newTitle.textContent = "Fechando header";

header.appendChild(newTitle);

// const product1 = products[0];

// const product3 = document.createElement(product1);
// mainContainer.appendChild(product3, product1);  quem sabe depois eu volte quando aprender kk

// 8 - replaceChild
const h2 = document.createElement("h2");

h2.textContent = "Meu novo titulo";

header.replaceChild(h2, title);

// meu exemplo

const h3 = document.createElement("h3");

h3.textContent = "Titulo de footer";

footer.replaceChild(h3, pa);

// 9 - createTextNode, preferir com textContent
const myText = document.createTextNode("Agora vamos criar um novo titulo");

console.log(myText);

const h3two = document.createElement("h3");

h3two.appendChild(myText);

console.log(h3two);

mainContainer.appendChild(h3two);

// 10 trabalhando com atributos
const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://www.google.com");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "_blank");

// 11 - altura e largura
console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// 12 - posição do elemento
const product1 = products[0];

console.log(product1.getBoundingClientRect());

// 13 - CSS com JS
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

// 14 - alterando estilos de varios elementos
for (const li of listItens) {
  li.style.backgroundColor = "blue";
}
