import classes from './ProductCard.module.scss';
import messageSquare from './../../../assets/card/message-square.png';
import starFill from './../../../assets/card/starFill.png';
import star from './../../../assets/card/star.png';
import { CompareButton } from './CompareButton/CompareButton';
import { LikeButton } from './LikeButton/LikeButton';
import { BinButton } from './BinButton/BinButton';

export type StatusType = 'Новинка' | 'Хит продаж';

export type PropsType = {
    title: string;
    img: string;
    type: string;
    grade: 0 | 1 | 2 | 3 | 4 | 5;
    oldPrice?: number;
    price: number;
    commentsCount: number;
    promotionPercent?: number;
    statusList?: StatusType[];
};

export const ProductCard: React.FC<PropsType> = ({
    title,
    img,
    type,
    grade,
    oldPrice,
    price,
    commentsCount,
    promotionPercent,
    statusList,
}) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<img src={i < grade ? starFill : star} />);
    }
    return (
        <article className={classes.card}>
            <div className={classes.statuses}>
                {statusList?.map((status) => (
                    <div className={classes.status} data-type={status}>
                        {status}
                    </div>
                ))}
            </div>
            <img src={img} alt="" />
            <span className={classes.type}>{type}</span>
            <h3 className={classes.title}>{title}</h3>
            <div className={classes.statistics}>
                <div className={classes.stars}>{stars}</div>
                <span className={classes.messages}>
                    <img src={messageSquare} alt="" />({commentsCount})
                </span>
            </div>
            {oldPrice && <p className={classes.oldPrice}>{oldPrice}</p>}

            <div className={classes.bottomInformation}>
                <div>
                    <p className={classes.price}>{price}</p>
                    <p className={classes.promotion}>
                        <span className={classes.percentCount}>
                            {promotionPercent}%
                        </span>
                        {promotionPercent && (
                            <span className={classes.promotionValue}>
                                — {(promotionPercent * price) / 100}₽
                            </span>
                        )}
                    </p>
                </div>
                <div className={classes.buttonsInf}>
                    <CompareButton />
                    <LikeButton />
                </div>
            </div>
            <div className={classes.buttons}>
                <button className={classes.buy}>Купить в 1 клик</button>
                <BinButton />
            </div>
        </article>
    );
};
