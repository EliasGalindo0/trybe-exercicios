//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
function soma(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
const valor1 = 14;
const valor2 = 35;

function valueCompare(valor1, valor2) {
  if (valor1 > valor2) {
    return valor1 + ' é maior que ' + valor2;
  } else {
    return valor2 + ' é maior que ' + valor1;
  }
}
console.log(valueCompare (valor1, valor2));

//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
const primeiroNum = 10;
const segundoNum = 23;
const terceiroNum = 21;

function maiorDeTres (primeiroNum, segundoNum, terceiroNum) {
  if (primeiroNum > segundoNum && terceiroNum) {
    return primeiroNum + ' é o maior dos três números.';
  } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
    return segundoNum + ' é o maior dos três números.';
  } else {
    return terceiroNum + ' é o maior dos três números.'
  }
}
console.log(maiorDeTres(primeiroNum, segundoNum, terceiroNum));

// Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero", caso contrário.

function positiveNegative (number) {
  if (number > 0) {
    return 'O número é positivo';
  } else if (number < 0) {
    return 'O número é negativo';
  } else {
    return 'Zero';
  }
}
console.log(positiveNegative(-1));

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem-vinda, " + info['personagem']);

//Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info['recorrente'] = 'Sim';

for (let index in info) {
  console.log(info[index]);
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell`s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (let index in [info, info2]) {
  
}

let recorrente = ' ';
if (['recorrente'] === 'Sim') {
  recorrente = 'Ambos recorrentes';
}

console.log(info, info2, recorrente);
