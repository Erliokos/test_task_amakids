import {SET_GAME} from '../types/game.types'

export const setGame = (game) => ({
  type: SET_GAME,
  payload: game 
})
