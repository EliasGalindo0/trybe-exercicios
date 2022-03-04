// App.js
import React, { Component }from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      characters: [],
    }
  }
  
  componentDidMount() {
    const endpoint = 'https://rickandmortyapi.com/api/character';
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      this.setState({
        characters: data.results,
      })
    })
  }

    render() {
      const { characters } = this.state;
      return (
        <div className="App">
        <h1>Rick and Morty</h1>
        <div className="body">
        { characters.map(({ name, image }) => {
          return (
            <div className="container" key={ name }>
              <h3>{ name }</h3>
            <img src={ image } alt={ image } />
            </div>
          )
        }) }
        </div>
        </div>
      )
    }
  }

export default App;