import { combineReducers } from "redux";
import { gameReducer } from "./game.reducer";
import {pointReducer } from "./point.reducer";


export const rootReducer = combineReducers({
  game: gameReducer,
  point: pointReducer
})
