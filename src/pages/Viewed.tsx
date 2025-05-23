import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { ProductCardsWithSorting } from '../components/common/ProductCardsWithSorting/ProductCardsWithSorting';
import { getViewedProducts } from '../redux/products/productsSelectors';
import { root } from '../utils/breadCrumbsPaths';

const Viewed: React.FC = () => {
    const path = [root.main.path, root.main.viewed.path];
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
