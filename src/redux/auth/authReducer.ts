import { ReceivingMethod, User } from '../../api/authAPI';
import { PayMethod } from '../../api/orderAPI';
import { InferActionsType } from '../store';

const initialState: User & { isAuth: boolean } = {
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

    payMethod: '' as PayMethod,
    receivingMethod: '' as ReceivingMethod,
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
                ...action.payload,
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

                payMethod: '' as PayMethod,
                receivingMethod: '' as ReceivingMethod,
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

export type Actions = InferActionsType<typeof actions>;
