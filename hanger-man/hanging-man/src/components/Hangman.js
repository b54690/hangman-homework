import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Guess from '../actions/makeGuess';
import PropTypes from 'prop-types'

export const showGuess = (word, guesses) => {
  return word.split('').map(letter => (guesses.indexOf(letter) < 0) ? "_" : letter).join(" ");
}

export const wrongGuessCount = (word, guesses) => {
  return guesses.filter(guess => word.indexOf(guess) < 0).length
}

export const wrongGuessLimit = (word, guesses) => {
  return guesses.filter(guess => word.indexOf(guess) < 0).length >= 6
}

export const isWinner = (word, guesses) => {
  if (showGuess(word, guesses) === word.split('').join(' ')) {
    return "You have Won!: Would you like to play a new game?" }
  else return "Game in Progress"
}

class Hangman extends PureComponent {
  static propTypes = {
    word: PropTypes.string.isrequired,
    guesses: PropTypes.array,
  }

  newGuess(event) {
    event.preventDefault()
    const guess = this.refs.guess.value
    return this.props.Guess(guess)
  }

  render(){
    const currentWord = this.props.word
    const currentGuess = this.props.guess
    const currentHiddenWord = showGuess(currentWord, currentGuess)
    const winningMessage = isWinner(currentWord, currentGuess)

    return (
      <div className='hidden-word'>
        <h2>{ currentHiddenWord }</h2>
        <div className="guess">
          <form id="guessForm" onSubmit={this.newGuess.bind(this)}>
            <div className="input">
              <input ref="guess" type="guess" />
            </div>
            <input type="submit" value="Guess" />
          </form>
        </div>
        <p>Total guesses: {currentGuess.length}/7</p>
        <p>Guessed letters: { currentGuess.join() }</p>
        <p>{ winningMessage }</p>
      </div>
    )
  }
}

const mapStateToProps = ({ word, guess }) => ({ word, guess })
const mapDispatchToProps = { Guess }

export default connect (mapStateToProps, mapDispatchToProps)(Hangman)
