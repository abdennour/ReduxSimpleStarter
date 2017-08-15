import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  count: (state = 0) => state + 1
});

export default rootReducer;
