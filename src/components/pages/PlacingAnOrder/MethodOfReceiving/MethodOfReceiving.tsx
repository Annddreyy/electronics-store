import classes from './../PlacingAnOrder.module.scss';
import { OrderBlockProps, OrderSteps } from '../../../../pages/PlacingAnOrder';
import { NextButton } from '../NextButton/NextButton';
import { MethodOfReceivingFill } from '../FilledBlocks/MethodOfReceivingFill/MethodOfReceivingFill';
import { Field } from '../../../common/FormElements/Field';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../../common/ErrorMessage/ErrorMessage';
import styles from './MethodOfReceiving.module.scss';
import cn from 'classnames';

type FormDataType = {
    city: string;
    method: 'Доставка' | 'Самовывоз';
};

export const MethodOfReceiving: React.FC<OrderBlockProps> = ({
    changeNextOrderStep,
    setCurrentOrderStep,
    currentOrderState,
}) => {
    const changeFillingStage = () => {
        setCurrentOrderStep(OrderSteps.METHOD_OF_RECEIVING);
    };

    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<FormDataType>();

    const onSubmit = (formData: FormDataType) => {
        console.log(formData.city);
    };

    return (
        <>
            {currentOrderState === OrderSteps.METHOD_OF_RECEIVING ? (
                <>
                    <section className={classes.orderBlock}>
                        <h2 className={classes.blockTitle}>Способ получения</h2>
                        <form
                            onBlur={handleSubmit(onSubmit)}
                            className={styles.methodOfReceivingForm}
                        >
                            <div
                                className="form-block"
                                style={{ gridArea: 'city' }}
                            >
                                <label htmlFor="city">Ваш город</label>
                                <Field
                                    type="text"
                                    id="city"
                                    name="city"
                                    list="cities"
                                    register={register}
                                    options={{
                                        required: 'Это поле обязательное',
                                    }}
                                    className={cn({
                                        inputError: errors.city,
                                        inputCorrect:
                                            !errors.city && dirtyFields.city,
                                    })}
                                />
                                <ErrorMessage error={errors.city} />
                            </div>
                            <div className={styles.right}>
                                <div
                                    className={cn('form-block', styles.radio)}
                                    style={{ gridArea: 'delivery' }}
                                >
                                    <Field
                                        type="radio"
                                        id="receivingMethod"
                                        name="receivingMethod"
                                        register={register}
                                        options={{
                                            required: 'Это поле обязательное',
                                        }}
                                        className={cn({
                                            inputError: errors.method,
                                            inputCorrect:
                                                !errors.method &&
                                                dirtyFields.method,
                                        })}
                                        style={{ border: 'none' }}
                                    />
                                    <label htmlFor="receivingMethod">
                                        Доставка
                                    </label>
                                    <ErrorMessage error={errors.method} />
                                </div>
                                <div
                                    className={cn('form-block', styles.radio)}
                                    style={{ gridArea: 'self-pick-up' }}
                                >
                                    <Field
                                        type="radio"
                                        id="receivingMethod"
                                        name="receivingMethod"
                                        register={register}
                                        options={{
                                            required: 'Это поле обязательное',
                                        }}
                                        className={cn({
                                            inputError: errors.method,
                                            inputCorrect:
                                                !errors.method &&
                                                dirtyFields.method,
                                        })}
                                    />
                                    <label htmlFor="receivingMethod">
                                        Ваш город
                                    </label>
                                    <ErrorMessage error={errors.method} />
                                </div>
                            </div>
                        </form>
                        <datalist id="cities">
                            <option value="Санкт-Петербург"></option>
                            <option value="Москва"></option>
                        </datalist>
                    </section>
                    <NextButton setNextOrderStage={changeNextOrderStep} />
                </>
            ) : (
                <MethodOfReceivingFill changeStage={changeFillingStage} />
            )}
        </>
    );
};
