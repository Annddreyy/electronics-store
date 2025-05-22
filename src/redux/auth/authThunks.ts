import { ResponseStatuses } from '../../api/api';
import { authAPI } from '../../api/authAPI';
import { BaseThunkType } from '../store';
import { Actions, actions } from './authReducer';

export const auth = (): BaseThunkType<Actions> => async (dispath) => {
    const response = await authAPI.auth();
    if (response.status === ResponseStatuses.OK) {
        dispath(actions.setUser(response.user));
    } else {
        console.error('Ошибка при авториации!');
    }
};

export const logout = (): BaseThunkType<Actions> => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.status === ResponseStatuses.OK) {
        dispatch(actions.logout());
    } else {
        console.error('Ошибка при выходе из аккаунта!');
    }
};
