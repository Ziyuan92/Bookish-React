import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./redux/reducers/reducer";

const initialState = {
  books: [],
  loading: false,
  term: "",
  book: {},
};
const middlewares = [thunk];

const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducer, initialState, composedEnhancers);
export default store;
