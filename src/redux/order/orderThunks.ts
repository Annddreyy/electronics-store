import { ResponseStatuses } from '../../api/api';
import { CurrentOrder, orderAPI } from '../../api/orderAPI';
import { BaseThunkType } from '../store';
import { actions, Actions } from './orderReducer';

export const setOrders =
    (userId: number): BaseThunkType<Actions> =>
    async (dispatch) => {
        const response = await orderAPI.getOrders(userId);
        if (response.status === ResponseStatuses.OK) {
            dispatch(actions.setOrders(response.orders));
        } else {
            console.error('При получении заказов произошла ошибка');
        }
    };

export const postOrder =
    (userId: number, order: CurrentOrder): BaseThunkType<Actions> =>
    async (dispatch) => {
        const response = await orderAPI.postOrder(userId, order);
        if (response.status === ResponseStatuses.OK) {
            console.log('OK');
        } else {
            console.error('Error');
        }
    };
