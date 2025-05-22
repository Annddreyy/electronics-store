import { AppState } from '../store';

export const getUser = (state: AppState) => {
    return state.auth;
};
