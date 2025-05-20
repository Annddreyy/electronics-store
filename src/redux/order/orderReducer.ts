import { ProductType } from '../products/productsReducer';
import {
    SelfPickUpType,
    DeliveryType,
} from '../../components/pages/PlacingAnOrder/FilledBlocks/MethodOfReceivingFill/MethodOfReceivingFill';
import { RecipientType } from '../../components/pages/PlacingAnOrder/Recipient/Recipient';
import { InferActionsType } from '../store';
type ProductsInformation = [ProductType, number];

const initialState = {
    products: [] as ProductsInformation[],
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
                ...initialState,
                products: action.payload.products,
            };
        case 'electronic-store/order/SET_RECEIVING_METHOD':
            return {
                ...initialState,
                receivingMethod: action.payload.receivingMethod,
            };
        case 'electronic-store/order/SET_PAY_METHOD':
            return {
                ...initialState,
                payMethod: action.payload.payMethod,
            };
        case 'electronic-store/order/SET_RECIPIENT':
            return {
                ...initialState,
                recipient: action.payload.recipient,
            };
        default:
            return state;
    }
};

export const actions = {
    setProducts: (products: ProductsInformation[]) =>
        ({
            type: 'electronic-store/order/SET_PRODUCTS',
            payload: { products },
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
