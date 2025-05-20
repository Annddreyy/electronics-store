import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { ProductCardsWithSorting } from '../components/common/ProductCardsWithSorting/ProductCardsWithSorting';
import { getFavoriteProducts } from '../redux/products/productsSelectors';
import { LinkType } from '../types';
import { FavoriteProductForm } from '../components/pages/FavoriteProduct/FavoriteProductForm/FavoriteProductForm';
import classes from './../components/pages/FavoriteProduct/FavoriteProducts.module.scss';

export const FavoriteProducts: React.FC = () => {
    const path: LinkType[] = [
        { link: '/', title: 'Главная' },
        { link: '/favorite', title: 'Избранное' },
    ];

    return (
        <>
            <Header />
            <div className="container">
                <BreadCrumbs path={path} />
                <h1 className="pageTitle">Избранное</h1>
                <div className={classes.mainPart}>
                    <FavoriteProductForm />
                    <ProductCardsWithSorting selector={getFavoriteProducts} />
                </div>
            </div>
            <Footer />
        </>
    );
};
