import React, { Component } from 'react';
import './App.css';
import NewGame from './components/NewGame'
import Hangman from './components/Hangman'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hangman />
        <NewGame />
      </div>
    );
  }
}

export default App;
