const techProducts = [
  {
      id: 1, // numérico
      name: 'computer', // string
      price: 2100, // number
  },
  {
      id: 2,
      name: 'mouse',
      price: 56,
  },
  {
      id: 3,
      name: 'monitor',
      price: 589,
  },
  {
      id: 4,
      name: 'keyboard',
      price: 78,
  },
  {
      id: 5,
      name: 'HD',
      price: 350,
  },
  {
      id: 6,
      name: 'webcam',
      price: 187,
  },
  {
      id: 7,
      name: 'mic',
      price: 69,
  },
  {
      id: 8,
      name: 'headset',
      price: 216,
  },
];

// * 1 - // Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
const array = [];
techProducts.forEach((product) => {
  product.id % 2 === 0 ? array.push(product.name) : '';
});
console.log(array);

// * 2 - // Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
const xablau = techProducts.some((product) => product.price > 300);
console.log(xablau);

// * 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
// // ex: id: 8 e quantidade: 2 preço total: 432

const totalPrice = (identify, amount) => (techProducts.find((item) => (item.id === identify)).price) * amount;
console.log(totalPrice(8, 2));
