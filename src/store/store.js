import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import { thunk } from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));
export default store;
