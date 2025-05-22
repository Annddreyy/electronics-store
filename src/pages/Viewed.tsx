import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { ProductCardsWithSorting } from '../components/common/ProductCardsWithSorting/ProductCardsWithSorting';
import { getViewedProducts } from '../redux/products/productsSelectors';
import { Link } from '../types';

const Viewed: React.FC = () => {
    const path: Link[] = [
        { link: '/', title: 'Главная' },
        { link: '/viewed', title: 'Просмотренные товары' },
    ];

    return (
        <>
            <Header />
            <div className="container">
                <BreadCrumbs path={path} />
                <h1 className="pageTitle">Просмотренные товары</h1>
                <ProductCardsWithSorting selector={getViewedProducts} />
            </div>
            <Footer />
        </>
    );
};

export default Viewed;
