import newsImg from './assets/news/news-img.png';
import { BreadCrumbs } from './components/common/BreadCrumbs/BreadCrumbs';
import { Footer } from './components/common/Footer/Footer';
import { Header } from './components/common/Header/Header';
import { NewsCard } from './components/common/NewsCard/NewsCard';
import { OfferCard } from './components/common/OfferCard/OfferCard';
import { OfferCardsGroup } from './components/common/OfferCardsGroup/OfferCardsGroup';
import { Paginator } from './components/common/Paginator/Paginator';
import { ProductCardsGroup } from './components/common/ProductCardsGroup/ProductCardsGroup';
import { TopPart } from './components/pages/Main/TopPart/TopPart';
import { ProductTypeEnum } from './redux/products/productsReducer';
import {
    getProductsByStatus,
    getProductsByType,
} from './redux/products/productsSelectors';
import { LinkType } from './types';

const App: React.FC = () => {
    const news = {
        img: newsImg,
        title: 'Открытие нового магазина',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae odio omnis quas dolorum commodi culpa nam? Ex, nemo nisi.',
        date: new Date(2021, 5, 21),
    };

    const paginator = {
        pageSize: 10,
        totalItemsCount: 61,
        pagesPerGroup: 3,
    };

    const breadCrumbs = {
        path: [
            { link: '/', title: 'Главная' },
            { link: '/path1', title: 'Путь1' },
            { link: '/path2', title: 'Путь2' },
        ] as LinkType[],
    };

    return (
        <>
            <Header />
            <div className="container">
                <TopPart />
                <ProductCardsGroup
                    title={'Хиты продаж'}
                    selector={getProductsByStatus('Хит продаж')}
                />
                <ProductCardsGroup
                    title={'Новинки'}
                    selector={getProductsByStatus('Новинка')}
                />
                <OfferCardsGroup id1={1} id2={2} />
                <ProductCardsGroup
                    title={'Сигвеи'}
                    selector={getProductsByType(ProductTypeEnum.SEGWAY)}
                />
                <ProductCardsGroup
                    title={'Моноколеса'}
                    selector={getProductsByType(ProductTypeEnum.UNICYCLE)}
                />
                <OfferCardsGroup id1={3} id2={4} />
                <ProductCardsGroup
                    title={'Электровелосипеды'}
                    selector={getProductsByType(
                        ProductTypeEnum.ELECTRIC_BICYCLE,
                    )}
                />
                <NewsCard {...news} />
                <Paginator {...paginator} />
                <BreadCrumbs {...breadCrumbs} />
            </div>
            <Footer />
        </>
    );
};

export default App;
