import { AppStateType } from '../store';

export const getOrders = (state: AppStateType) => {
    return state.order.orders;
};

export const getProducts = (state: AppStateType) => {
    return state.order.currentOrder.products;
};

export const getReceivingMethod = (state: AppStateType) => {
    return state.order.currentOrder.receivingMethod;
};

export const getPayMethod = (state: AppStateType) => {
    return state.order.currentOrder.payMethod;
};

export const getRecipient = (state: AppStateType) => {
    return state.order.currentOrder.recipient;
};

export const getIsCompleted = (state: AppStateType) => {
    return state.order.isCompleted;
};
