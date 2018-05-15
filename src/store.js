import { createStore, combineReducers } from "redux";
import ArticlesReducer from './reducers/ArticlesReducer';

const rootReducer = combineReducers({ articles: ArticlesReducer });
const store = createStore(rootReducer);

export default store;