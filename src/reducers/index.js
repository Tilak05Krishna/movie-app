import { combineReducers } from 'redux';
import commentReducer from './commentReducer';
import movieReducer from './movieReducer';
import userReducer from './userReducer';

const allReducer = combineReducers({
    comments: commentReducer,
    movies: movieReducer,
    user: userReducer
});

export default allReducer;
