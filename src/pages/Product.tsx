import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { ProductInformation } from '../components/pages/Product/ProductInformation/ProductInformation';
import { TopPart } from '../components/pages/Product/TopPart/TopPart';
import { LinkType } from '../types';

export const Product: React.FC = () => {
    const path: LinkType[] = [
        { link: '/', title: 'Главная' },
        { link: '/gyroscuters', title: 'Гироскутеры' },
        {
            link: '/products/1',
            title: 'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
        },
    ];

    return (
        <>
            <Header />
            <div className="container">
                <BreadCrumbs path={path} />
                <TopPart />
                <ProductInformation />
            </div>
            <Footer />
        </>
    );
};
