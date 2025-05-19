import { useState } from 'react';
import deleteProductImg from './../../../../../assets/product/delete.png';
import { ProductCardType } from '../BinProducts';
import classes from './ProductCard.module.scss';
import { table } from 'console';

export const ProductCard: React.FC<ProductCardType> = ({
    img,
    title,
    count,
    oldPrice,
    price,
}) => {
    const [productsCount, setProductsCount] = useState(count);
    const totalPrice = price * productsCount;

    const onIncreaseProductCount = () => {
        setProductsCount((prev) => prev + 1);
    };

    const onDecreaseProductCount = () => {
        setProductsCount((prev) => (prev > 1 ? prev - 1 : prev));
    };

    return (
        <tr className={classes.productCard}>
            <td>
                <img src={img} alt="" className={classes.productImg} />
            </td>
            <td>
                <h3 className={classes.title}>{title}</h3>
            </td>
            <td className={classes.countInformation}>
                <button
                    className={classes.button}
                    onClick={onDecreaseProductCount}
                    disabled={productsCount === 1}
                >
                    <span>-</span>
                </button>
                <span className={classes.count}>{productsCount}</span>
                <button
                    className={classes.button}
                    onClick={onIncreaseProductCount}
                >
                    <span>+</span>
                </button>
            </td>
            <td>
                <div className={classes.prices}>
                    {oldPrice && (
                        <span className={classes.oldPrice}>{oldPrice} ₽</span>
                    )}
                    <span className={classes.totalPrice}>{totalPrice} ₽</span>
                </div>
            </td>
            <td>
                <img src={deleteProductImg} alt="" />
            </td>
        </tr>
    );
};
