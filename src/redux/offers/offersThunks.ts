import { ResponseStatuses } from '../../api/api';
import { offersAPI, SelectedOffer } from '../../api/offersAPI';
import { BaseThunkType } from '../store';
import { actions, Actions } from './offersReducer';

export const getOffers =
    (page = 1, pageSize = 1): BaseThunkType<Actions> =>
    async (dispatch) => {
        const response = await offersAPI.getOffers(page, pageSize);
        if (response.status === ResponseStatuses.OK) {
            dispatch(actions.setOffers(response.offers));
        } else {
            console.error('При получении акций произошла ошибка');
        }
    };

export const getSelectedOffer =
    (offerId: number): BaseThunkType<Actions> =>
    async (dispatch) => {
        const response = await offersAPI.getSelectedOffer(offerId);
        if (response.status === ResponseStatuses.OK) {
            dispatch(actions.setSelectedOffer(response.selectedOffer));
        } else {
            console.error(
                'При получении информации об акции произошла ошибка!',
            );
        }
    };

export const postOffer =
    (offer: SelectedOffer): BaseThunkType<Actions> =>
    async (dispatch) => {
        const response = await offersAPI.postOffer(offer);
        if (response.status === ResponseStatuses.OK) {
            console.log('Успешно');
        } else {
            console.log('Ошибка!');
        }
    };
