import { useForm } from 'react-hook-form';
import { Field } from '../../../common/FormElements/Field';
import { ErrorMessage } from '../../../common/ErrorMessage/ErrorMessage';
import cn from 'classnames';
import classes from './PersonalData.module.scss';

enum PaymentMethodEnum {}

enum DeliveryMethodEnum {}

type FormData = {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    index: number;
    paymentMethod: PaymentMethodEnum;
    deliveryMethod: DeliveryMethodEnum;
    avatar: File;
};

export const PersonalData: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<FormData>();

    const onSubmit = (formData: FormData) => {
        console.log(formData);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={classes.personalData}
        >
            <div className="form-block" style={{ gridArea: 'name' }}>
                <label htmlFor="name">Имя</label>
                <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Не указано"
                    register={register}
                    options={{
                        required: 'Поле обязательное',
                    }}
                    className={cn({
                        inputError: errors.name,
                        inputCorrect: !errors.name && dirtyFields.name,
                    })}
                />
                <ErrorMessage error={errors.name} />
            </div>
            <div className="form-block" style={{ gridArea: 'email' }}>
                <label htmlFor="email">Эл. почта</label>
                <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Введите email"
                    register={register}
                    options={{
                        required: 'Не указан',
                    }}
                    className={cn({
                        inputError: errors.email,
                        inputCorrect: !errors.email && dirtyFields.email,
                    })}
                />
                <ErrorMessage error={errors.email} />
            </div>
            <div className="form-block" style={{ gridArea: 'phone' }}>
                <label htmlFor="phone">Телефон</label>
                <Field
                    type="text"
                    id="phone"
                    name="phone"
                    options={{
                        required: 'Поле обязательное',
                        pattern: {
                            value: /^\+7\(\d{3}\)(\d{3})-(\d{2})-(\d{2})$/,
                            message: 'Шаблон: +7(999)999-99-99',
                        },
                    }}
                    register={register}
                    placeholder="Не указан"
                    style={{ width: '100%' }}
                    className={cn({
                        inputError: errors.phone,
                        inputCorrect: !errors.phone && dirtyFields.phone,
                    })}
                />
                <ErrorMessage error={errors.phone} />
            </div>
            <div className="form-block" style={{ gridArea: 'city' }}>
                <label htmlFor="city">Город</label>
                <Field
                    type="text"
                    id="city"
                    name="city"
                    options={{
                        required: 'Поле обязательное',
                    }}
                    register={register}
                    placeholder="Не указан"
                    className={cn({
                        inputError: errors.city,
                        inputCorrect: !errors.city && dirtyFields.city,
                    })}
                />
                <ErrorMessage error={errors.city} />
            </div>
            <div className="form-block" style={{ gridArea: 'index' }}>
                <label htmlFor="index">Индекс</label>
                <Field
                    type="text"
                    id="index"
                    name="index"
                    options={{
                        required: 'Поле обязательное',
                    }}
                    register={register}
                    placeholder="Не указан"
                    className={cn({
                        inputError: errors.index,
                        inputCorrect: !errors.index && dirtyFields.index,
                    })}
                />
                <ErrorMessage error={errors.index} />
            </div>
            <div className="form-block" style={{ gridArea: 'address' }}>
                <label htmlFor="address">Адрес</label>
                <Field
                    type="text"
                    id="address"
                    name="address"
                    options={{
                        required: 'Поле обязательное',
                    }}
                    register={register}
                    placeholder="Не указан"
                    className={cn({
                        inputError: errors.address,
                        inputCorrect: !errors.address && dirtyFields.address,
                    })}
                />
                <ErrorMessage error={errors.address} />
            </div>
            <div className="form-block" style={{ gridArea: 'paymentMethod' }}>
                <label htmlFor="paymentMethod">
                    Предпочитаемый способ оплаты
                </label>
                <Field
                    type="text"
                    id="paymentMethod"
                    name="paymentMethod"
                    register={register}
                    placeholder="Не указан"
                    className={cn({
                        inputError: errors.paymentMethod,
                        inputCorrect:
                            !errors.paymentMethod && dirtyFields.paymentMethod,
                    })}
                />
                <ErrorMessage error={errors.paymentMethod} />
            </div>
            <div className="form-block" style={{ gridArea: 'deliveryMethod' }}>
                <label htmlFor="deliveryMethod">
                    Предпочитаемый способ доставки
                </label>
                <Field
                    type="text"
                    id="deliveryMethod"
                    name="deliveryMethod"
                    register={register}
                    placeholder="Не указан"
                    className={cn({
                        inputError: errors.deliveryMethod,
                        inputCorrect:
                            !errors.deliveryMethod &&
                            dirtyFields.deliveryMethod,
                    })}
                />
                <ErrorMessage error={errors.deliveryMethod} />
            </div>
            <div className="form-block" style={{ gridArea: 'avatar' }}>
                <label htmlFor="avatar">Аватар</label>
                <Field
                    type="file"
                    id="avatar"
                    name="avatar"
                    register={register}
                    placeholder="Не указан"
                    className={cn({
                        inputError: errors.avatar,
                        inputCorrect: !errors.avatar && dirtyFields.avatar,
                    })}
                    list="deliveryMethodList"
                />
                <ErrorMessage error={errors.avatar} />
            </div>
            <button className="button-primary" style={{ gridArea: 'button' }}>
                Сохранить
            </button>

            <datalist id="deliveryMethodList">
                <option value="Доставка курьером CDEK"></option>
                <option value="Доставка почтой"></option>
                <option value="Доставка до магазина"></option>
            </datalist>
        </form>
    );
};
