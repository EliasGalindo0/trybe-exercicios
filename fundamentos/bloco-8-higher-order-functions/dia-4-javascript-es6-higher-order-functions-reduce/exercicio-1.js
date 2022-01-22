const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const expectedResult = [ '1', '2', '3', true, 4, 5, 6 ];

const flatten = arrays.reduce((acc, arr) => acc.concat(arr), []);

console.log(flatten);

const verify = () => flatten.value === expectedResult.value
 ? console.log('Acertou mizerávi!!!') 
 : console.log('Péeeeeeennnn!');

verify();