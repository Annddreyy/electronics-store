import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk as thunkMiddleware } from 'redux-thunk';
import { productsReducer } from './products/productsReducer';
import { offersReducer } from './offers/offersReducer';
import { newsReducer } from './news/newsReducer';
import { orderReducer } from './order/orderReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    offers: offersReducer,
    news: newsReducer,
    order: orderReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
);

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsType<
    T extends { [key: string]: (...args: any[]) => any },
> = ReturnType<PropertiesTypes<T>>;

export default store;
