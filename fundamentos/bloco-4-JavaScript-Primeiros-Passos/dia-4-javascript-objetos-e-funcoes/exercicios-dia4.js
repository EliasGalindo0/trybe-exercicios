let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

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
