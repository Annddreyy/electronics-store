import { PaymentMethods, ReceivingMethods } from '../../../api/orderAPI';
import {
    actions,
    authReducer,
    InitialState,
} from '../../../redux/auth/authReducer';

const initialState: InitialState = {
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

    payMethod: undefined,
    receivingMethod: undefined,
};

describe('check auth reducer', () => {
    it('check set user', () => {
        const action = actions.setUser({
            email: 'andrey@mail.ru',
            name: 'Andrey',
            phone: '+7(999)999-99-00',

            dateOfRegistration: new Date(2025, 3, 12),
            ordersCount: 12,
            avatar: 'img',

            city: 'Penza',
            address: 'Penza',
            index: 123456,

            payMethod: PaymentMethods.CARD,
            receivingMethod: ReceivingMethods.DELIVERY,
        });

        const newState = authReducer(initialState, action);

        expect(newState.email).toBe('andrey@mail.ru');
        expect(newState.name).toBe('Andrey');
        expect(newState.phone).toBe('+7(999)999-99-00');

        expect(newState.dateOfRegistration).toStrictEqual(
            new Date(2025, 3, 12),
        );
        expect(newState.ordersCount).toBe(12);
        expect(newState.avatar).toBe('img');

        expect(newState.city).toBe('Penza');
        expect(newState.address).toBe('Penza');
        expect(newState.index).toBe(123456);

        expect(newState.payMethod).toBe(PaymentMethods.CARD);
        expect(newState.receivingMethod).toBe(ReceivingMethods.DELIVERY);
    });

    it('check logout user', () => {
        const action = actions.logout();
        const newState = authReducer(initialState, action);

        expect(newState.isAuth).toBe(false);

        expect(newState.email).toBe('');
        expect(newState.phone).toBe('');
        expect(newState.name).toBe('');

        expect(newState.ordersCount).toBe(0);

        expect(newState.avatar).toBeUndefined();
        expect(newState.city).toBeUndefined();
        expect(newState.address).toBeUndefined();
        expect(newState.index).toBeUndefined();

        expect(newState.payMethod).toBe('');
        expect(newState.receivingMethod).toBe('');
    });
});
