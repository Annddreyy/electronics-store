import { useState } from 'react';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { BinProducts } from '../components/pages/PlacingAnOrder/BinProducts/BinProducts';
import { OrderForm } from '../components/pages/PlacingAnOrder/OrderForm/OrderForm';
import classes from './../components/pages/PlacingAnOrder/PlacingAnOrder.module.scss';

enum OrderSteps {
    ORDER,
    METHOD_OF_RECEIVING,
    PAYMENT_METHOD,
    RECIPIENT,
}

export const PlacingAnOrder: React.FC = () => {
    const [currentOrderState, setCurrentOrderStep] = useState(OrderSteps.ORDER);
    return (
        <>
            <Header />
            <div className="container">
                <h1 className="pageTitle">Оформление заказа</h1>
                <div className={classes.mainPart}>
                    <div className="left">
                        <BinProducts />
                        <button className="button-primary">Далее</button>
                    </div>
                    <OrderForm productsCount={2} sum={9000} />
                </div>
            </div>
            <Footer />
        </>
    );
};
