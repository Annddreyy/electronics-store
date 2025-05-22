import { useSelector } from 'react-redux';
import { OrderBlockProps, OrderSteps } from '../../../../pages/PlacingAnOrder';
import { getProducts } from '../../../../redux/order/orderSelectors';
import { BinProductsFill } from '../FilledBlocks/BinProductsFilled/BinProductsFill';
import { NextButton } from '../NextButton/NextButton';
import classes from './../PlacingAnOrder.module.scss';
import { ProductCard } from './ProductCard/ProductCard';
import { actions } from '../../../../redux/order/orderReducer';
import { v4 } from 'uuid';

export type ProductCardType = {
    img: string;
    title: string;
    count: number;
    oldPrice?: number;
    price: number;
};

export const BinProducts: React.FC<OrderBlockProps> = ({
    changeNextOrderStep,
    setCurrentOrderStep,
    currentOrderState,
}) => {
    const changeFillingStage = () => {
        setCurrentOrderStep(OrderSteps.ORDER);
    };

    const products = useSelector(getProducts);
    const productsElem = products.map((product) => (
        <ProductCard
            {...product}
            increase={actions.increaseProduct}
            decrease={actions.decreaseProduct}
            deleteProduct={actions.deleteProduct}
            key={v4()}
        />
    ));

    const images = products.map((product) => product.img);

    return (
        <>
            {currentOrderState === OrderSteps.ORDER ? (
                <>
                    <section className={classes.orderBlock}>
                        <h2 className={classes.blockTitle}>Ваш заказ</h2>
                        <table>
                            <tbody>{productsElem}</tbody>
                        </table>
                    </section>
                    <NextButton setNextOrderStage={changeNextOrderStep} />
                </>
            ) : (
                <BinProductsFill
                    images={images}
                    changeStage={changeFillingStage}
                />
            )}
        </>
    );
};
