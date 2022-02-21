import React from 'react';
import './App.css';

const taskList = ['Comprar Carne', 'Tirar o Lixo', 'Estudar para a Prova', 'Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

class App extends React.Component {
  render() {
  return (
    <ul>{ taskList.map(task => Task(task)) }</ul>);
  };
}

export default App;
