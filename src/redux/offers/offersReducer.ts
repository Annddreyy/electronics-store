import offer1 from './../../assets/offer_card/offer_1.png';
import offer2 from './../../assets/offer_card/offer_2.png';
import offer3 from './../../assets/offer_card/offer_3.png';
import offer4 from './../../assets/offer_card/offer_4.png';

export type OfferType = {
    id: number;
    title: string;
    img: string;
};

const initialState: {
    offers: OfferType[];
} = {
    offers: [
        { id: 1, title: 'Сигвеи до 30% на сигвеи', img: offer1 },
        { id: 2, title: 'Неделя смарт часов', img: offer2 },
        { id: 3, title: 'Распродажа до -50%', img: offer3 },
        {
            id: 4,
            title: 'Smart Balance Premium по специальной цене',
            img: offer4,
        },
    ],
};

type InitialStateType = typeof initialState;

export const offersReducer = (
    state = initialState,
    action: any,
): InitialStateType => {
    return state;
};
