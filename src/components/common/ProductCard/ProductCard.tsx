import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { ProductType } from '../../../redux/products/productsReducer';
import { BinButton } from './BinButton/BinButton';
import { CompareButton } from './CompareButton/CompareButton';
import { LikeButton } from './LikeButton/LikeButton';
import classes from './ProductCard.module.scss';
import { Statistics } from './Statistics/Statistics';
import { OldPrice } from './OldPrice/OldPrice';
import { Price } from './Price/Price';
import { Promotion } from './Price/Promotion/Promotion';

export const ProductCard: React.FC<ProductType> = ({
    id,
    title,
    img,
    type,
    grade,
    price,
    commentsCount,
    promotionPercent,
    statusList,
}) => {
    return (
        <article className={cn(classes.card, 'border-gray-light-6')}>
            <div className={classes.statuses}>
                {statusList?.map((status) => (
                    <div data-status={status} className={classes.status}>
                        {status}
                    </div>
                ))}
            </div>
            <NavLink to={`/products/${id}`}>
                <img src={img} alt="" />
            </NavLink>
            <span className={'text-gray-dark-1'}>{type}</span>
            <h3 className={classes.title}>{title}</h3>
            <Statistics grade={grade} commentsCount={commentsCount} />
            <OldPrice promotionPercent={promotionPercent} price={price} />
            <div className={classes.bottomInformation}>
                <div>
                    <Price price={price} />
                    <Promotion
                        price={price}
                        promotionPercent={promotionPercent}
                    />
                </div>
                <div className={classes.buttonsInf}>
                    <CompareButton />
                    <LikeButton />
                </div>
            </div>
            <div className={classes.buttons}>
                <button className="button-primary">Купить в 1 клик</button>
                <BinButton />
            </div>
        </article>
    );
};
