import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk as thunkMiddleware } from 'redux-thunk';

const rootReducer = combineReducers({

});


export type AppStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
