import { AppState } from '../store';

export const getOrders = (state: AppState) => {
    return state.order.orders;
};

export const getProducts = (state: AppState) => {
    return state.order.currentOrder.products;
};

export const getReceivingMethod = (state: AppState) => {
    return state.order.currentOrder.receivingMethod;
};

export const getPayMethod = (state: AppState) => {
    return state.order.currentOrder.payMethod;
};

export const getRecipient = (state: AppState) => {
    return state.order.currentOrder.recipient;
};

export const getIsCompleted = (state: AppState) => {
    return state.order.isCompleted;
};

export const getCurrentPage = (state: AppState) => {
    return state.order.currentPage;
};

export const getPageSize = (state: AppState) => {
    return state.order.pageSize;
};
