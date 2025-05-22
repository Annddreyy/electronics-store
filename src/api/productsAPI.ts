import { DefaultResponse, instance } from './api';

export enum ProductTypes {
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
export type Status = 'Новинка' | 'Хит продаж';
export type Grade = 0 | 1 | 2 | 3 | 4 | 5;
export type Characteristic = string | number | boolean | null;
export type Characteristics = Record<string, Characteristic>;

export type Review = {
    id: number;
    img: string | null;
    author: string;
    date: Date;
    grade: Grade;
    title: string;
    text: string;
};

export type Product = {
    id: number;
    title: string;
    img: string;
    type: ProductTypes;
    grade: Grade;
    price: number;
    commentsCount: number;
    promotionPercent?: number;
    statusList?: Status[];
};

export type SelectedProduct = Product & {
    description: string;
    characteristics: Characteristics;
    reviews: Review[];
    images: string[];
    descriptionTabTitle: `Описание ${string}`;
    characteristicsTabTitle: `Характеристики ${string}`;
    reviewsTabTitle: `Отзывы на ${string}`;
};

export type CompareProduct = Product & {
    characteristics: Characteristics;
};

export type ProductsResponse = DefaultResponse & { products: Product[] };
export type ProductResponse = DefaultResponse & { product: SelectedProduct };
export type FavoriteResponse = DefaultResponse & { products: Product[] };
export type ViewedResponse = DefaultResponse & { products: Product[] };
export type CompareResponse = DefaultResponse & { products: CompareProduct[] };

export const productsAPI = {
    async getProducts(page: number, pageSize: number) {
        const response = await instance.get<ProductsResponse>(
            `/products?page=${page}&page_size=${pageSize}`,
        );
        return response.data;
    },

    async getSelectedProduct(productId: number) {
        const response = await instance.get<ProductResponse>(
            `/products/${productId}`,
        );
        return response.data;
    },

    async getFavoriteProducts(userId: number) {
        const response = await instance.get<FavoriteResponse>(
            `/products/favorite/${userId}`,
        );
        return response.data;
    },

    async getViewedProducts(userId: number) {
        const response = await instance.get<ViewedResponse>(
            `/products/viewed/${userId}`,
        );
        return response.data;
    },

    async getCompareProducts(userId: number) {
        const response = await instance.get<CompareResponse>(
            `/products/compare/${userId}`,
        );
        return response.data;
    },

    async postProduct(product: Product) {
        const response = await instance.post<DefaultResponse>(
            '/product',
            product,
        );
        return response.data;
    },

    async postFavoriteProduct(productId: number, userId: number) {
        const response = await instance.post<DefaultResponse>(
            `/products/favorite/${userId}`,
            { productId },
        );
        return response.data;
    },

    async postCompareProduct(productId: number, userId: number) {
        const response = await instance.post<DefaultResponse>(
            `/products/compare/${userId}`,
            { productId },
        );
        return response.data;
    },

    async postViewedProduct(productId: number, userId: number) {
        const response = await instance.post<DefaultResponse>(
            `/products/viewed/${userId}`,
            { productId },
        );
        return response.data;
    },
};
