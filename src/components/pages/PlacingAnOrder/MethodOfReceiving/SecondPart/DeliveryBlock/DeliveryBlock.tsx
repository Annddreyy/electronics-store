import { useForm } from 'react-hook-form';
import { Field } from '../../../../../common/FormElements/Field';
import cn from 'classnames';
import { ErrorMessage } from '../../../../../common/ErrorMessage/ErrorMessage';
import classes from './Delivery.module.scss';
import { useDispatch } from 'react-redux';
import { actions } from '../../../../../../redux/order/orderReducer';
import { NextButton } from '../../../NextButton/NextButton';
import {
    Delivery,
    PaymentMethods,
    ReceivingMethods,
} from '../../../../../../api/orderAPI';

type FormData = {
    date: string;
    addressDelivery: string;
    apartament: string;
    time: string;
    comment: string;
};

type Props = {
    changeNextOrderStep: () => void;
};

export const DeliveryBlock: React.FC<Props> = ({ changeNextOrderStep }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<FormData>();

    const dispatch = useDispatch();

    const onSubmit = (formData: FormData) => {
        const data: Delivery = {
            ...formData,
            method: ReceivingMethods.DELIVERY,
        };
        dispatch(actions.setReceivingMethod(data));
        changeNextOrderStep();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.deliveryForm}
        >
            <div className="form-block" style={{ gridArea: 'date' }}>
                <label htmlFor="date">Дата</label>
                <Field
                    type="text"
                    id="date"
                    name="date"
                    register={register}
                    options={{ required: 'Поле обязательное' }}
                    className={cn({
                        inputError: errors.date,
                        inputCorrect: !errors.date && dirtyFields.date,
                    })}
                    list="dates"
                />
                <ErrorMessage error={errors.date} />
            </div>
            <div className="form-block" style={{ gridArea: 'street' }}>
                <label htmlFor="addressDelivery">Улица, дом/корпус</label>
                <Field
                    type="text"
                    id="addressDelivery"
                    name="addressDelivery"
                    register={register}
                    options={{ required: 'Поле обязательное' }}
                    className={cn({
                        inputError: errors.addressDelivery,
                        inputCorrect:
                            !errors.addressDelivery &&
                            dirtyFields.addressDelivery,
                    })}
                />
                <ErrorMessage error={errors.addressDelivery} />
            </div>
            <div className="form-block" style={{ gridArea: 'time' }}>
                <label htmlFor="time">Время</label>
                <Field
                    type="text"
                    id="time"
                    name="time"
                    register={register}
                    options={{ required: 'Поле обязательное' }}
                    className={cn({
                        inputError: errors.time,
                        inputCorrect: !errors.time && dirtyFields.time,
                    })}
                    list="timeList"
                />
                <ErrorMessage error={errors.time} />
            </div>
            <div className="form-block" style={{ gridArea: 'apartament' }}>
                <label htmlFor="apartament">Квартира</label>
                <Field
                    type="text"
                    id="apartament"
                    name="apartament"
                    register={register}
                    options={{ required: 'Поле обязательное' }}
                    className={cn({
                        inputError: errors.apartament,
                        inputCorrect:
                            !errors.apartament && dirtyFields.apartament,
                    })}
                />
                <ErrorMessage error={errors.apartament} />
            </div>
            <div className="form-block" style={{ gridArea: 'comment' }}>
                <label htmlFor="comment">Комментарий курьеру</label>
                <Field
                    type="text"
                    id="comment"
                    name="comment"
                    register={register}
                    className={cn({
                        inputError: errors.comment,
                        inputCorrect: !errors.comment && dirtyFields.comment,
                    })}
                />
                <ErrorMessage error={errors.comment} />
            </div>
            <datalist id="dates">
                <option value="Завтра, 11 июля, вс"></option>
                <option value="Завтра, 12 июля, пн"></option>
                <option value="Завтра, 13 июля, вт"></option>
            </datalist>
            <datalist id="timeList">
                <option value="15:00 - 18:00 (бесплатно)"></option>
                <option value="12:00 - 15:00 (бесплатно)"></option>
                <option value="09:00 - 12:00 (бесплатно)"></option>
            </datalist>
            <NextButton />
        </form>
    );
};
