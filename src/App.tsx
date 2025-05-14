import newsImg from './assets/news/news-img.png';
import img from './assets/offer_card/img.png';
import productImg from './assets/productDefault.png';
import { BreadCrumbs } from './components/common/BreadCrumbs/BreadCrumbs';
import { Footer } from './components/common/Footer/Footer';
import { Header } from './components/common/Header/Header';
import { NewsCard } from './components/common/NewsCard/NewsCard';
import { OfferCard } from './components/common/OfferCard/OfferCard';
import { Paginator } from './components/common/Paginator/Paginator';
import {
    ProductCard,
    PropsType,
} from './components/common/ProductCard/ProductCard';
import { TopPart } from './components/pages/Main/TopPart/TopPart';
import { LinkType } from './types';

const App: React.FC = () => {
    const card: PropsType = {
        title: 'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
        img: productImg,
        type: 'Сигвеи',
        grade: 4,
        oldPrice: 5400,
        price: 4990,
        commentsCount: 17,
        promotionPercent: 20,
        statusList: ['Новинка', 'Хит продаж'],
    };

    const news = {
        img: newsImg,
        title: 'Открытие нового магазина',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae odio omnis quas dolorum commodi culpa nam? Ex, nemo nisi.',
        date: new Date(2021, 5, 21),
    };

    const offerCard = {
        img: img,
        title: 'Скидка до 30% на сигвеи',
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
                <ProductCard {...card} />
                <NewsCard {...news} />
                <OfferCard {...offerCard} />
                <Paginator {...paginator} />
                <BreadCrumbs {...breadCrumbs} />
            </div>
            <Footer />
        </>
    );
};

export default App;
