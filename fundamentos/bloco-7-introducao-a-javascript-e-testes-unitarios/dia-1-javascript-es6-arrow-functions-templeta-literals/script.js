const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope}. Ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};
testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sorted = (array) => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};
const sortedArray = sorted(oddsAndEvens);

console.log(`Os números ${sortedArray} estão ordenados de forma crescente!`); // será necessário alterar essa linha 😉
console.log(
  `Os números ${oddsAndEvens.sort(
    (a, b) => a - b
  )} estão ordenados de forma crescente!`
);

const sum = (n1, n2) => n1 + n2;

console.log(sum(3,5));
