import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import newGame from '../actions/newGame'

class NewGameButton extends PureComponent {

  reset() {
    this.props.newGame()
    console.log("this is working")
  }

  render() {
    return(
      <button className="newGame" onClick={this.reset.bind(this)}>New Game</button>
    )
  }
}


export default connect(null, { newGame })(NewGameButton)
