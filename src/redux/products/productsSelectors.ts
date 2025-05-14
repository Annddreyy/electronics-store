import { createSelector } from 'reselect';
import { AppStateType } from '../store';
import { StatusType } from './productsReducer';

export const getProductsSelector = (state: AppStateType) => {
    return state.products.products;
};

export const getProductsByStatus = (status: StatusType) =>
    createSelector(getProductsSelector, (products) =>
        products.filter((product) => product.statusList?.includes(status)),
    );

export const getProductsByType = (type: string) =>
    createSelector(getProductsSelector, (products) =>
        products.filter((product) => product.type === type),
    );
