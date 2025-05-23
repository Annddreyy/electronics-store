import { ResponseStatuses } from '../../api/api';
import { CurrentOrder, orderAPI } from '../../api/orderAPI';
import { BaseThunk } from '../store';
import { actions, Actions } from './orderReducer';

export const setOrders =
    (userId: number): BaseThunk<Actions> =>
    async (dispatch) => {
        const response = await orderAPI.getOrders(userId);
        if (response.status === ResponseStatuses.OK) {
            dispatch(actions.setOrders(response.orders));
        } else {
            console.error('При получении заказов произошла ошибка');
        }
    };

export const postOrder =
    (userId: number, order: CurrentOrder): BaseThunk<Actions> =>
    async (dispatch) => {
        const response = await orderAPI.postOrder(userId, order);
        if (response.status === ResponseStatuses.OK) {
            console.log('OK');
        } else {
            console.error('Error');
        }
    };
