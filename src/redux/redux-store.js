import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import { compose } from "redux";
import projectionReducer from "./Projection-reducer";
import memoriesReducer from "./Memories-reducer";
import memoryReducer from "./Memory-reducer";
import authReducer from "./Auth-reducer";


let reducersStuff = combineReducers({
    projectionPage: projectionReducer,
    memoriesPage: memoriesReducer,
    memory: memoryReducer,
    auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducersStuff, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;