import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todos from './todos';

const reducers = combineReducers({ 
  auth: authReducer,
  todos,
});

export default reducers;

// passing all reducers to the combined reducers & assigned to the variable called //reducers