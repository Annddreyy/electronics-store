import { useState } from 'react';
import { createNewHTML } from '../../../../utils/createNewHTML';
import { Characteristics } from './Characteristics/Characteristics';
import { ProductDescription } from './ProductDescription/ProductDescription';
import { Reviews } from './Reviews/Reviews';
import classes from './ProductInformation.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { getSelectedProduct } from '../../../../redux/products/productsSelectors';

enum TabsEnum {
    ProductDescription,
    Characteristics,
    Reviews,
}

export const ProductInformation: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<TabsEnum>(TabsEnum.Reviews);

    const selectedProduct = useSelector(getSelectedProduct);
    const html = createNewHTML(selectedProduct.description);
    const characteristics = Object.entries(selectedProduct.characteristics);

    const tabs: Record<TabsEnum, React.ReactNode> = {
        [TabsEnum.ProductDescription]: (
            <ProductDescription
                title={selectedProduct.descriptionTabTitle}
                html={html}
            />
        ),
        [TabsEnum.Characteristics]: (
            <Characteristics
                title={selectedProduct.characteristicsTabTitle}
                characteristics={characteristics}
            />
        ),
        [TabsEnum.Reviews]: (
            <Reviews
                title={selectedProduct.reviewsTabTitle}
                reviews={selectedProduct.reviews}
            />
        ),
    };

    return (
        <section>
            <div className={cn(classes.buttons, 'bg-secondary')}>
                <button
                    onClick={() => setCurrentTab(TabsEnum.ProductDescription)}
                    data-type={
                        currentTab === TabsEnum.ProductDescription
                            ? 'active'
                            : undefined
                    }
                >
                    Описание
                </button>
                <button
                    onClick={() => setCurrentTab(TabsEnum.Characteristics)}
                    data-type={
                        currentTab === TabsEnum.Characteristics
                            ? 'active'
                            : undefined
                    }
                >
                    Характеристики
                </button>
                <button
                    onClick={() => setCurrentTab(TabsEnum.Reviews)}
                    data-type={
                        currentTab === TabsEnum.Reviews ? 'active' : undefined
                    }
                >
                    Отзывы ({selectedProduct.reviews.length})
                </button>
            </div>
            {tabs[currentTab]}
        </section>
    );
};
