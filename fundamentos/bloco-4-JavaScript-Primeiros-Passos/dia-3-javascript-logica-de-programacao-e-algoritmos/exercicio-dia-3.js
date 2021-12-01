let n = 5;
let symbol = "*";
let square = " ";
let posicao = n;

//  Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
// for (let index = 0; index < n; index += 1) {
//   square = square + symbol;
// };

// for (let index = 0; index < n; index += 1){
//   console.log(square);
// };

// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
// for (let index = 0; index < n; index += 1) {
//   square += symbol;
//   console.log(square);
// };

// Agora inverta o lado do triângulo. 
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < posicao) {
      square = square + " "; 

      } else {
        square = square + symbol;
      }
    }
    console.log(square)
    square = " ";
    posicao -=1;
};

//Depois, faça uma pirâmide com n asteriscos de base.

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       square = square + symbol;
//     } else {
//       square = square + ' ';
//     }
//   }
//   console.log(square);
//   square = '';
//   controlRight += 1;
//   controlLeft -= 1
// };