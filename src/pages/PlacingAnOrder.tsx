import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BinProducts } from '../components/pages/PlacingAnOrder/BinProducts/BinProducts';
import { BlockDisabled } from '../components/pages/PlacingAnOrder/BlockDisabled/BlockDisabled';
import { MethodOfReceiving } from '../components/pages/PlacingAnOrder/MethodOfReceiving/MethodOfReceiving';
import { OrderForm } from '../components/pages/PlacingAnOrder/OrderForm/OrderForm';
import { PayMethodBlock } from '../components/pages/PlacingAnOrder/PayMethodBlock/PayMethodBlock';
import { Recipient } from '../components/pages/PlacingAnOrder/Recipient/Recipient';
import { getProducts } from '../redux/order/orderSelectors';
import classes from './../components/pages/PlacingAnOrder/PlacingAnOrder.module.scss';
import { BasePageWithContainer } from './BasePageWithContainer';

export enum OrderSteps {
    ORDER,
    METHOD_OF_RECEIVING,
    PAYMENT_METHOD,
    RECIPIENT,
}

export enum Stage {
    FILLING,
    FILLED,
}

export type OrderBlockProps = {
    changeNextOrderStep: () => void;
    setCurrentOrderStep: React.Dispatch<React.SetStateAction<OrderSteps>>;
    currentOrderState: OrderSteps;
};

const PlacingAnOrder: React.FC = () => {
    const products = useSelector(getProducts);

    const productsCount = products.reduce(
        (sum, product) => sum + product.count,
        0,
    );
    const sum = products.reduce(
        (sum, product) => sum + product.price * product.count,
        0,
    );

    const [currentOrderState, setCurrentOrderStep] = useState(OrderSteps.ORDER);

    const ActiveBlocks = {
        [OrderSteps.ORDER]: BinProducts,
        [OrderSteps.METHOD_OF_RECEIVING]: MethodOfReceiving,
        [OrderSteps.PAYMENT_METHOD]: PayMethodBlock,
        [OrderSteps.RECIPIENT]: Recipient,
    };

    const DisabledBlocks = {
        [OrderSteps.ORDER]: <BlockDisabled title="Ваш заказ" />,
        [OrderSteps.METHOD_OF_RECEIVING]: (
            <BlockDisabled title="Способ получения" />
        ),
        [OrderSteps.PAYMENT_METHOD]: <BlockDisabled title="Способ оплаты" />,
        [OrderSteps.RECIPIENT]: <BlockDisabled title="Получатель" />,
    };

    const changeNextOrderStep = () => {
        setCurrentOrderStep((prev) => prev + 1);
    };

    const OrderBlock = ActiveBlocks[OrderSteps.ORDER];
    const MethodOfReceivingBlock = ActiveBlocks[OrderSteps.METHOD_OF_RECEIVING];
    const PayMethodBlockComponent = ActiveBlocks[OrderSteps.PAYMENT_METHOD];
    const RecipientBlock = ActiveBlocks[OrderSteps.RECIPIENT];

    return (
        <BasePageWithContainer>
            <h1 className="pageTitle">Оформление заказа</h1>
            <div className={classes.mainPart}>
                <div className={classes.left}>
                    {currentOrderState >= OrderSteps.ORDER ? (
                        <div>
                            {
                                <OrderBlock
                                    changeNextOrderStep={changeNextOrderStep}
                                    setCurrentOrderStep={setCurrentOrderStep}
                                    currentOrderState={currentOrderState}
                                />
                            }
                        </div>
                    ) : (
                        DisabledBlocks[OrderSteps.ORDER]
                    )}
                    {currentOrderState >= OrderSteps.METHOD_OF_RECEIVING ? (
                        <div>
                            {
                                <MethodOfReceivingBlock
                                    changeNextOrderStep={changeNextOrderStep}
                                    setCurrentOrderStep={setCurrentOrderStep}
                                    currentOrderState={currentOrderState}
                                />
                            }
                        </div>
                    ) : (
                        DisabledBlocks[OrderSteps.METHOD_OF_RECEIVING]
                    )}
                    {currentOrderState >= OrderSteps.PAYMENT_METHOD ? (
                        <div>
                            {
                                <PayMethodBlockComponent
                                    changeNextOrderStep={changeNextOrderStep}
                                    setCurrentOrderStep={setCurrentOrderStep}
                                    currentOrderState={currentOrderState}
                                />
                            }
                        </div>
                    ) : (
                        DisabledBlocks[OrderSteps.PAYMENT_METHOD]
                    )}
                    {currentOrderState >= OrderSteps.RECIPIENT ? (
                        <div>{<RecipientBlock />}</div>
                    ) : (
                        DisabledBlocks[OrderSteps.RECIPIENT]
                    )}
                </div>
                <OrderForm productsCount={productsCount} sum={sum} />
            </div>
        </BasePageWithContainer>
    );
};

export default PlacingAnOrder;
