import classes from './Promotion.module.scss';

type PropsType = {
    price: number;
    promotionPercent: number | undefined;
};

export const Promotion: React.FC<PropsType> = ({ price, promotionPercent }) => {
    return (
        <>
            {promotionPercent && (
                <p className={classes.promotion}>
                    <span className={classes.percentCount}>
                        {promotionPercent}%
                    </span>
                    <span className={classes.promotionValue}>
                        — {(promotionPercent * price) / 100}₽
                    </span>
                </p>
            )}
        </>
    );
};
