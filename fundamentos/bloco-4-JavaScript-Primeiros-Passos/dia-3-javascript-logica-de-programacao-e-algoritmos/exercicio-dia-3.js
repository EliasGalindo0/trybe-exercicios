// let n = 5;
// let symbol = "*";
// let square = " ";
// let posicao = n;

// //  Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
// // for (let index = 0; index < n; index += 1) {
// //   square = square + symbol;
// // };

// // for (let index = 0; index < n; index += 1){
// //   console.log(square);
// // };

// // Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
// // for (let index = 0; index < n; index += 1) {
// //   square += symbol;
// //   console.log(square);
// // };

// // Agora inverta o lado do triângulo. 
// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex < posicao) {
//       square = square + " "; 

//       } else {
//         square = square + symbol;
//       }
//     }
//     console.log(square)
//     square = " ";
//     posicao -=1;
// };

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

// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }
//   console.log(fatorial);

// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = "caju";
// let reverseWord = " "; // variável auxiliar setada vazia para armazenar os valores que forem encontrados nas operações seguintes

// for (let index = 0; index < word.length; index += 1) { //for percorre o tamanho da palavra armazenada
//   reverseWord += word[word.length -1 - index]; //reatribui, a cada iteração, a última letra da palvra armazenada na variável word
// }
// console.log(reverseWord);

// reverseWord = word.split('').reverse().join(''); // O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro. O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.

// console.log(reverseWord);

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let biggestWord = array[0]; //variável auxiliar contendo o primeiro elemento do índice do array
// let smallestWord = array[0];

// for (let index = 0; index < array.length; index += 1) { // o for percorre o índice do array 
//   if (array[index].length > biggestWord.length) { // verifica se o tamanho da palavra atual é maior que o tamanho da palavra armazenada na variável auxiliar (java)
//     biggestWord = array[index]; //se a condição for verdadeira, atualiza a variável atribuindo à ela o valor da palavra encontrada
//   }
// }

// for (let index = 0; index < array.length; index += 1) {
//   if (array[index].length < smallestWord.length) {
//     smallestWord = array[index]; // processo inverso para encontrar a menor palavra
//   }
// }
// console.log(biggestWord);
// console.log(smallestWord);

//Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let biggestPrimeNumber = 0; //variável auxiliar setada em 0 para receber o valor do maior número primo após as verificações abaixo

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) { //for seta o primeiro número para 0 com condição de parada no 50 incrementando de 1 em 1
  let isPrime = true; // boolean setado em true para verificação posterior, se for primo cai no if do final e atribui à variável auxiliar o número atual como sendo o maior número primo até então
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {// for que inicia o divisor como 2, tendo como condição de parada ele ser menor que o número atual (só incrementa até o divisor ser no máximo o número atual. Se o número atual for divisível por algum dos divisores e o resto for 0, significa que ele não é primo, pois o divisor sempre será menor que o número atual nessa condição, e para ser primo ele só pode ser divisível por 1 e por ele mesmo. Como o 1 está excluído da situação, assim como o próprio número que está sendo verificado, se a divisão for exata em algum divisor entro do limite do for, então esse número não é primo)
    if (currentNumber % currentDivisor === 0) {
    isPrime = false;
  }
}
if (isPrime) { // o boolean tem como padrão inicial ser true. Se no loop anterior ele for divisível por algum número, o if anterior ira alterar o boolean para false, assim o número não será armazenado na variável auxiliar, pois não é primo.
  biggestPrimeNumber = currentNumber; // como os loops acima fazem as verificações em uma ordem crescente, a variável auxiliar vai sendo alterada com o último número, logo, o maior número primo dentro do range estabelecido.
}
}
console.log(biggestPrimeNumber);