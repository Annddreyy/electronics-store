import classes from './../PlacingAnOrder.module.scss';
import { OrderBlockProps, OrderSteps } from '../../../../pages/PlacingAnOrder';
import { NextButton } from '../NextButton/NextButton';
import { MethodOfReceivingFill } from '../FilledBlocks/MethodOfReceivingFill/MethodOfReceivingFill';
import { Field } from '../../../common/FormElements/Field';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../../common/ErrorMessage/ErrorMessage';
import styles from './MethodOfReceiving.module.scss';
import cn from 'classnames';
import { DeliveryBlock } from './SecondPart/DeliveryBlock/DeliveryBlock';
import { SelfPickup } from './SecondPart/SelfPickup/SelfPickup';
import { useState } from 'react';

type FormDataType = {
    city: string;
    method: 'Доставка' | 'Самовывоз';
};

enum FormType {
    NOT_CHANGE,
    DELIVERY,
    SELF_PICKUP,
}

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

    const [formType, setFormType] = useState<FormType>(FormType.NOT_CHANGE);

    return (
        <>
            {currentOrderState === OrderSteps.METHOD_OF_RECEIVING ? (
                <>
                    <section className={cn(classes.orderBlock, styles.order)}>
                        <div className={styles.topPart}>
                            <h2 className={classes.blockTitle}>
                                Способ получения
                            </h2>
                            <form className={styles.methodOfReceivingForm}>
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
                                                !errors.city &&
                                                dirtyFields.city,
                                        })}
                                    />
                                    <ErrorMessage error={errors.city} />
                                </div>
                                <div className={styles.right}>
                                    <div
                                        className={cn(
                                            'form-block',
                                            styles.radio,
                                        )}
                                        style={{ gridArea: 'delivery' }}
                                    >
                                        <Field
                                            type="radio"
                                            id="deliveryMethod"
                                            name="receivingMethod"
                                            register={register}
                                            options={{
                                                required:
                                                    'Это поле обязательное',
                                            }}
                                            className={cn({
                                                inputError: errors.method,
                                                inputCorrect:
                                                    !errors.method &&
                                                    dirtyFields.method,
                                            })}
                                            style={{ border: 'none' }}
                                            onChange={() => {
                                                console.log(1);
                                                setFormType(FormType.DELIVERY);
                                            }}
                                        />
                                        <label htmlFor="deliveryMethod">
                                            Доставка
                                        </label>
                                        <ErrorMessage error={errors.method} />
                                    </div>
                                    <div
                                        className={cn(
                                            'form-block',
                                            styles.radio,
                                        )}
                                        style={{ gridArea: 'self-pick-up' }}
                                    >
                                        <Field
                                            type="radio"
                                            id="selfPickupMethod"
                                            name="receivingMethod"
                                            register={register}
                                            options={{
                                                required:
                                                    'Это поле обязательное',
                                            }}
                                            className={cn({
                                                inputError: errors.method,
                                                inputCorrect:
                                                    !errors.method &&
                                                    dirtyFields.method,
                                            })}
                                            onChange={() => {
                                                console.log(2);
                                                setFormType(
                                                    FormType.SELF_PICKUP,
                                                );
                                            }}
                                        />
                                        <label htmlFor="selfPickupMethod">
                                            Самовывоз
                                        </label>
                                        <ErrorMessage error={errors.method} />
                                    </div>
                                </div>
                            </form>
                            <datalist id="cities">
                                <option value="Санкт-Петербург"></option>
                                <option value="Москва"></option>
                            </datalist>
                        </div>
                        {formType !== FormType.NOT_CHANGE ? (
                            formType === FormType.DELIVERY ? (
                                <DeliveryBlock
                                    changeNextOrderStep={changeNextOrderStep}
                                />
                            ) : (
                                <SelfPickup
                                    changeNextOrderStep={changeNextOrderStep}
                                />
                            )
                        ) : (
                            <></>
                        )}
                    </section>
                </>
            ) : (
                <MethodOfReceivingFill changeStage={changeFillingStage} />
            )}
        </>
    );
};
