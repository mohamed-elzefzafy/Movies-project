import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const { createStore, applyMiddleware } = require("redux");
const { moviesReducer } = require("../reducer/movieReducer");


export const store = createStore(moviesReducer , applyMiddleware(thunk));