import { AppState } from '../store';

export const getUser = (state: AppState) => {
    return state.auth;
};

export const getIsAuth = (state: AppState) => {
    return state.auth.isAuth;
};
