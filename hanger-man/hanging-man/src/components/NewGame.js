import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import playGame from '../actions/newGame'
import {wordList} from '../lib/game'

class NewGame extends PureComponent {


  newGame(event) {
    event.preventDefault()
    //if event not explicitly met then default action
    //should not be taken
    this.props.playGame(wordList[Math.floor(Math.random()*wordList.length)])
  }

  render() {
    return (
      <div className='newGame-button'>
        <button className="primary-button" onClick={this.newGame.bind(this)}>New game</button>
      </div>
      // bind method sets the value
      //of a function regardless of how it's called,
    )
  }
}

//mapDispatchToProps - create playGame Object with
//dispatchable action creators.
const mapDispatchToProps = { playGame }
export default connect (null, mapDispatchToProps)(NewGame)

// Null connect, injects all mapDispatchToProps
// without subscribing to the store(mapStatetoProps)
