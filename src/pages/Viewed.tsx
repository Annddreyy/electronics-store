import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { ProductCardsWithSorting } from '../components/common/ProductCardsWithSorting/ProductCardsWithSorting';
import { getViewedProducts } from '../redux/products/productsSelectors';
import { root } from '../utils/breadCrumbsPaths';
import { BasePageWithContainer } from './BasePageWithContainer';

const Viewed: React.FC = () => {
    const path = [root.main.path, root.main.viewed.path];
    return (
        <BasePageWithContainer>
            <BreadCrumbs path={path} />
            <h1 className="pageTitle">Просмотренные товары</h1>
            <ProductCardsWithSorting selector={getViewedProducts} />
        </BasePageWithContainer>
    );
};

export default Viewed;
