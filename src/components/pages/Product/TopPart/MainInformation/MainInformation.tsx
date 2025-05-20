import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../../../redux/products/productsSelectors';
import { CompareButton } from '../../../../common/ProductCard/CompareButton/CompareButton';
import { LikeButton } from '../../../../common/ProductCard/LikeButton/LikeButton';
import { OldPrice } from '../../../../common/ProductCard/OldPrice/OldPrice';
import { Price } from '../../../../common/ProductCard/Price/Price';
import { Promotion } from '../../../../common/ProductCard/Price/Promotion/Promotion';
import { Statistics } from '../../../../common/ProductCard/Statistics/Statistics';
import classes from './MainInformation.module.scss';

type PropsType = {
    grade: 1 | 2 | 3 | 4 | 5;
    commentsCount: number;
};

export const MainInformation: React.FC<PropsType> = ({
    grade,
    commentsCount,
}) => {
    const productId = +useParams().productId!;
    const product = useSelector(getProductById(productId))!;

    return (
        <div className={classes.mainInformation}>
            <div className={classes.top}>
                <Statistics grade={grade} commentsCount={commentsCount} />
                <div className={classes.buttons}>
                    <LikeButton product={product} />
                    <CompareButton />
                </div>
            </div>
            <div className={classes.bottom}>
                <div className={classes.price}>
                    <div className={classes.top}>
                        <OldPrice price={1000} promotionPercent={20} />
                        <Promotion price={1000} promotionPercent={20} />
                    </div>
                    <Price price={1000} />
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
