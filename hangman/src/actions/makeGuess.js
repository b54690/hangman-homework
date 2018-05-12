export const GUESS_LETTER = 'GUESS_LETTER'

export default (guesses) => {
  return {
    type: GUESS_LETTER,
    payload: guesses,
  }
}
