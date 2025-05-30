import { createSelector } from 'reselect';
import { AppState } from '../store';

export const getOffers = (state: AppState) => {
    return state.offers.offers;
};

export const getOneOffer = (state: AppState) => {
    return state.offers.selectedOffer;
};

export const getCurrentPage = (state: AppState) => {
    return state.offers.currentPage;
};

export const getPageSize = (state: AppState) => {
    return state.offers.pageSize;
};

export const getOfferById = (id: number) =>
    createSelector(getOffers, (offers) =>
        offers.find((offer) => offer.id === id),
    );
