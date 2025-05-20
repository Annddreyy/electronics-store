import { useForm } from 'react-hook-form';
import { Field } from '../../../common/FormElements/Field';
import { ErrorMessage } from '../../../common/ErrorMessage/ErrorMessage';
import cn from 'classnames';
import classes from './../PlacingAnOrder.module.scss';
import { OrderSteps } from '../../../../pages/PlacingAnOrder';
import { PayMethodFill } from '../FilledBlocks/PayMethodFill/PayMethodFill';
import { NextButton } from '../NextButton/NextButton';

type FormValuesType = {
    paymentMethod: string;
};

type PropsType = {
    changeNextOrderStep: () => void;
    setCurrentOrderStep: React.Dispatch<React.SetStateAction<OrderSteps>>;
    currentOrderState: OrderSteps;
};

export const PayMethod: React.FC<PropsType> = ({
    changeNextOrderStep,
    setCurrentOrderStep,
    currentOrderState,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<FormValuesType>();

    const changeFillingStage = () => {
        setCurrentOrderStep(OrderSteps.PAYMENT_METHOD);
    };

    return (
        <>
            {currentOrderState === OrderSteps.PAYMENT_METHOD ? (
                <>
                    <section className={classes.orderBlock}>
                        <form>
                            <h2 className={classes.blockTitle}>
                                Способ оплаты
                            </h2>
                            <div className="form-block">
                                <Field
                                    type="text"
                                    id="paymentMethod"
                                    name="paymentMethod"
                                    placeholder="Введите имя"
                                    register={register}
                                    options={{ required: 'Поле обязательное' }}
                                    className={cn({
                                        inputError: errors.paymentMethod,
                                        inputCorrect:
                                            !errors.paymentMethod &&
                                            dirtyFields.paymentMethod,
                                    })}
                                    list="paymentMethodList"
                                />
                                <ErrorMessage error={errors.paymentMethod} />
                            </div>
                            <datalist id="paymentMethodList">
                                <option value="Наличными"></option>
                                <option value="Картой"></option>
                            </datalist>
                        </form>
                    </section>
                    <NextButton setNextOrderStage={changeNextOrderStep} />
                </>
            ) : (
                <PayMethodFill
                    type={'Наличными'}
                    changeStage={changeFillingStage}
                />
            )}
        </>
    );
};
