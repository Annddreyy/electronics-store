import { AppStateType } from '../store';

export const getUser = (state: AppStateType) => {
    return state.auth;
};
