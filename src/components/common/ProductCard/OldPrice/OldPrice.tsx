import classes from './OldPrice.module.scss';
import cn from 'classnames';

type Props = {
    promotionPercent: number | undefined;
    price: number;
};

export const OldPrice: React.FC<Props> = ({ promotionPercent, price }) => {
    const oldPrice = promotionPercent
        ? price * (1 + promotionPercent / 100)
        : undefined;

    return (
        <>
            {oldPrice && (
                <p className={cn(classes.oldPrice, 'text-gray-dark-2')}>
                    {oldPrice}₽
                </p>
            )}
        </>
    );
};
