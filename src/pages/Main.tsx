import { Footer } from '../components/common/Footer/Footer';
import { BaseInput } from '../components/common/FormElements/BaseInput';
import { PasswordInput } from '../components/common/FormElements/PasswordInput/PasswordInput';
import { Header } from '../components/common/Header/Header';
import { OfferCardsGroup } from '../components/common/OfferCardsGroup/OfferCardsGroup';
import { ProductCardsGroup } from '../components/common/ProductCardsGroup/ProductCardsGroup';
import { TopPart } from '../components/pages/Main/TopPart/TopPart';
import { ProductTypeEnum } from '../redux/products/productsReducer';
import {
    getProductsByStatus,
    getProductsByType,
} from '../redux/products/productsSelectors';

export const Main: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container">
                <TopPart />
                <ProductCardsGroup
                    title={'Хиты продаж'}
                    selector={getProductsByStatus('Хит продаж')}
                />
                <ProductCardsGroup
                    title={'Новинки'}
                    selector={getProductsByStatus('Новинка')}
                />
                <OfferCardsGroup id1={1} id2={2} />
                <ProductCardsGroup
                    title={'Сигвеи'}
                    selector={getProductsByType(ProductTypeEnum.SEGWAY)}
                />
                <ProductCardsGroup
                    title={'Моноколеса'}
                    selector={getProductsByType(ProductTypeEnum.UNICYCLE)}
                />
                <OfferCardsGroup id1={3} id2={4} />
                <ProductCardsGroup
                    title={'Электровелосипеды'}
                    selector={getProductsByType(
                        ProductTypeEnum.ELECTRIC_BICYCLE,
                    )}
                />
            </div>
            <Footer />
        </>
    );
};
