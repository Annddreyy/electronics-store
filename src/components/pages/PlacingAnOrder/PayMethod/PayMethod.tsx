import { useForm } from 'react-hook-form';
import { Field } from '../../../common/FormElements/Field';
import { ErrorMessage } from '../../../common/ErrorMessage/ErrorMessage';
import cn from 'classnames';
import classes from './../PlacingAnOrder.module.scss';
import { OrderBlockProps, OrderSteps } from '../../../../pages/PlacingAnOrder';
import { PayMethodFill } from '../FilledBlocks/PayMethodFill/PayMethodFill';
import { NextButton } from '../NextButton/NextButton';
import { actions } from '../../../../redux/order/orderReducer';
import { useDispatch } from 'react-redux';

type FormValuesType = {
    paymentMethod: string;
};

export const PayMethod: React.FC<OrderBlockProps> = ({
    changeNextOrderStep,
    setCurrentOrderStep,
    currentOrderState,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<FormValuesType>();

    const dispatch = useDispatch();

    const changeFillingStage = () => {
        setCurrentOrderStep(OrderSteps.PAYMENT_METHOD);
    };

    const onSubmit = (formData: FormValuesType) => {
        dispatch(actions.setPayMethod(formData.paymentMethod));
    };

    return (
        <>
            {currentOrderState === OrderSteps.PAYMENT_METHOD ? (
                <>
                    <section className={classes.orderBlock}>
                        <form onBlur={handleSubmit(onSubmit)}>
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
                <PayMethodFill changeStage={changeFillingStage} />
            )}
        </>
    );
};
