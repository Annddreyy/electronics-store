import classes from './../PlacingAnOrder.module.scss';
import { OrderSteps } from '../../../../pages/PlacingAnOrder';
import { NextButton } from '../NextButton/NextButton';
import { MethodOfReceivingFill } from '../FilledBlocks/MethodOfReceivingFill/MethodOfReceivingFill';

type PropsType = {
    changeNextOrderStep: () => void;
    setCurrentOrderStep: React.Dispatch<React.SetStateAction<OrderSteps>>;
    currentOrderState: OrderSteps;
};

export const MethodOfReceiving: React.FC<PropsType> = ({
    changeNextOrderStep,
    setCurrentOrderStep,
    currentOrderState,
}) => {
    const changeFillingStage = () => {
        setCurrentOrderStep(OrderSteps.METHOD_OF_RECEIVING);
    };

    return (
        <>
            {currentOrderState === OrderSteps.METHOD_OF_RECEIVING ? (
                <>
                    <section className={classes.orderBlock}>
                        <h2 className={classes.blockTitle}>Ваш заказ</h2>
                    </section>
                    <NextButton setNextOrderStage={changeNextOrderStep} />
                </>
            ) : (
                <MethodOfReceivingFill
                    method="Самовывоз"
                    addressSelfPickUp="1"
                    workingTime="1"
                    changeStage={changeFillingStage}
                />
            )}
        </>
    );
};
