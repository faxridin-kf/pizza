import { combineReducers } from 'redux';
import fillterReducers from './fillter';
import pizzasReducers from './pizzas';

const rootReducer = combineReducers({
  fillter: fillterReducers,
  pizzas: pizzasReducers
})

export default rootReducer;