import {
    ProductCard,
    PropsType,
    StatusType,
} from './components/common/ProductCard/ProductCard';
import { Header } from './components/common/Header/Header';
import productImg from './assets/productDefault.png';
import { NewsCard } from './components/common/NewsCard/NewsCard';
import newsImg from './assets/news/news-img.png';
import { Footer } from './components/common/Footer/Footer';
import { OfferCard } from './components/common/OfferCard/OfferCard';
import img from './assets/offer_card/img.png';

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

    return (
        <>
            <Header />
            <ProductCard {...card} />
            <NewsCard {...news} />
            <OfferCard {...offerCard} />
            <Footer />
        </>
    );
};

export default App;
