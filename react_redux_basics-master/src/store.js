import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import math from "./app/reducers/mathReducer";
import user from "./app/reducers/userReducer";
import thunk from 'redux-thunk';
export default  createStore(
    combineReducers({
        math,
         user
        }),
     {}, 
     applyMiddleware(thunk)
    );
