import { combineReducers } from 'redux';
import commentReducer from './commentReducer';

const allReducer = combineReducers({
    comments: commentReducer,
});

export default allReducer;
