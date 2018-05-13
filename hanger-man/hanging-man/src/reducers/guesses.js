import { GUESS } from '../actions/makeGuess'
import { NEW_GAME } from '../actions/newGame'

export default (state = [], { type, payload } = {}) => {
  switch (type) {

  case GUESS :
    return state.concat(payload)
    //concat returns a new guess to the end of a new state array

  case NEW_GAME :
    return []

  default :
    return state
  }
}
