import React from "react";

class Button extends React.Component {
  constructor() {
    super()
    /* Para definir um estado inicial ao componente, a ser definido
    no momento em que o componente for colocado na tela, faça uma atribuição
    de um objeto à chave `state` do `this`, ou seja, ao `this.state`*/
    this.state = {
      numeroDeCliques: 0
  }
  this.handleClick = this.handleClick.bind(this);
}

  handleClick = () => {
     /* Você **NUNCA** deve fazer atribuições diretamente a `this.state`. Deve,
    ao invés disso, SEMPRE utilizar a função `this.setState(novoEstado)` do
    React*/
    this.setState((prevState, _props) => ({
      /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
      numeroDeCliques: prevState.numeroDeCliques + 1
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
    )
  }
}

export default Button;
