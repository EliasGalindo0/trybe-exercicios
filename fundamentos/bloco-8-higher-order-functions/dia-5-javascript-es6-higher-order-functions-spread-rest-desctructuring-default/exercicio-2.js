// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .
const sum = (...numbers) => numbers.reduce(((acc, curr) => acc + curr), 0);

console.log(sum(2, 3));
console.log(sum(3, 4));
console.log(sum(4, 5));
console.log(sum(5, 6));
