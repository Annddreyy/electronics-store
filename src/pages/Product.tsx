import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { ProductInformation } from '../components/pages/Product/ProductInformation/ProductInformation';
import { TopPart } from '../components/pages/Product/TopPart/TopPart';
import { Link } from '../types';
import { BasePageWithContainer } from './BasePageWithContainer';

const Product: React.FC = () => {
    const path: Link[] = [
        { link: '/', title: 'Главная' },
        { link: '/gyroscuters', title: 'Гироскутеры' },
        {
            link: '/products/1',
            title: 'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
        },
    ];

    return (
        <BasePageWithContainer>
            <BreadCrumbs path={path} />
            <TopPart />
            <ProductInformation />
        </BasePageWithContainer>
    );
};

export default Product;
