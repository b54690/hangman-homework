import { NEW_GAME } from '../actions/newGame'

export default (state = 'word', {type, payload} = {}) => {
  switch (type) {

  case NEW_GAME :
    return payload

  default :
    return state
  }
}
