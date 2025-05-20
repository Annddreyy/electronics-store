import { AppStateType } from '../store';

export const getProducts = (state: AppStateType) => {
    return state.order.products;
};

export const getReceivingMethod = (state: AppStateType) => {
    return state.order.receivingMethod;
};

export const getPayMethod = (state: AppStateType) => {
    return state.order.payMethod;
};

export const getRecipient = (state: AppStateType) => {
    return state.order.recipient;
};

export const getIsCompleted = (state: AppStateType) => {
    return state.order.isCompleted;
};
