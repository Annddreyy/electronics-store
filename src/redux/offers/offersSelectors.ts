import { createSelector } from 'reselect';
import { AppStateType } from '../store';

export const getOffersSelector = (state: AppStateType) => {
    return state.offers.offers;
};

export const getOneOffer = (state: AppStateType) => {
    return state.offers.selectedOffer;
};

export const getCurrentPage = (state: AppStateType) => {
    return state.offers.currentPage;
};

export const getPageSize = (state: AppStateType) => {
    return state.offers.pageSize;
};

export const getOfferById = (id: number) =>
    createSelector(getOffersSelector, (offers) =>
        offers.find((offer) => offer.id === id),
    );
