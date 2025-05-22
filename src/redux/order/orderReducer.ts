import {
    CurrentOrder,
    Delivery,
    Order,
    PayMethod,
    Recipient,
    SelfPickUp,
} from '../../api/orderAPI';
import { Product, ProductTypes } from '../../api/productsAPI';
import { RecipientType } from '../../components/pages/PlacingAnOrder/Recipient/Recipient';
import { InferActionsType } from '../store';
import productImg from './../../assets/card/productDefault.png';

export type OrderProductsInformation = Product & { count: number };

const initialState = {
    orders: [] as Order[],
    currentOrder: {
        products: [
            {
                id: 1,
                title: 'product1',
                img: productImg,
                type: ProductTypes.ACCESSORIES,
                grade: 2,
                price: 1000,
                commentsCount: 12,
                promotionPercent: 30,
                statusList: ['Новинка'],
                count: 1,
            },
            {
                id: 2,
                title: 'product2',
                img: productImg,
                type: ProductTypes.ELECTRIC_BICYCLE,
                grade: 2,
                price: 1000,
                commentsCount: 12,
                promotionPercent: 20,
                statusList: ['Новинка', 'Хит продаж'],
                count: 1,
            },
            {
                id: 3,
                title: 'product3',
                img: productImg,
                type: ProductTypes.ELECTRIC_CAR,
                grade: 2,
                price: 1000,
                commentsCount: 12,
                promotionPercent: 20,
                statusList: ['Новинка'],
                count: 1,
            },
            {
                id: 4,
                title: 'product4',
                img: productImg,
                type: ProductTypes.ELECTRIC_CAR,
                grade: 2,
                price: 1000,
                commentsCount: 12,
                promotionPercent: 20,
                statusList: ['Новинка'],
                count: 1,
            },
            {
                id: 5,
                title: 'product5',
                img: productImg,
                type: ProductTypes.ELECTRIC_CAR,
                grade: 2,
                price: 1000,
                commentsCount: 12,
                promotionPercent: 20,
                statusList: ['Новинка'],
                count: 1,
            },
        ] as OrderProductsInformation[],
        receivingMethod: {} as Recipient | SelfPickUp,
        city: '',
        payMethod: '' as PayMethod,
        recipient: {} as Recipient,
    } as CurrentOrder,
    isCompleted: false,
};

type InitialState = typeof initialState;
export type Actions = InferActionsType<typeof actions>;

export const orderReducer = (
    state = initialState,
    action: Actions,
): InitialState => {
    switch (action.type) {
        case 'electronic-store/order/SET_ORDERS':
            return {
                ...state,
                orders: action.payload.orders,
            };
        case 'electronic-store/order/SET_PRODUCTS':
            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    products: action.payload.products,
                },
            };
        case 'electronic-store/order/DELETE_PRODUCT':
            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    products: state.currentOrder.products.filter(
                        (product) => product.id !== action.payload.id,
                    ),
                },
            };
        case 'electronic-store/order/INCREASE_PRODUCT':
            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    products: state.currentOrder.products.map((product) =>
                        product.id === action.payload.id
                            ? { ...product, count: product.count + 1 }
                            : product,
                    ),
                },
            };
        case 'electronic-store/order/DESCREASE_PRODUCT':
            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    products: state.currentOrder.products.map((product) =>
                        product.id === action.payload.id
                            ? { ...product, count: product.count - 1 }
                            : product,
                    ),
                },
            };
        case 'electronic-store/order/SET_RECEIVING_METHOD':
            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    receivingMethod: action.payload.receivingMethod,
                },
            };
        case 'electronic-store/order/SET_PAY_METHOD':
            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    payMethod: action.payload.payMethod,
                },
            };
        case 'electronic-store/order/SET_RECIPIENT':
            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    recipient: action.payload.recipient,
                },
            };
        case 'electronic-store/order/SET_CITY':
            return {
                ...state,
                currentOrder: {
                    ...state.currentOrder,
                    city: action.payload.city,
                },
            };
        case 'electronic-store/order/SET_IS_COMPLETED':
            return {
                ...state,
                isCompleted: true,
            };
        default:
            return state;
    }
};

export const actions = {
    setOrders: (orders: Order[]) =>
        ({
            type: 'electronic-store/order/SET_ORDERS',
            payload: { orders },
        }) as const,
    setProducts: (products: OrderProductsInformation[]) =>
        ({
            type: 'electronic-store/order/SET_PRODUCTS',
            payload: { products },
        }) as const,
    deleteProduct: (id: number) =>
        ({
            type: 'electronic-store/order/DELETE_PRODUCT',
            payload: { id },
        }) as const,

    increaseProduct: (id: number) =>
        ({
            type: 'electronic-store/order/INCREASE_PRODUCT',
            payload: { id },
        }) as const,
    decreaseProduct: (id: number) =>
        ({
            type: 'electronic-store/order/DESCREASE_PRODUCT',
            payload: { id },
        }) as const,

    setReceivingMethod: (receivingMethod: SelfPickUp | Delivery) =>
        ({
            type: 'electronic-store/order/SET_RECEIVING_METHOD',
            payload: { receivingMethod },
        }) as const,
    setPayMethod: (payMethod: PayMethod) =>
        ({
            type: 'electronic-store/order/SET_PAY_METHOD',
            payload: { payMethod },
        }) as const,
    setRecipient: (recipient: RecipientType) =>
        ({
            type: 'electronic-store/order/SET_RECIPIENT',
            payload: { recipient },
        }) as const,
    setCity: (city: string) =>
        ({
            type: 'electronic-store/order/SET_CITY',
            payload: { city },
        }) as const,

    setIsCompleted: () =>
        ({ type: 'electronic-store/order/SET_IS_COMPLETED' }) as const,
};
