let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contadorDenumerosImpares = 0; // Definida variável com valor de 0 para que ela receba o acréscimo de 1 unidade a cada número ímpar encontrado pelo loop for;

//loop for que passa por todo o array de números 
for (let index = 0; index < numbers.length; index += 1) {
  // condicional que utiliza o operador de resto para vefiricar se o número é ímpar;
  if (numbers[index] % 2 !== 0) {
    // acrescenta 1 unidade cada vez que o if acima encontrar um resultado da divisão por 2 que seja diferente de 0;
    contadorDenumerosImpares += 1;
  }
}
//condição para verificar se o loop acima não encontro nenhum número ímpar, por meio da verificação do valor da variável contadorDeNumerosImpares;
if (contadorDenumerosImpares === 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log("Existem" + " " + contadorDenumerosImpares + " " + "números ímpares");
}