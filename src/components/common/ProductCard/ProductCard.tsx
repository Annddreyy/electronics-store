import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { actions } from '../../../redux/products/productsReducer';
import { BinButton } from './BinButton/BinButton';
import { CompareButton } from './CompareButton/CompareButton';
import { LikeButton } from './LikeButton/LikeButton';
import classes from './ProductCard.module.scss';
import { Statistics } from './Statistics/Statistics';
import { OldPrice } from './OldPrice/OldPrice';
import { Price } from './Price/Price';
import { Promotion } from './Price/Promotion/Promotion';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { Product } from '../../../api/productsAPI';

export const ProductCard: React.FC<Product> = (product) => {
    const dispatch = useDispatch();

    const setViewedProduct = () => {
        dispatch(actions.setViewedProduct(product));
    };

    return (
        <article className={cn(classes.card, 'border-gray-light-6')}>
            <div className={classes.statuses}>
                {product.statusList?.map((status) => (
                    <div
                        data-status={status}
                        className={classes.status}
                        key={v4()}
                    >
                        {status}
                    </div>
                ))}
            </div>
            <div className={classes.top}>
                <NavLink to={`/products/${product.id}`}>
                    <img src={product.img} alt="" onClick={setViewedProduct} />
                </NavLink>
                <span className={'text-gray-dark-1'}>{product.type}</span>
                <h3 className={classes.title}>{product.title}</h3>
                <Statistics
                    grade={product.grade}
                    commentsCount={product.commentsCount}
                />
                <OldPrice
                    promotionPercent={product.promotionPercent}
                    price={product.price}
                />
            </div>
            <div className={classes.bottom}>
                <div className={classes.bottomInformation}>
                    <div>
                        <Price price={product.price} />
                        <Promotion
                            price={product.price}
                            promotionPercent={product.promotionPercent}
                        />
                    </div>
                    <div className={classes.buttonsInf}>
                        <CompareButton />
                        <LikeButton product={product} />
                    </div>
                </div>
                <div className={classes.buttons}>
                    <button className="button-primary-outlined">
                        Купить в 1 клик
                    </button>
                    <BinButton />
                </div>
            </div>
        </article>
    );
};
