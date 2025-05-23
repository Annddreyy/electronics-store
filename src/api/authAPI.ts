import { DefaultResponse, instance } from './api';
import { PaymentMethods, ReceivingMethods } from './orderAPI';

export type User = {
    email: string;
    phone: string;
    name: string;

    dateOfRegistration: Date;
    ordersCount: number;

    avatar: string | undefined;

    city: string | undefined;
    address: string | undefined;
    index: number | undefined;

    payMethod: PaymentMethods | undefined;
    receivingMethod: ReceivingMethods | undefined;
};

export type UserResponse = DefaultResponse & { user: User };

export const authAPI = {
    async auth() {
        const response = await instance.get<UserResponse>('/auth');
        return response.data;
    },

    async login(email: string, password: string, remember: boolean) {
        const response = await instance.post<UserResponse>('/login', {
            email,
            password,
            remember,
        });
        return response.data;
    },

    async logout() {
        const response = await instance.delete<DefaultResponse>('/logout');
        return response.data;
    },
};
