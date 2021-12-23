import {SET_POINT} from '../types/point.types'
export const pointReducer = (state = '', action) => {
  const { type } = action
  switch (type) {
    case SET_POINT:
      return state = state+1000;

    default: {
      return state
    }
  }
}
