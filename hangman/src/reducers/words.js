import {NEW_GAME} from '../actions/newGame';
import {wordList} from '../lib/game'

export default (state = wordList, { type, payload } = {}) => {
  switch(type) {
  case NEW_GAME :
    return wordList[Math.floor(Math.random() * wordList.length)];

  default :
    return state
  }
}
