import { DefaultResponse, instance } from './api';
import { Product } from './productsAPI';

export type OrderProductsInformation = Product & { count: number };

enum OrderStatus {
    CREATED = 'Создан',
    ACCEPTED_FOR_PROCESSING = 'Принят в обработку',
    IS_GOING_TO = 'Собирается',
    ACCEPTED_FOR_DELIVERY = 'Принят в доставку',
    IS_DELIVERED = 'Доставляется',
    DELIVERED = 'Доставлен',
    COMPLETED = 'Выполнен',
}

export type OrderStage = {
    date: Date;
    status: OrderStatus;
};

export type SelfPickUp = {
    method: 'Самовывоз';
    addressSelfPickUp: string;
    workingTime: string;
};

export type Delivery = {
    method: 'Доставка';
    date: string;
    addressDelivery: string;
    apartament: string;
    time: string;
    comment?: string;
};

export type PayMethod = 'Картой' | 'Наличными';

export type Recipient = {
    name: string;
    surname: string;
    phone: string;
    email: string;
    agree: boolean;
};

export type Order = {
    id: number;
    date: Date;
    history: OrderStage[];
    products: Product[];
};

export type CurrentOrder = {
    products: OrderProductsInformation[];
    receivingMethod: SelfPickUp | Delivery;
    city: string;
    payMethod: PayMethod;
    recipient: Recipient;
};

export type OrdersResponse = DefaultResponse & { orders: Order[] };

export const orderAPI = {
    async getOrders(userId: number) {
        const response = await instance.get<OrdersResponse>(`/orders/${userId}`);
        return response.data;
    },

    async postOrder(usersId: number, order: any) {
        const response = await instance.post<DefaultResponse>(
            `/orders/${usersId}`,
            { order },
        );
        return response.data;
    },
};
