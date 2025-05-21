import { GradeType } from '../../types';
import { InferActionsType } from '../store';
import productImg from './../../assets/card/productDefault.png';

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
    grade: GradeType;
    price: number;
    commentsCount: number;
    promotionPercent?: number;
    statusList?: StatusType[];
};

export type CharacteristicType = string | number | boolean | null;
export type CharacteristicsType = Record<string, CharacteristicType>;

export type ReviewType = {
    id: number;
    img: string | null;
    author: string;
    date: Date;
    grade: GradeType;
    title: string;
    text: string;
};

export type SelectedProductType = ProductType & {
    description: string;
    characteristics: CharacteristicsType;
    reviews: ReviewType[];
    images: string[];
    descriptionTabTitle: `Описание ${string}`;
    characteristicsTabTitle: `Характеристики ${string}`;
    reviewsTabTitle: `Отзывы на ${string}`;
};

export type CompareProductType = ProductType & {
    characteristics: CharacteristicsType;
};

const initialState: {
    products: ProductType[];
    viewed: Map<number, ProductType>;
    favorite: Map<number, ProductType>;
    compare: CompareProductType[];
    selectedProduct: SelectedProductType;
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
    viewed: new Map<number, ProductType>([
        [
            1,
            {
                id: 1,
                title: 'product1',
                img: productImg,
                type: ProductTypeEnum.ACCESSORIES,
                grade: 4,
                price: 1300,
                commentsCount: 12,
                promotionPercent: 30,
                statusList: ['Новинка'],
            },
        ],
        [
            2,
            {
                id: 2,
                title: 'product2',
                img: productImg,
                type: ProductTypeEnum.ELECTRIC_BICYCLE,
                grade: 2,
                price: 1500,
                commentsCount: 12,
                promotionPercent: 20,
                statusList: ['Новинка', 'Хит продаж'],
            },
        ],
        [
            3,
            {
                id: 3,
                title: 'product3',
                img: productImg,
                type: ProductTypeEnum.ELECTRIC_CAR,
                grade: 3,
                price: 1200,
                commentsCount: 12,
                promotionPercent: 20,
                statusList: ['Новинка'],
            },
        ],
    ]),
    favorite: new Map<number, ProductType>([
        [
            1,
            {
                id: 1,
                title: 'product1',
                img: productImg,
                type: ProductTypeEnum.ACCESSORIES,
                grade: 4,
                price: 1300,
                commentsCount: 12,
                promotionPercent: 30,
                statusList: ['Новинка'],
            },
        ],
        [
            2,
            {
                id: 2,
                title: 'product2',
                img: productImg,
                type: ProductTypeEnum.ELECTRIC_BICYCLE,
                grade: 2,
                price: 1500,
                commentsCount: 12,
                promotionPercent: 20,
                statusList: ['Новинка', 'Хит продаж'],
            },
        ],
        [
            3,
            {
                id: 3,
                title: 'product3',
                img: productImg,
                type: ProductTypeEnum.ELECTRIC_CAR,
                grade: 3,
                price: 1200,
                commentsCount: 12,
                promotionPercent: 20,
                statusList: ['Новинка'],
            },
        ],
    ]),
    compare: [
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
            characteristics: {
                'Тип:': 'Сигвей',
                'Макс. скорость до (км/ч)': 25,
                'Мощность двигателя': 300,
                'Пробег на одном заряде': 36,
                'Тип переднего тормоза': 'Дисковый маханический',
                'Круиз-контроль': true,
            },
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
            characteristics: {
                'Тип:': 'Сигвей',
                'Макс. скорость до (км/ч)': 25,
                'Мощность двигателя': 300,
                'Пробег на одном заряде': 36,
                'Тип переднего тормоза': 'Дисковый маханический',
                'Круиз-контроль': true,
            },
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
            characteristics: {
                'Тип:': 'Сигвей',
                'Макс. скорость до (км/ч)': 25,
                'Мощность двигателя': 350,
                'Пробег на одном заряде': 36,
                'Тип переднего тормоза': 'Дисковый маханический',
                'Круиз-контроль': true,
            },
        },
        {
            id: 4,
            title: 'product4',
            img: productImg,
            type: ProductTypeEnum.ACCESSORIES,
            grade: 2,
            price: 1000,
            commentsCount: 12,
            promotionPercent: 30,
            statusList: ['Новинка'],
            characteristics: {
                'Тип:': 'Сигвей',
                'Макс. скорость до (км/ч)': 25,
                'Мощность двигателя': 500,
                'Пробег на одном заряде': 36,
                'Тип переднего тормоза': 'Дисковый маханический',
                'Круиз-контроль': true,
            },
        },
        {
            id: 5,
            title: 'product5',
            img: productImg,
            type: ProductTypeEnum.ELECTRIC_BICYCLE,
            grade: 2,
            price: 1000,
            commentsCount: 12,
            promotionPercent: 20,
            statusList: ['Новинка', 'Хит продаж'],
            characteristics: {
                'Тип:': 'Сигвей',
                'Макс. скорость до (км/ч)': 25,
                'Мощность двигателя': 700,
                'Пробег на одном заряде': 36,
                'Тип переднего тормоза': 'Дисковый маханический',
                'Круиз-контроль': true,
            },
        },
        {
            id: 6,
            title: 'product6',
            img: productImg,
            type: ProductTypeEnum.ELECTRIC_CAR,
            grade: 2,
            price: 1000,
            commentsCount: 12,
            promotionPercent: 20,
            statusList: ['Новинка'],
            characteristics: {
                'Тип:': 'Сигвей',
                'Макс. скорость до (км/ч)': 25,
                'Мощность двигателя': 850,
                'Пробег на одном заряде': 36,
                'Тип переднего тормоза': 'Дисковый маханический',
                'Круиз-контроль': true,
            },
        },
    ],
    selectedProduct: {
        id: 1,
        title: 'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
        img: productImg,
        type: ProductTypeEnum.GYRO_SCOOTER,
        grade: 3,
        price: 12000,
        commentsCount: 3,
        promotionPercent: 20,
        statusList: ['Новинка'],
        descriptionTabTitle: 'Описание гироскутера Smart Balance Well 6.5',
        characteristicsTabTitle:
            'Характеристики гироскутера Smart Balance Well 6.5',
        reviewsTabTitle: 'Отзывы на гироскутер Smart Balance Well 6.5',
        images: [productImg, productImg, productImg],
        reviews: [
            {
                id: 1,
                img: null,
                author: 'Андрей',
                date: new Date(2025, 4, 12),
                grade: 3,
                title: 'Очень хороший товар!',
                text: 'Товар оченб высокого качества',
            },
            {
                id: 2,
                img: null,
                author: 'Андрей',
                date: new Date(2025, 4, 12),
                grade: 3,
                title: 'Очень хороший товар!',
                text: 'Товар оченб высокого качества',
            },
            {
                id: 3,
                img: null,
                author: 'Андрей',
                date: new Date(2025, 4, 12),
                grade: 3,
                title: 'Очень хороший товар!',
                text: 'Товар оченб высокого качества',
            },
            {
                id: 4,
                img: null,
                author: 'Андрей',
                date: new Date(2025, 4, 12),
                grade: 3,
                title: 'Очень хороший товар!',
                text: 'Товар оченб высокого качества',
            },
            {
                id: 5,
                img: null,
                author: 'Андрей',
                date: new Date(2025, 4, 12),
                grade: 3,
                title: 'Очень хороший товар!',
                text: 'Товар оченб высокого качества',
            },
            {
                id: 6,
                img: null,
                author: 'Андрей',
                date: new Date(2025, 4, 12),
                grade: 3,
                title: 'Очень хороший товар!',
                text: 'Товар оченб высокого качества',
            },
        ],
        description: `
            <абзац>
                Вопрос безопасности всегда стоит очень остро, в этом году производители решили его следующим образом — снабдили модель качественной задней и передней подсветкой, поэтому пользователь может не переживать о том, что его будет незаметно на дороге в тёмное время суток.
            </абзац>
            <абзац>
                На руле имеется яркий качественный дисплей, где отображается вся актуальная и необходимая информация — скорость, пробег и др. Кроме того, на руле имеется кнопка включения и выключения подсветки, звуковой сигнал и кнопка настроек. Таким образом, все необходимое для управления самокатом находится у пользователя под рукой.
            </абзац>
            <абзац>
                Для комфорта прогулок электросамокат снабжён передним и задним амортизаторами. Вы можете перемещаться не только по ровному городскому асфальту, но и по неровностям, которые не затруднят ваше перемещение.
            </абзац>
            <абзац>
                Складной механизм и небольшой вес (11 кг) делают модель эргономичной. В сложенном виде самокат занимает совсем мало места — его легко перевозить как в багажнике машины, так и в общественном транспорте. При складывании самокат фиксируется с помощью крючка к заднему крылу. А для того, чтобы разложить его, необходимо, нажав на заднее крыло, приподнять руль. Характерный щелчок говорит о том, что самокат разложен полностью и готов к эксплуатации.
            </абзац>
            <абзац>
                Стоит отметить, что электросамокат очень быстро стартует — вам не надо отталкиваться или разгоняться. Выдерживает до 120 кг, в процессе изготовления использовались только качественные материалы.
            </абзац>
            <абзац>
                Быстрый, лёгкий, компактный — прекрасный выбор для ценителей удобства!
            </абзац>
        `,
        characteristics: {
            'Тип:': null,
            'Макс. скорость до (км/ч)': 25,
            'Мощность двигателя': 300,
            'Пробег на одном заряде': 36,
            'Тип переднего тормоза': 'Дисковый маханический',
            'Круиз-контроль': true,
        },
    },
};

