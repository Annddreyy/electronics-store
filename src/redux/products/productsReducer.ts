import { InferActionsType } from '../store';
import productImg from './../../assets/productDefault.png';

export enum ProductTypeEnum {
    GYRO_SCOOTER = 'Гироскутер',
    ELECTRIC_SCOOTER = 'Электросамокат',
    UNICYCLE = 'Моноколесо',
    SEGWAY = 'Сигвей',
    ELECTRO_SCOOTER = 'Электроскутер',
    ELECTRIC_BICYCLE = 'Электровелосипеды',
    ELECTRO_SKATEBOARD = 'Электроскейт',
    ELECTRIC_CAR = 'Электромобили',
    ACCESSORIES = 'Аксессуары',
    SMART_TOYS = 'Умные игрушки',
    SMART_WATCH = 'Умные часы',
}

export type StatusType = 'Новинка' | 'Хит продаж';

export type ProductType = {
    id: number;
    title: string;
    img: string;
    type: ProductTypeEnum;
    grade: 0 | 1 | 2 | 3 | 4 | 5;
    price: number;
    commentsCount: number;
    promotionPercent?: number;
    statusList?: StatusType[];
};

const initialState: {
    products: ProductType[];
} = {
    products: [
        {
            id: 1,
            title: 'product1',
            img: productImg,
            type: ProductTypeEnum.ACCESSORIES,
            grade: 2,
            price: 1000,
            commentsCount: 12,
            promotionPercent: 30,
            statusList: ['Новинка'],
        },
        {
            id: 2,
            title: 'product2',
            img: productImg,
            type: ProductTypeEnum.ELECTRIC_BICYCLE,
            grade: 2,
            price: 1000,
            commentsCount: 12,
            promotionPercent: 20,
            statusList: ['Новинка', 'Хит продаж'],
        },
        {
            id: 3,
            title: 'product3',
            img: productImg,
            type: ProductTypeEnum.ELECTRIC_CAR,
            grade: 2,
            price: 1000,
            commentsCount: 12,
            promotionPercent: 20,
            statusList: ['Новинка'],
        },
        {
            id: 4,
            title: 'product4',
            img: productImg,
            type: ProductTypeEnum.SEGWAY,
            grade: 2,
            price: 1000,
            commentsCount: 12,
            promotionPercent: 20,
            statusList: ['Новинка'],
        },
        {
            id: 5,
            title: 'product5',
            img: productImg,
            type: ProductTypeEnum.SEGWAY,
            grade: 2,
            price: 1000,
            commentsCount: 12,
            promotionPercent: 20,
            statusList: ['Новинка'],
        },
        {
            id: 6,
            title: 'product6',
            img: productImg,
            type: ProductTypeEnum.SEGWAY,
            grade: 2,
            price: 1000,
            commentsCount: 12,
            promotionPercent: 20,
        },
        {
            id: 7,
            title: 'product7',
            img: productImg,
            type: ProductTypeEnum.SEGWAY,
            grade: 2,
            price: 1000,
            commentsCount: 12,
        },
        {
            id: 8,
            title: 'product8',
            img: productImg,
            type: ProductTypeEnum.SEGWAY,
            grade: 2,
            price: 1000,
            commentsCount: 12,
            promotionPercent: 20,
            statusList: ['Хит продаж'],
        },
        {
            id: 9,
            title: 'product9',
            img: productImg,
            type: ProductTypeEnum.SEGWAY,
            grade: 2,
            price: 1000,
            commentsCount: 13,
            promotionPercent: 20,
        },
    ],
};

export type InitialStateType = typeof initialState;

export const productsReducer = (
    state = initialState,
    action: ActionTypes,
): InitialStateType => {
    return state;
};

export const actions = {};

export type ActionTypes = InferActionsType<typeof actions>;
