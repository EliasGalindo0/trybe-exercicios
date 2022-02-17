//A função doingThings recebe como parâmetro as demais funções (wakeUp, breakFast, sleep). Essa função tem como comportamento rececber como parâmetro inicial a função callback. Dentro dela criamos uma constante 'resul' que atribuímos o valor de chamada da função de callback(). Exibimos no console de acordo com o parâmetro passado para a função doingThings no momento de sua chamada. Ou seja, o valor passado como parâmetro será o nome da função que desejamos chamar e o resultado será exibido no console de acordo com o nome dessas funções, pois a variável result armazena o valor da função callback, que será trocado pelo nome do parâmetro passado noa HOF.

// 1 - Crie uma função que retorne a string 'Acordando!!' ;
const wakeUp = () => 'Acordando!!';

// 2 - Crie outra função que retorne a string 'Bora tomar café!!' ;
const breakFast = () => 'Bora tomar café!!';

// 3 - Crie mais uma função que retorne a string 'Partiu dormir!!' ;
const sleep = () => 'Partiu dormir!!';

// 4 - Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
const doingThings = (callback) => {
  const result = callback();
  console.log(result);
};

doingThings(wakeUp);
doingThings(breakFast);
doingThings(sleep);