export type InitialStateType = typeof initialState;

export const productsReducer = (
    state = initialState,
    action: ActionTypes,
): InitialStateType => {
    switch (action.type) {
        case 'electronics-store/products/SET_VIEWED_PRODUCT':
            return {
                ...state,
                viewed: state.viewed.set(
                    action.payload.product.id,
                    action.payload.product,
                ),
            };
        case 'electronics-store/products/SET_FAVORITE_PRODUCT':
            return {
                ...state,
                favorite: state.favorite.set(
                    action.payload.product.id,
                    action.payload.product,
                ),
            };
        case 'electronics-store/products/DELETE_FAVORITE_PRODUCT':
            const newFavorite = state.favorite;
            newFavorite.delete(action.payload.product.id);
            return {
                ...state,
                favorite: newFavorite,
            };
        default:
            return state;
    }
};

export const actions = {
    setViewedProduct: (product: ProductType) =>
        ({
            type: 'electronics-store/products/SET_VIEWED_PRODUCT',
            payload: { product },
        }) as const,
    setFavoriteProduct: (product: ProductType) =>
        ({
            type: 'electronics-store/products/SET_FAVORITE_PRODUCT',
            payload: { product },
        }) as const,
    deleteFavoriteProduct: (product: ProductType) =>
        ({
            type: 'electronics-store/products/DELETE_FAVORITE_PRODUCT',
            payload: { product },
        }) as const,
};

export type ActionTypes = InferActionsType<typeof actions>;
