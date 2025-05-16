import classes from './Promotion.module.scss';
import cn from 'classnames';

type PropsType = {
    price: number;
    promotionPercent: number | undefined;
};

export const Promotion: React.FC<PropsType> = ({ price, promotionPercent }) => {
    return (
        <>
            {promotionPercent && (
                <p className={cn(classes.promotion, 'bg-orange')}>
                    <span className={cn(classes.percentCount, 'bg-white')}>
                        {promotionPercent}%
                    </span>
                    <span className={cn(classes.promotionValue, 'text-white')}>
                        — {(promotionPercent * price) / 100}₽
                    </span>
                </p>
            )}
        </>
    );
};
