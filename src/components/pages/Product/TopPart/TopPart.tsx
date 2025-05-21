import { useSelector } from 'react-redux';
import { getSelectedProduct } from '../../../../redux/products/productsSelectors';
import { BuyConditions } from './BuyConditions/BuyConditions';
import { MainInformation } from './MainInformation/MainInformation';
import { ProductImages } from './ProductImages/ProductImages';
import classes from './TopPart.module.scss';

export const TopPart: React.FC = () => {
    const selectedProduct = useSelector(getSelectedProduct);
    return (
        <section className={classes.topPart}>
            <ProductImages images={selectedProduct.images} />
            <div className={classes.productMainInformation}>
                <h1 className="pageTitle" style={{ gridArea: 'title' }}>
                    {selectedProduct.title}
                </h1>
                <MainInformation
                    product={{
                        id: selectedProduct.id,
                        title: selectedProduct.title,
                        promotionPercent: selectedProduct.promotionPercent,
                        price: selectedProduct.price,
                        type: selectedProduct.type,
                        grade: selectedProduct.grade,
                        img: selectedProduct.img,
                        commentsCount: selectedProduct.reviews.length,
                    }}
                />
                <BuyConditions />
            </div>
        </section>
    );
};
