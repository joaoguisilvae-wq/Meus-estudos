// 1 - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("clicou aq");
});

// 2 - removendo eventos
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.log("teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

// 3 - argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

// 4 - Propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Evento 2");
});

// 5 - removendo evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("não alterou a pagina");
});

// 6 - eventos de tecla
document.addEventListener("keyup", (e) => {
  console.log(`Soltou a tecla ${e.key}`);
});
document.addEventListener("keydown", (e) => {
  console.log(`Apertou a tecla ${e.key}`);
});
// 7 - eventos de mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", (e) => {
  console.log("Pressionou o botão");
});
mouseEvents.addEventListener("mouseup", (e) => {
  console.log("Soltou o botão");
});
mouseEvents.addEventListener("dblclick", (e) => {
  console.log("clique duplo");
});

// // 8 - movimento do mouse
// document.addEventListener("mousemove", (e) => {
//   console.log(`No eixo x: ${e.x}`);
//   console.log(`No eixo y: ${e.y}`);
// });

// 9 - evento por scroll
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 200) {
    console.log("Passamos de 200px");
  }
});

// 10 - evento por focus/blur
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
  console.log("Entrou no input");
});
input.addEventListener("blur", (e) => {
  console.log("Saiu do input");
});

// 11 - evento de carregamento
window.addEventListener("load", () => {
  console.log("A pagina carregou");
});

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});

// 12 - debounce
const debounce = (f, delay) => {
  let timeout;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      f.apply(args);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("Executando com 400ms de atraso");
  }, 400)
);
