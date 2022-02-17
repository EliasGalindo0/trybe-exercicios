let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);

console.log(typeof isEnrolled);

console.log(typeof patientInfo);

console.log(typeof patientEmail);

console.log(typeof patientAge);

const base = 5;

const height = 8;

const area = base * height;

const perimeter = base + height + base + height;

console.log(area);

console.log(perimeter);

const a = 2;

const b = 2;

let adicao = a + b;

let subtracao = a - b;
 
let multiplicacao = a * b;

let divisao = a / b;

let exponecial = a ** b;

let resto = a % b;

console.log(adicao);

console.log(subtracao);

console.log(multiplicacao);

console.log(divisao);

console.log(exponecial);

console.log(resto);

const numero = 7;

for (let contador = 1; contador <= 9; contador++) {
  console.log("*");
  console.log(numero * contador);
}

let listaDeNomes = ["Joana", "Elias", "Maria"];

for (let i = 0; i < listaDeNomes.length; i ++) {
  let mensagem = "Boas Vindas" + " " + listaDeNomes[i] + "!";
  console.log(mensagem)
}

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
};


let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}
resultado:
"H"
"e"
"l"
"l"
"o"

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let name of names) {
  console.log(name);
};

let myArray = [1,2,3,4,5,6];
for (let i = 0; i < myArray.length; i += 1) {

let arrayInvertida = myArray.slice(1).reverse();
console.log(arrayInvertida);
};
