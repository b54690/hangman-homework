import React, { Component } from 'react';
import newGame from './actions/newGame'
import { connect } from 'react-redux'
import './App.css';
import NewGameButton from './components/NewGame'
import Guesses from './components/Guesses'

class App extends Component {
  componentDidMount() {
    this.props.newGame()
  }
  render() {
    return (
      <div className="App">
        <NewGameButton />
        <Guesses />
      </div>
    );
  }
}

export default connect(null, { newGame })(App)
