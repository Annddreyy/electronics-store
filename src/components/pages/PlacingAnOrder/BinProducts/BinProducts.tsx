import { useSelector } from 'react-redux';
import { OrderBlockProps, OrderSteps } from '../../../../pages/PlacingAnOrder';
import { getBinProducts } from '../../../../redux/products/productsSelectors';
import { BinProductsFill } from '../FilledBlocks/BinProductsFilled/BinProductsFill';
import { NextButton } from '../NextButton/NextButton';
import img from './../../../../assets/card/productDefault.png';
import classes from './../PlacingAnOrder.module.scss';
import { ProductCard } from './ProductCard/ProductCard';

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

    const products = useSelector(getBinProducts);
    const productsElem = products.map((product) => (
        <ProductCard {...product} count={1} />
    ));

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
                    images={[img]}
                    changeStage={changeFillingStage}
                />
            )}
        </>
    );
};
