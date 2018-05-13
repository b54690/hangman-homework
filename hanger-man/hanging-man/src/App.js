import React, { Component } from 'react';
import './App.css';
import NewGame from './components/NewGame'
import GamePlay from './components/GamePlay'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GamePlay />
        <NewGame />
      </div>
    );
  }
}

export default App;
