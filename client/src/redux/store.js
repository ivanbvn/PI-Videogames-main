import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
const { default: thunk } = require('redux-thunk')

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store