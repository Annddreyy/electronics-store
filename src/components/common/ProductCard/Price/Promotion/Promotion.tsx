import classes from './Promotion.module.scss';

type Props = {
    price: number;
    promotionPercent: number | undefined;
};

export const Promotion: React.FC<Props> = ({ price, promotionPercent }) => {
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
