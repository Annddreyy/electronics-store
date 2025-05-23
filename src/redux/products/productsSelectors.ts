import { createSelector } from 'reselect';
import { AppState } from '../store';
import { Status } from '../../api/productsAPI';

export const getProductsSelector = (state: AppState) => {
    return state.products.products;
};

export const getProductById = (id: number) => (state: AppState) => {
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

export const getViewedProducts = (state: AppState) => {
    return Array.from(state.products.viewed.values());
};

export const getFavoriteProducts = (state: AppState) => {
    return Array.from(state.products.favorite.values());
};

export const getFavoriteProductById = (id: number) => (state: AppState) => {
    return Array.from(state.products.favorite.values()).find(
        (product) => product.id === id,
    );
};

export const getCompareProducts = (state: AppState) => {
    return state.products.compare;
};

export const getSelectedProduct = (state: AppState) => {
    return state.products.selectedProduct;
};
