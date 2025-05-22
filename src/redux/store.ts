import {
    Action,
    applyMiddleware,
    combineReducers,
    compose,
    createStore,
} from 'redux';
import { ThunkAction, thunk as thunkMiddleware } from 'redux-thunk';
import { productsReducer } from './products/productsReducer';
import { offersReducer } from './offers/offersReducer';
import { newsReducer } from './news/newsReducer';
import { orderReducer } from './order/orderReducer';
import { authReducer } from './auth/authReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    offers: offersReducer,
    news: newsReducer,
    order: orderReducer,
    auth: authReducer,
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

export type BaseThunkType<AT extends Action, R = Promise<void>> = ThunkAction<
    R,
    AppStateType,
    unknown,
    AT
>;

export default store;
