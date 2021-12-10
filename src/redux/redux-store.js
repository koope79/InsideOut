import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import { compose } from "redux";
import projectionReducer from "./Projection-reducer";
import memoryReducer from "./Memory-reducer";
import authReducer from "./Auth-reducer";
import dreamsReducer from "./Dreams-reducer";
import fearsReducer from "./Fears-reducer";
import islandsReducer from "./Islands-reducer";


let reducersStuff = combineReducers({
    projectionPage: projectionReducer,
    memory: memoryReducer,
    dreams: dreamsReducer,
    auth: authReducer,
    fears: fearsReducer,
    islands: islandsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducersStuff, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;