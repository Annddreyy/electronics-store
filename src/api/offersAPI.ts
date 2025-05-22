import { DefaultResponse, instance } from './api';

export type Offer = {
    id: number;
    title: string;
    img: string;
};

export type SelectedOffer = {
    id: number;
    title: string;
    html: string;
    img: string;
};

export type OfferResponse = DefaultResponse & { offers: Offer[] };
export type SelectedOfferResponse = DefaultResponse & {
    selectedOffer: SelectedOffer;
};

export const offersAPI = {
    async getOffers(page: number, pageSize: number) {
        const response = await instance.get<OfferResponse>(
            `/offers?page=${page}&page_size=${pageSize}`,
        );
        return response.data;
    },

    async getSelectedOffer(offerId: number) {
        const response = await instance.get<SelectedOfferResponse>(
            `/offers/${offerId}`,
        );
        return response.data;
    },

    async postOffer(offer: SelectedOffer) {
        const response = await instance.post<DefaultResponse>(`/offers`, {
            offer,
        });
        return response.data;
    },
};
