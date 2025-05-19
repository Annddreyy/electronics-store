import { useState } from 'react';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { BinProducts } from '../components/pages/PlacingAnOrder/BinProducts/BinProducts';
import { OrderForm } from '../components/pages/PlacingAnOrder/OrderForm/OrderForm';
import classes from './../components/pages/PlacingAnOrder/PlacingAnOrder.module.scss';
import { MethodOfReceiving } from '../components/pages/PlacingAnOrder/MethodOfReceiving/MethodOfReceiving';
import { PayMethod } from '../components/pages/PlacingAnOrder/PayMethod/PayMethod';
import { Recipient } from '../components/pages/PlacingAnOrder/Recipient/Recipient';
import { BlockDisabled } from '../components/pages/PlacingAnOrder/BlockDisabled/BlockDisabled';
import { BinProductsFill } from '../components/pages/PlacingAnOrder/FilledBlocks/BinProductsFilled/BinProductsFill';
import img from './../assets/card/productDefault.png';
import { MethodOfReceivingFill } from '../components/pages/PlacingAnOrder/FilledBlocks/MethodOfReceivingFill/MethodOfReceivingFill';
import { PayMethodFill } from '../components/pages/PlacingAnOrder/FilledBlocks/PayMethodFill/PayMethodFill';

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
                    <div className={classes.left}>
                        <BinProducts />
                        <button className="button-primary">Далее</button>
                        <BinProductsFill
                            images={[
                                img,
                                img,
                                img,
                                img,
                                img,
                                img,
                                img,
                                img,
                                img,
                                img,
                                img,
                                img,
                            ]}
                        />
                        <BlockDisabled title="Тест" />
                        <MethodOfReceiving />
                        <button className="button-primary">Далее</button>
                        <MethodOfReceivingFill
                            method={'Самовывоз'}
                            addressSelfPickUp="г. Санкт-Петербург, Бульвар Новаторов, 75"
                            workingTime="ПН-ВС 09:00 — 22:00"
                        />
                        <PayMethod />
                        <button className="button-primary">Далее</button>
                        <PayMethodFill type="Наличными" />
                        <Recipient />
                    </div>
                    <OrderForm productsCount={2} sum={9000} />
                </div>
            </div>
            <Footer />
        </>
    );
};
