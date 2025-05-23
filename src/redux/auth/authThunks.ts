import { BaseThunk } from '../store';
import { ResponseStatuses } from '../../api/api';
import { authAPI, User } from '../../api/authAPI';
import { PaymentMethods, ReceivingMethods } from '../../api/orderAPI';
import { Actions, actions } from './authReducer';
import photo from './../../assets/personal-cabinet/photo.jpg';

export const auth = (): BaseThunk<Actions> => async (dispath) => {
    //const response = await authAPI.auth();
    const response = {
        status: ResponseStatuses.OK,
    };
    if (response.status === ResponseStatuses.OK) {
        // FIXME: Изменить на запрос к API
        // dispath(actions.setUser(response.user));

        const user: User = {
            email: 'andrey@mail',
            phone: '+7(999)999-99-99',
            name: 'Андрей',
            dateOfRegistration: new Date(2024, 3, 12),
            ordersCount: 1,
            avatar: photo,
            city: 'Пенза',
            address: 'г. Пенза',
            index: 124553,
            payMethod: PaymentMethods.CARD,
            receivingMethod: ReceivingMethods.DELIVERY,
        };

        dispath(actions.setUser(user));
    } else {
        console.error('Ошибка при авториации!');
    }
};

export const login =
    (email: string, password: string, remember = false): BaseThunk<Actions> =>
    async (dispath) => {
        const response = await authAPI.login(email, password, remember);
        if (response.status === ResponseStatuses.OK) {
            dispath(actions.setUser(response.user));
        } else {
            console.error('Ошибка при авторизации!');
        }
    };

export const logout = (): BaseThunk<Actions> => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.status === ResponseStatuses.OK) {
        dispatch(actions.logout());
    } else {
        console.error('Ошибка при выходе из аккаунта!');
    }
};
