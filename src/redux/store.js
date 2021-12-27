import { createStore, applyMiddleware } from "redux";
import todo from "../reducers/index";
import thunk from "redux-thunk";

const store = createStore(todo, applyMiddleware(thunk));

export default store;
