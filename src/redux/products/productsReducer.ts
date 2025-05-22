import {
    CompareProduct,
    Product,
    ProductTypes,
    SelectedProduct,
} from '../../api/productsAPI';
import { InferActionsType } from '../store';
import productImg from './../../assets/card/productDefault.png';

const initialState = {
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
        },
        {
            id: 4,
            title: 'product4',
            img: productImg,
            type: ProductTypes.SEGWAY,
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
            type: ProductTypes.SEGWAY,
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
            type: ProductTypes.SEGWAY,
            grade: 2,
            price: 1000,
            commentsCount: 12,
            promotionPercent: 20,
        },
        {
            id: 7,
            title: 'product7',
            img: productImg,
            type: ProductTypes.SEGWAY,
            grade: 2,
            price: 1000,
            commentsCount: 12,
        },
        {
            id: 8,
            title: 'product8',
            img: productImg,
            type: ProductTypes.SEGWAY,
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
            type: ProductTypes.SEGWAY,
            grade: 2,
            price: 1000,
            commentsCount: 13,
            promotionPercent: 20,
        },
    ] as Product[],
    viewed: new Map<number, Product>([
        [
            1,
            {
                id: 1,
                title: 'product1',
                img: productImg,
                type: ProductTypes.ACCESSORIES,
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
                type: ProductTypes.ELECTRIC_BICYCLE,
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
                type: ProductTypes.ELECTRIC_CAR,
                grade: 3,
                price: 1200,
                commentsCount: 12,
                promotionPercent: 20,
                statusList: ['Новинка'],
            },
        ],
    ]),
    favorite: new Map<number, Product>([
        [
            1,
            {
                id: 1,
                title: 'product1',
                img: productImg,
                type: ProductTypes.ACCESSORIES,
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
                type: ProductTypes.ELECTRIC_BICYCLE,
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
                type: ProductTypes.ELECTRIC_CAR,
                grade: 3,
                price: 1200,
                commentsCount: 12,
                promotionPercent: 20,
                statusList: ['Новинка'],
            },
        ],
    ]),
    compare: new Map<number, CompareProduct>([
        [
            1,
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
                characteristics: {
                    'Тип:': 'Сигвей',
                    'Макс. скорость до (км/ч)': 25,
                    'Мощность двигателя': 300,
                    'Пробег на одном заряде': 36,
                    'Тип переднего тормоза': 'Дисковый маханический',
                    'Круиз-контроль': true,
                },
            },
        ],
        [
            2,
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
                characteristics: {
                    'Тип:': 'Сигвей',
                    'Макс. скорость до (км/ч)': 25,
                    'Мощность двигателя': 300,
                    'Пробег на одном заряде': 36,
                    'Тип переднего тормоза': 'Дисковый маханический',
                    'Круиз-контроль': true,
                },
            },
        ],
        [
            3,
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
                characteristics: {
                    'Тип:': 'Сигвей',
                    'Макс. скорость до (км/ч)': 25,
                    'Мощность двигателя': 350,
                    'Пробег на одном заряде': 36,
                    'Тип переднего тормоза': 'Дисковый маханический',
                    'Круиз-контроль': true,
                },
            },
        ],
        [
            4,
            {
                id: 4,
                title: 'product4',
                img: productImg,
                type: ProductTypes.ACCESSORIES,
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
        ],
        [
            5,
            {
                id: 5,
                title: 'product5',
                img: productImg,
                type: ProductTypes.ELECTRIC_BICYCLE,
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
        ],
        [
            6,
            {
                id: 6,
                title: 'product6',
                img: productImg,
                type: ProductTypes.ELECTRIC_CAR,
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
    ]),
    selectedProduct: {
        id: 1,
        title: 'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
        img: productImg,
        type: ProductTypes.GYRO_SCOOTER,
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
    } as SelectedProduct,
    currentPage: 0,
    pageSize: 0,
};

export type InitialState = typeof initialState;

export const productsReducer = (
    state = initialState,
    action: Actions,
): InitialState => {
    switch (action.type) {
        case 'electronics-store/products/SET_PRODUCTS':
            return {
                ...state,
                products: action.payload.products,
            };

        case 'electronics-store/products/SET_SELECTED_PRODUCT':
            return {
                ...state,
                selectedProduct: action.payload.product,
            };

        case 'electronics-store/products/SET_VIEWED_PRODUCTS':
            const viewedMap = new Map<number, Product>(
                action.payload.products.map((product) => [product.id, product]),
            );
            return {
                ...state,
                viewed: viewedMap,
            };

        case 'electronics-store/products/SET_VIEWED_PRODUCT':
            return {
                ...state,
                viewed: state.viewed.set(
                    action.payload.product.id,
                    action.payload.product,
                ),
            };

        case 'electronics-store/products/SET_FAVORITE_PRODUCTS':
            const favoriteMap = new Map<number, Product>(
                action.payload.products.map((product) => [product.id, product]),
            );
            return {
                ...state,
                favorite: favoriteMap,
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

        case 'electronics-store/products/SET_COMPARE_PRODUCTS':
            const compareMap = new Map<number, CompareProduct>(
                action.payload.products.map((product) => [product.id, product]),
            );
            return {
                ...state,
                compare: compareMap,
            };

        case 'electronics-store/products/SET_COMPARE_PRODUCT':
            return {
                ...state,
                compare: state.compare.set(
                    action.payload.product.id,
                    action.payload.product,
                ),
            };

        case 'electronics-store/products/DELETE_COMPARE_PRODUCT':
            const newCompare = state.compare;
            newCompare.delete(action.payload.product.id);
            return {
                ...state,
                compare: newCompare,
            };

        default:
            return state;
    }
};

export const actions = {
    setProducts: (products: Product[]) =>
        ({
            type: 'electronics-store/products/SET_PRODUCTS',
            payload: { products },
        }) as const,

    setSelectedProduct: (product: SelectedProduct) =>
        ({
            type: 'electronics-store/products/SET_SELECTED_PRODUCT',
            payload: { product },
        }) as const,

    setViewedProducts: (products: Product[]) =>
        ({
            type: 'electronics-store/products/SET_VIEWED_PRODUCTS',
            payload: { products },
        }) as const,

    setViewedProduct: (product: Product) =>
        ({
            type: 'electronics-store/products/SET_VIEWED_PRODUCT',
            payload: { product },
        }) as const,

    setFavoriteProducts: (products: Product[]) =>
        ({
            type: 'electronics-store/products/SET_FAVORITE_PRODUCTS',
            payload: { products },
        }) as const,

    setFavoriteProduct: (product: Product) =>
        ({
            type: 'electronics-store/products/SET_FAVORITE_PRODUCT',
            payload: { product },
        }) as const,

    deleteFavoriteProduct: (product: Product) =>
        ({
            type: 'electronics-store/products/DELETE_FAVORITE_PRODUCT',
            payload: { product },
        }) as const,

    setCompareProducts: (products: CompareProduct[]) =>
        ({
            type: 'electronics-store/products/SET_COMPARE_PRODUCTS',
            payload: { products },
        }) as const,

    setCompareProduct: (product: CompareProduct) =>
        ({
            type: 'electronics-store/products/SET_COMPARE_PRODUCT',
            payload: { product },
        }) as const,

    deleteCompareProduct: (product: CompareProduct) =>
        ({
            type: 'electronics-store/products/DELETE_COMPARE_PRODUCT',
            payload: { product },
        }) as const,
};

export type Actions = InferActionsType<typeof actions>;
