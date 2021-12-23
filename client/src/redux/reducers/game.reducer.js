import {SET_GAME} from '../types/game.types'
export const gameReducer = (state = '', action) => {
  const { type } = action
  switch (type) {
    case SET_GAME:
      return action.payload

    default: {
      return state
    }
  }
}
