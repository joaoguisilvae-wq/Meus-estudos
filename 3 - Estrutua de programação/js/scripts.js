// 1 - Variaveis

let nome = "Matheus";

console.log(nome)

nome = "João"

console.log(nome)

const idade = 16;

console.log(idade)

// 2 - Mais sobre Variaveis 

let a = 10,
b = 20,
c = 30;

console.log(a, b, c)

const nomecompleto = "Baptista Miranda"
const nomeCompleto = "Madu Rebouças"

console.log(nomecompleto)
console.log(nomeCompleto)

// 3 - Prompt

// const age = prompt("Digite a sua Idade:")

// console.log(`Você tem ${age} anos`)

// 4 - Alert

// alert("Testando")

// const z = 10

// alert(`o numero é ${z}`)

// 5 - Math 

console.log(Math.max(5, 2, 1, 10))
console.log(Math.floor(5.10))
console.log(Math.ceil(5.10))

// 6 - Console

console.log("teste")

console.error("erro!")

console.warn("cuidado!")

// 7 - if

const m = 10

if(m > 5) {
    console.log("m é maior que 5")
}

const user = "João";

if(user === "João") {
    console.log("huahuahua")
}

if(user === "Maria") {
    console.log("Ola!")
}

console.log(user === "João", user === "Maria")

// 8 - else

const LoggedIn = false

if(LoggedIn) {
    console.log("Esta autenticado")
} else {
    console.log("Não esta autenticado!")
}

const x = 10
const y = 15 

if(x > 5 && y > 15) {
    console.log("Numeros mais altos!")
} else {
    console.log("Os numeros são mais baixos")
}

// 9 - elseif

if(1 > 2) {
    console.log("maior!")
} else if(2 > 3) {
    ("maior pt2!")
} else if(5 > 1) {
    console.log ("maior?")
}

const userName = "João"
const userAge = 16

if(userName === "Vitor") {
    console.log("Ola, Vitor!")
} else if(userName === "João" && userAge === 16) {
    console.log("Virussãomortais!")
} else {
    console.log("porressa doido lksksksks")
}

// 10 - while 

let ç = 0

while(ç < 5) {
    console.log(`Repetindo ${ç}`)
    ç = ç + 1
}

// 11 - do while
let o = 10

do {
    console.log(`Valor de o: ${o}`)
    o--
} while (o > 1)

// 12 - for

for(let t = 0; t < 10; t++) {
    console.log("Repertindo algo...")
}

let r = 0 

for(r; r > 0; r = r - 1) {
    console.log(`O r esta diminuindo: ${r}`)
}

// 13 - identação 

for(let u = 0; u < 10; u++) {
    if(u * 2 > 10) {
        console.log(`Maior que 10 ${u}`)
    } else {
        if(u / 2 === 0) {
            console.log("Deu 0")
        }
    }
}

// 14 - break

for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é ${g}`);

    if(g === 15) {
        console.log(`O g é ${g}`);
        break;
    }
}

//  15 - continue 

for(let s = 0; s < 10; s++) {
    // operador resto = %
    if(s % 2 === 0) {
        console.log("Numero par!")
        continue
    }

    console.log(s)
}

// 16 - switch

const job = "engenheiro"

switch(job) {
    case "programador":
        console.log("Voce é um programador")
        break
    case "advogado":
        console.log("você é um advogado")
        break
    case "engenheiro":
        console.log("você é um engenheiro")
        break
    default:
        console.log("Profissão não encontrada")
}

