import exp from 'constants';
import {
    CompareProduct,
    Product,
    ProductTypes,
    SelectedProduct,
} from '../../../api/productsAPI';
import {
    actions,
    productsReducer,
} from '../../../redux/products/productsReducer';

const initialState = {
    products: [] as Product[],
    viewed: new Map<number, Product>([]),
    favorite: new Map<number, Product>([]),
    compare: new Map<number, CompareProduct>([]),
    selectedProduct: {} as SelectedProduct,
    currentPage: 0,
    pageSize: 10,
};

describe('test products reducer', () => {
    it('test set products', () => {
        const action = actions.setProducts([
            {
                id: 1,
                title: 'product1',
                img: 'productImg',
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
                img: 'productImg',
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
                img: 'productImg',
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
                img: 'productImg',
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
                img: 'productImg',
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
                img: 'productImg',
                type: ProductTypes.SEGWAY,
                grade: 2,
                price: 1000,
                commentsCount: 12,
                promotionPercent: 20,
            },
            {
                id: 7,
                title: 'product7',
                img: 'productImg',
                type: ProductTypes.SEGWAY,
                grade: 2,
                price: 1000,
                commentsCount: 12,
            },
            {
                id: 8,
                title: 'product8',
                img: 'productImg',
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
                img: 'productImg',
                type: ProductTypes.SEGWAY,
                grade: 2,
                price: 1000,
                commentsCount: 13,
                promotionPercent: 20,
            },
        ]);
        const newState = productsReducer(initialState, action);

        expect(newState.products.length).toBe(9);
    });

    it('test set selected product', () => {
        const action = actions.setSelectedProduct({
            id: 1,
            title: 'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
            img: 'productImg',
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
            images: ['productImg', 'productImg', 'productImg'],
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
        });
        const newState = productsReducer(initialState, action);
        const selectedProduct = newState.selectedProduct;

        expect(selectedProduct.id).toBe(1);
        expect(selectedProduct.title).toBe(
            'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
        );
        expect(selectedProduct.img).toBe('productImg');
        expect(selectedProduct.type).toBe(ProductTypes.GYRO_SCOOTER);
        expect(selectedProduct.grade).toBe(3);
        expect(selectedProduct.price).toBe(12000);
        expect(selectedProduct.commentsCount).toBe(3);
        expect(selectedProduct.promotionPercent).toBe(20);
        expect(selectedProduct.statusList?.length).toBe(1);
        expect(selectedProduct.characteristicsTabTitle).toBe(
            'Характеристики гироскутера Smart Balance Well 6.5',
        );
        expect(selectedProduct.reviewsTabTitle).toBe(
            'Отзывы на гироскутер Smart Balance Well 6.5',
        );
        expect(selectedProduct.images.length).toBe(3);
        expect(Object.keys(selectedProduct.characteristics).length).toBe(6);
        expect(selectedProduct.description).toBe(`
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
        `);
        expect(selectedProduct.reviews.length).toBe(6);
    });

    it('test set viewed products', () => {
        const viewedProducts = new Map<number, Product>([
            [
                1,
                {
                    id: 1,
                    title: 'product1',
                    img: 'productImg',
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
                    img: 'productImg',
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
                    img: 'productImg',
                    type: ProductTypes.ELECTRIC_CAR,
                    grade: 3,
                    price: 1200,
                    commentsCount: 12,
                    promotionPercent: 20,
                    statusList: ['Новинка'],
                },
            ],
        ]);
        const viewedProductsList = Array.from(viewedProducts.values());
        const action = actions.setViewedProducts(viewedProductsList);
        const newState = productsReducer(initialState, action);

        expect(Array.from(newState.viewed.values()).length).toBe(3);
    });

    it('test viewed product', () => {
        const action = actions.setViewedProduct({
            id: 5,
            title: 'product5',
            img: 'productImg',
            type: ProductTypes.ACCESSORIES,
            grade: 4,
            price: 1300,
            commentsCount: 12,
            promotionPercent: 30,
            statusList: ['Новинка'],
        });
        const newState = productsReducer(initialState, action);

        expect(newState.viewed.get(5)?.title).toBe('product5');
    });

    it('test set favorite products', () => {
        const favoriteProducts = new Map<number, Product>([
            [
                1,
                {
                    id: 1,
                    title: 'product1',
                    img: 'productImg',
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
                    img: 'productImg',
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
                    img: 'productImg',
                    type: ProductTypes.ELECTRIC_CAR,
                    grade: 3,
                    price: 1200,
                    commentsCount: 12,
                    promotionPercent: 20,
                    statusList: ['Новинка'],
                },
            ],
        ]);
        const favoriteProductsList = Array.from(favoriteProducts.values());
        const action = actions.setFavoriteProducts(favoriteProductsList);
        const newState = productsReducer(initialState, action);

        expect(Array.from(newState.favorite.values()).length).toBe(3);
    });

    it('test set favorite product', () => {
        const action = actions.setFavoriteProduct({
            id: 5,
            title: 'product5',
            img: 'productImg',
            type: ProductTypes.ACCESSORIES,
            grade: 4,
            price: 1300,
            commentsCount: 12,
            promotionPercent: 30,
            statusList: ['Новинка'],
        });
        const newState = productsReducer(initialState, action);

        expect(newState.favorite.get(5)?.title).toBe('product5');
    });

    it('test delete favorite product', () => {
        const product: Product = {
            id: 5,
            title: 'product5',
            img: 'productImg',
            type: ProductTypes.ACCESSORIES,
            grade: 4,
            price: 1300,
            commentsCount: 12,
            promotionPercent: 30,
            statusList: ['Новинка'],
        };

        const actionSetFavoriteProduct = actions.setFavoriteProduct(product);
        let newState = productsReducer(initialState, actionSetFavoriteProduct);

        const actionDeleteFavoriteProduct =
            actions.deleteFavoriteProduct(product);
        newState = productsReducer(newState, actionDeleteFavoriteProduct);

        expect(newState.favorite.get(5)).toBeUndefined();
    });

    it('test set compare products', () => {
        const compareProducts = new Map<number, CompareProduct>([
            [
                1,
                {
                    id: 1,
                    title: 'product1',
                    img: 'productImg',
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
                    img: 'productImg',
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
                    img: 'productImg',
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
                    img: 'productImg',
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
                    img: 'productImg',
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
                    img: 'productImg',
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
        ]);
        const compareProductsList = Array.from(compareProducts.values());
        const action = actions.setCompareProducts(compareProductsList);
        const newState = productsReducer(initialState, action);

        expect(Array.from(newState.compare.values()).length).toBe(6);
    });

    it('test set compare product', () => {
        const action = actions.setCompareProduct({
            id: 5,
            title: 'product5',
            img: 'productImg',
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
        });
        const newState = productsReducer(initialState, action);

        expect(newState.compare.get(5)?.title).toBe('product5');
    });

    it('test delete compare product', () => {
        const product: CompareProduct = {
            id: 5,
            title: 'product5',
            img: 'productImg',
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
        };
        const actionSetCompareProduct = actions.setCompareProduct(product);
        let newState = productsReducer(initialState, actionSetCompareProduct);

        const actionDeleteCompareProduct =
            actions.deleteCompareProduct(product);
        newState = productsReducer(initialState, actionDeleteCompareProduct);

        expect(newState.compare.get(5)).toBeUndefined();
    });

    it('test set current page', () => {
        const action = actions.setCurrentPage(12);
        const newState = productsReducer(initialState, action);

        expect(newState.currentPage).toBe(12);
    });

    it('test set page size', () => {
        const action = actions.setPageSize(15);
        const newState = productsReducer(initialState, action);

        expect(newState.pageSize).toBe(15);
    });
});
