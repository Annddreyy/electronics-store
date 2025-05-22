import { Product } from '../../../../../api/productsAPI';
import { CompareButton } from '../../../../common/ProductCard/CompareButton/CompareButton';
import { LikeButton } from '../../../../common/ProductCard/LikeButton/LikeButton';
import { OldPrice } from '../../../../common/ProductCard/OldPrice/OldPrice';
import { Price } from '../../../../common/ProductCard/Price/Price';
import { Promotion } from '../../../../common/ProductCard/Price/Promotion/Promotion';
import { Statistics } from '../../../../common/ProductCard/Statistics/Statistics';
import classes from './MainInformation.module.scss';

type PropsType = {
    product: Product;
};

export const MainInformation: React.FC<PropsType> = ({ product }) => {
    return (
        <div className={classes.mainInformation}>
            <div className={classes.top}>
                <Statistics
                    grade={product.grade}
                    commentsCount={product.commentsCount}
                />
                <div className={classes.buttons}>
                    <LikeButton product={product} />
                    <CompareButton />
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.price}>
                    <div className={classes.top}>
                        <OldPrice
                            price={product.price}
                            promotionPercent={product.promotionPercent}
                        />
                        <Promotion
                            price={product.price}
                            promotionPercent={product.promotionPercent}
                        />
                    </div>
                    <Price price={product.price} />
                </div>
                <div className={classes.buttons}>
                    <button className="button-primary">В корзину</button>
                    <button className="button-primary-outlined">
                        Купить в 1 клик
                    </button>
                </div>
            </div>
        </div>
    );
};
