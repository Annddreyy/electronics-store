import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { ProductCardsWithSorting } from '../components/common/ProductCardsWithSorting/ProductCardsWithSorting';
import { FavoriteProductForm } from '../components/pages/FavoriteProduct/FavoriteProductForm/FavoriteProductForm';
import { getFavoriteProducts } from '../redux/products/productsSelectors';
import { root } from '../utils/breadCrumbsPaths';
import classes from './../components/pages/FavoriteProduct/FavoriteProducts.module.scss';
import { BasePageWithContainer } from './BasePageWithContainer';

const FavoriteProducts: React.FC = () => {
    const path = [root.main.path, root.main.favorite.path];
    return (
        <BasePageWithContainer>
            <BreadCrumbs path={path} />
            <h1 className="pageTitle">Избранное</h1>
            <div className={classes.mainPart}>
                <FavoriteProductForm />
                <ProductCardsWithSorting selector={getFavoriteProducts} />
            </div>
        </BasePageWithContainer>
    );
};

export default FavoriteProducts;
