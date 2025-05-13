import {
    ProductCard,
    PropsType,
    StatusType,
} from './components/common/ProductCard/ProductCard';
import { Header } from './components/common/Header/Header';
import productImg from './assets/productDefault.png';
import { NewsCard } from './components/common/NewsCard/NewsCard';
import newsImg from './assets/news/news-img.png';

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

    return (
        <>
            <Header />
            <ProductCard {...card} />
            <NewsCard {...news} />
        </>
    );
};

export default App;
