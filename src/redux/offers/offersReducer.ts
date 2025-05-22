import { Offer, SelectedOffer } from '../../api/offersAPI';
import { InferActions } from '../store';
import offer1 from './../../assets/offer_card/offer_1.png';
import offer2 from './../../assets/offer_card/offer_2.png';
import offer3 from './../../assets/offer_card/offer_3.png';
import offer4 from './../../assets/offer_card/offer_4.png';

const initialState = {
    offers: [
        { id: 1, title: 'Сигвеи до 30% на сигвеи', img: offer1 },
        { id: 2, title: 'Неделя смарт часов', img: offer2 },
        { id: 3, title: 'Распродажа до -50%', img: offer3 },
        {
            id: 4,
            title: 'Smart Balance Premium по специальной цене',
            img: offer4,
        },
    ] as Offer[],
    selectedOffer: {
        id: 1,
        title: 'Offer',
        html: `
            <абзац>
                Приобретение Электротранспорта, Smart-Техники и мелкой бытовой техники влечет за собой большие денежные траты. Сеть магазинов Смарт-маркт предлагает покупателям широкий ассортимент товаров по Самым доступным ценам в России. Чтобы шоппинг стал наиболее выгодным, руководство компании разработало уникальную программу лояльности для Именинников.
            </абзац>
            <заголовок>
                Скидка в ДЕНЬ РОЖДЕНИЯ (неделя до/после)
            </заголовок>
            <нумСписок>
                <пункт>
                    Скидку можно получить при предъявлении любого удостоверения подтверждающего, что у клиента День Рождения.
                </пункт>
                <пункт>
                    Скидка действует за неделю до дня рождения включительно и неделю после дня рождения включительно
                </пункт>
                <пункт>
                    Скидка составляет 10% от стоимости основного товара, н оне должна превышать номинал в 1000 рублей.
                </пункт>
                <пункт>
                    Скидки не суммируются т.к. мы разрабатываем для Вас наилучшие условия для покупки Техники
                </пункт>
                <пункт>
                    Если срок Менее 7 дней до Дня Рождения или более 7 дней после Дня Рождения скидка оговаривается в индивидуальном порядке и может достигать Максимальных значений
                </пункт>
            </нумСписок>
        `,
        img: offer1,
    } as SelectedOffer,
    currentPage: 0,
    pageSize: 0,
};

type InitialState = typeof initialState;

export const offersReducer = (
    state = initialState,
    action: Actions,
): InitialState => {
    switch (action.type) {
        case 'electronics-store/offers/SET_OFFERS':
            return {
                ...state,
                offers: action.payload.offers,
            };
        case 'electronics-store/offers/SET_SELECTED_OFFER':
            return {
                ...state,
                selectedOffer: action.payload.offer,
            };
        case 'electronics-store/offers/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload.currentPage,
            };
        case 'electronics-store/offers/SET_PAGE_SIZE':
            return {
                ...state,
                pageSize: action.payload.pageSize,
            };
        default:
            return state;
    }
};

export const actions = {
    setOffers: (offers: Offer[]) =>
        ({
            type: 'electronics-store/offers/SET_OFFERS',
            payload: { offers },
        }) as const,

    setSelectedOffer: (offer: SelectedOffer) =>
        ({
            type: 'electronics-store/offers/SET_SELECTED_OFFER',
            payload: { offer },
        }) as const,

    setCurrentPage: (currentPage: number) =>
        ({
            type: 'electronics-store/offers/SET_CURRENT_PAGE',
            payload: { currentPage },
        }) as const,

    setPageSize: (pageSize: number) =>
        ({
            type: 'electronics-store/offers/SET_PAGE_SIZE',
            payload: { pageSize },
        }) as const,
};

export type Actions = InferActions<typeof actions>;
