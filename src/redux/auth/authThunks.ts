import { ResponseStatuses } from '../../api/api';
import { authAPI, User } from '../../api/authAPI';
import { BaseThunk } from '../store';
import { Actions, actions } from './authReducer';
import photo from './../../assets/photo.jpg';
import { PaymentMethods, ReceivingMethods } from '../../api/orderAPI';

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

export const logout = (): BaseThunk<Actions> => async (dispatch) => {
    const response = await authAPI.logout();
    if (response.status === ResponseStatuses.OK) {
        dispatch(actions.logout());
    } else {
        console.error('Ошибка при выходе из аккаунта!');
    }
};
