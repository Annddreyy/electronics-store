import { createSelector } from 'reselect';
import { AppStateType } from '../store';
import { Status } from '../../api/productsAPI';

export const getProductsSelector = (state: AppStateType) => {
    return state.products.products;
};

export const getProductById = (id: number) => (state: AppStateType) => {
    return state.products.products.find((product) => product.id === id);
};

export const getProductsByStatus = (status: Status) =>
    createSelector(getProductsSelector, (products) =>
        products.filter((product) => product.statusList?.includes(status)),
    );

export const getProductsByType = (type: string) =>
    createSelector(getProductsSelector, (products) =>
        products.filter((product) => product.type === type),
    );

export const getViewedProducts = (state: AppStateType) => {
    return Array.from(state.products.viewed.values());
};

export const getFavoriteProducts = (state: AppStateType) => {
    return Array.from(state.products.favorite.values());
};

export const getFavoriteProductById = (id: number) => (state: AppStateType) => {
    return Array.from(state.products.favorite.values()).find(
        (product) => product.id === id,
    );
};

export const getCompareProducts = (state: AppStateType) => {
    return state.products.compare;
};

export const getSelectedProduct = (state: AppStateType) => {
    return state.products.selectedProduct;
};
