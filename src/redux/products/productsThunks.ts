import { ResponseStatuses } from '../../api/api';
import { Product, productsAPI } from '../../api/productsAPI';
import { BaseThunk } from '../store';
import { actions, Actions } from './productsReducer';

export const getProducts =
    (page = 1, pageSize = 10): BaseThunk<Actions> =>
    async (dispatch) => {
        const response = await productsAPI.getProducts(page, pageSize);
        if (response.status === ResponseStatuses.OK) {
            dispatch(actions.setProducts(response.products));
        } else {
            console.error('При получении товаров произошла ошибка!');
        }
    };

export const getSelectedProduct =
    (productId: number): BaseThunk<Actions> =>
    async (dispatch) => {
        const response = await productsAPI.getSelectedProduct(productId);
        if (response.status === ResponseStatuses.OK) {
            dispatch(actions.setSelectedProduct(response.product));
        } else {
            console.error('При получении информации о товаре произошла ошибка');
        }
    };

export const getFavoriteProducts =
    (userId: number): BaseThunk<Actions> =>
    async (dispatch) => {
        const response = await productsAPI.getFavoriteProducts(userId);
        if (response.status === ResponseStatuses.OK) {
            dispatch(actions.setFavoriteProducts(response.products));
        } else {
            console.error(
                'При получении информации о избранных товарах произошла ошибка!',
            );
        }
    };

export const getCompareProducts =
    (userId: number): BaseThunk<Actions> =>
    async (dispatch) => {
        const response = await productsAPI.getCompareProducts(userId);
        if (response.status === ResponseStatuses.OK) {
            dispatch(actions.setCompareProducts(response.products));
        } else {
            console.error(
                'При получении информации о сравниваемых товаров произошла ошибка!',
            );
        }
    };

export const getViewedProducts =
    (userId: number): BaseThunk<Actions> =>
    async (dispatch) => {
        const response = await productsAPI.getViewedProducts(userId);
        if (response.status === ResponseStatuses.OK) {
            dispatch(actions.setViewedProducts(response.products));
        } else {
            console.error(
                'При получении информации о просмотренных товарах произошла ошибка!',
            );
        }
    };

export const postProduct =
    (product: Product): BaseThunk<Actions> =>
    async (dispatch) => {
        const response = await productsAPI.postProduct(product);
        if (response.status === ResponseStatuses.OK) {
            console.log('Ok');
        } else {
            console.error('При добавлении продукта произошла ошибка');
        }
    };

export const postFavorite =
    (productId: number, userId: number): BaseThunk<Actions> =>
    async (dispatch) => {
        const response = await productsAPI.postFavoriteProduct(
            productId,
            userId,
        );
        if (response.status === ResponseStatuses.OK) {
            console.log('OK');
        } else {
            console.error('При добавлении избранного товара произошла ошибка');
        }
    };

export const postCompare =
    (productId: number, userId: number): BaseThunk<Actions> =>
    async (dispatch) => {
        const response = await productsAPI.postCompareProduct(
            productId,
            userId,
        );
        if (response.status === ResponseStatuses.OK) {
            console.log('OK');
        } else {
            console.error('При добавлении избранного товара произошла ошибка');
        }
    };

export const postViewed =
    (productId: number, userId: number): BaseThunk<Actions> =>
    async (dispatch) => {
        const response = await productsAPI.postViewedProduct(productId, userId);
        if (response.status === ResponseStatuses.OK) {
            console.log('OK');
        } else {
            console.error('При добавлении избранного товара произошла ошибка');
        }
    };
