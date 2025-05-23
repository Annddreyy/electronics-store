import { Link } from '../types';

export const root = {
    main: {
        path: {
            link: '/',
            title: 'Главная',
        } as Link,

        aboutUs: {
            path: {
                link: '/about-us',
                title: 'О нас',
            } as Link,
        },

        contacts: {
            path: {
                link: '/contacts',
                title: 'Контакты',
            } as Link,
        },

        dropshipping: {
            path: {
                link: '/wholesale',
                title: 'Оптом',
            } as Link,
        },

        favorite: {
            path: {
                link: '/favorite',
                title: 'Избранное',
            } as Link,
        },

        compare: {
            path: {
                link: '/compare',
                title: 'Сравнение товаров',
            } as Link,
        },

        installment: {
            path: {
                link: '/installment',
                title: 'Рассрочка 0|0|18',
            } as Link,
        },

        news: {
            path: {
                link: '/news',
                title: 'Новости',
            } as Link,

            oneNews(id: number, title: string): Link {
                return {
                    link: `/news/${id}`,
                    title,
                };
            },
        },

        offers: {
            path: {
                link: '/offers',
                title: 'Акции',
            } as Link,

            offer: (offerId: number, title: string): Link => ({
                link: `/${offerId}`,
                title,
            }),
        },

        personalCabinet: {
            path: {
                link: '/personal-cabinet/main',
                title: 'Личный кабинет',
            } as Link,

            main: {
                path: {
                    link: '/personal-cabinet/main',
                    title: 'Общие сведения',
                } as Link,
            },

            favorites: {
                path: {
                    link: '/personal-cabinet/favorites',
                    title: 'Избранное',
                } as Link,
            },

            history: {
                path: {
                    link: '/personal-cabinet/history',
                    title: 'История покупок',
                } as Link,
            },

            pass: {
                path: {
                    link: '/personal-cabinet/pass',
                    title: 'Смена пароля',
                } as Link,
            },

            personalData: {
                path: {
                    link: '/personal-cabinet/personal-data',
                    title: 'Личные данные',
                } as Link,
            },
        },

        vacancies: {
            path: {
                link: '/vacancies',
                title: 'Вакансии',
            } as Link,
        },

        viewed: {
            path: {
                link: '/viewed',
                title: 'Просмотренные товары',
            } as Link,
        },

        warrantyConditions: {
            path: {
                link: '/warranty-conditions',
                title: 'Гарантийные условия',
            } as Link,
        },

        whosale: {
            path: {
                link: '/whosale',
                title: 'Оптом',
            } as Link,
        },
    },
};
