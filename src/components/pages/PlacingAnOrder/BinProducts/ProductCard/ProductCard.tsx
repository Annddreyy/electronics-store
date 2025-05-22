import { useDispatch } from 'react-redux';
import {
    Actions,
    OrderProductsInformation,
} from '../../../../../redux/order/orderReducer';
import deleteProductImg from './../../../../../assets/product/delete.png';
import classes from './ProductCard.module.scss';

type PropsType = OrderProductsInformation & {
    increase: (id: number) => Actions;
    decrease: (id: number) => Actions;
    deleteProduct: (id: number) => Actions;
};

export const ProductCard: React.FC<PropsType> = ({
    id,
    img,
    title,
    count,
    promotionPercent,
    price,
    increase,
    decrease,
    deleteProduct,
}) => {
    const totalPrice = price * count;
    const oldPrice = promotionPercent
        ? price + (promotionPercent / 100) * price
        : undefined;

    const dispatch = useDispatch();

    const onIncreaseProductCount = () => {
        dispatch(increase(id));
    };

    const onDecreaseProductCount = () => {
        dispatch(decrease(id));
    };

    const onDeleteProduct = () => {
        dispatch(deleteProduct(id));
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
                    disabled={count === 1}
                >
                    <span>-</span>
                </button>
                <span className={classes.count}>{count}</span>
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
                <img src={deleteProductImg} alt="" onClick={onDeleteProduct} />
            </td>
        </tr>
    );
};
