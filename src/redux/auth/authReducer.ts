import { User } from '../../api/authAPI';
import { PaymentMethods, ReceivingMethods } from '../../api/orderAPI';
import { InferActions } from '../store';

const initialState: User & { isAuth: boolean } = {
    isAuth: true,

    email: '',
    phone: '',
    name: '',
    dateOfRegistration: new Date(),
    ordersCount: 0,
    avatar: undefined,

    city: undefined,
    address: undefined,
    index: undefined,

    payMethod: '' as PaymentMethods,
    receivingMethod: '' as ReceivingMethods,
};

export type InitialState = typeof initialState;

export const authReducer = (
    state = initialState,
    action: Actions,
): InitialState => {
    switch (action.type) {
        case 'electronics-store/auth/SET_USER':
            return {
                ...state,
                ...action.payload.user,
                isAuth: true,
            };
        case 'elecronics-store/auth/LOGOUT': {
            return {
                ...state,

                isAuth: false,

                email: '',
                phone: '',
                name: '',

                dateOfRegistration: new Date(),
                ordersCount: 0,

                avatar: undefined,
                city: undefined,
                address: undefined,
                index: undefined,

                payMethod: '' as PaymentMethods,
                receivingMethod: '' as ReceivingMethods,
            };
        }
        default:
            return state;
    }
};

export const actions = {
    setUser: (user: User) =>
        ({
            type: 'electronics-store/auth/SET_USER',
            payload: { user },
        }) as const,
    logout: () =>
        ({
            type: 'elecronics-store/auth/LOGOUT',
        }) as const,
};

export type Actions = InferActions<typeof actions>;
