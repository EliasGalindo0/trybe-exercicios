let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
};
  console.log(result);

let media = result / numbers.length;
  console.log(media);


if (media > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
};

let higherNumber = numbers[0];
  
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
      higherNumber = numbers[index];
    }
  };

  console.log(higherNumber);

let impar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    impar += 1;
  }
};

if (impar === 0) {
  console.log("nenhum valor ímpar encontrado")
} else {
  console.log("Existem" + " " + impar + " " + "números ímpares");
};


let smallestNumber = numbers[0];
  
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < smallestNumber) {
      smallestNumber = numbers[index];
    }
  };

  console.log(smallestNumber);

  let numeros = [];

  for (let index = 0; index <= 25; index += 1) {
    numeros.push(index);
  };

  console.log(numeros);

  for (let index = 0; index < numeros.length; index += 1) {
    console.log(numeros[index] / 2);
  };

//-------------------------------------------------------------------- Pesquisar, plantão, tira dúvida!

  for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  };
  
  console.log(numbers);

//---------------------------------------------------------------------------------------------------