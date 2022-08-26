import { combineReducers } from 'redux';
import postReducer from './post_reducer';
import todoReducer from './todo_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    user: userReducer,
    post: postReducer
});

export default rootReducer;