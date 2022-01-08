import { combineReducers } from 'redux';

import filters from './fillter';
import pizzas from './pizzas';
import cart from './card';

const rootReducer = combineReducers({
  filters,
  pizzas,
  cart,
});

export default rootReducer;
