import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import getPost from './reducers/getPost';
import getListPosts from './reducers/getListPosts';

const rootReducer = combineReducers({
  getPost,
  getListPosts,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
