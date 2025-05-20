import { ProductType, ProductTypeEnum } from '../products/productsReducer';
import {
    SelfPickUpType,
    DeliveryType,
} from '../../components/pages/PlacingAnOrder/FilledBlocks/MethodOfReceivingFill/MethodOfReceivingFill';
import { RecipientType } from '../../components/pages/PlacingAnOrder/Recipient/Recipient';
import { InferActionsType } from '../store';
import productImg from './../../assets/card/productDefault.png';

export type OrderProductsInformation = ProductType & { count: number };

const initialState = {
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
            count: 1,
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
            count: 1,
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
            count: 1,
        },
        {
            id: 4,
            title: 'product4',
            img: productImg,
            type: ProductTypeEnum.ELECTRIC_CAR,
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
            type: ProductTypeEnum.ELECTRIC_CAR,
            grade: 2,
            price: 1000,
            commentsCount: 12,
            promotionPercent: 20,
            statusList: ['Новинка'],
            count: 1,
        },
    ] as OrderProductsInformation[],
    receivingMethod: {} as SelfPickUpType | DeliveryType,
    // FIXME: Создать отдельный тип
    payMethod: '',
    recipient: {} as RecipientType,
};

type InitialStateType = typeof initialState;
export type ActionsType = InferActionsType<typeof actions>;

export const orderReducer = (
    state = initialState,
    action: ActionsType,
): InitialStateType => {
    switch (action.type) {
        case 'electronic-store/order/SET_PRODUCTS':
            return {
                ...state,
                products: action.payload.products,
            };
        case 'electronic-store/order/DELETE_PRODUCT': {
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.payload.id,
                ),
            };
        }
        case 'electronic-store/order/INCREASE_PRODUCT': {
            debugger;
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, count: product.count + 1 }
                        : product,
                ),
            };
        }
        case 'electronic-store/order/DESCREASE_PRODUCT': {
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? { ...product, count: product.count - 1 }
                        : product,
                ),
            };
        }
        case 'electronic-store/order/SET_RECEIVING_METHOD':
            return {
                ...state,
                receivingMethod: action.payload.receivingMethod,
            };
        case 'electronic-store/order/SET_PAY_METHOD':
            return {
                ...state,
                payMethod: action.payload.payMethod,
            };
        case 'electronic-store/order/SET_RECIPIENT':
            return {
                ...state,
                recipient: action.payload.recipient,
            };
        default:
            return state;
    }
};

export const actions = {
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
    setReceivingMethod: (receivingMethod: SelfPickUpType | DeliveryType) =>
        ({
            type: 'electronic-store/order/SET_RECEIVING_METHOD',
            payload: { receivingMethod },
        }) as const,
    setPayMethod: (payMethod: string) =>
        ({
            type: 'electronic-store/order/SET_PAY_METHOD',
            payload: { payMethod },
        }) as const,
    setRecipient: (recipient: RecipientType) =>
        ({
            type: 'electronic-store/order/SET_RECIPIENT',
            payload: { recipient },
        }) as const,
};
