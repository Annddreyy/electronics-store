import {
    ProductCard,
    PropsType,
    StatusType,
} from './components/common/ProductCard/ProductCard';
import { Header } from './components/common/Header/Header';
import productImg from './assets/productDefault.png';

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
    return (
        <>
            <Header />
            <ProductCard {...card} />
        </>
    );
};

export default App;
