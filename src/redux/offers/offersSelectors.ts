import { createSelector } from 'reselect';
import { AppStateType } from '../store';

export const getOffersSelector = (state: AppStateType) => {
    return state.offers.offers;
};

export const getOfferById = (id: number) =>
    createSelector(getOffersSelector, (offers) =>
        offers.find((offer) => offer.id === id),
    );
