import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { CardsBlock } from '../components/common/CardsBlock/CardsBlock';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { NewsCard } from '../components/common/NewsCard/NewsCard';
import { Paginator } from '../components/common/Paginator/Paginator';
import { getNews } from '../redux/news/newsSelector';
import { Link } from '../types';

const News: React.FC = () => {
    const path: Link[] = [
        { link: '/', title: 'Главная' },
        { link: '/news', title: 'Новости' },
    ];

    return (
        <>
            <Header />
            <div className="container">
                <BreadCrumbs path={path} />
                <h2 className="pageTitle">Новости</h2>
                <CardsBlock selector={getNews} Card={NewsCard} />
                <Paginator totalItemsCount={100} pageSize={10} />
            </div>
            <Footer />
        </>
    );
};

export default News;
