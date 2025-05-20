import { useForm } from 'react-hook-form';
import { Field } from '../../../common/FormElements/Field';
import cn from 'classnames';
import { ErrorMessage } from '../../../common/ErrorMessage/ErrorMessage';
import classes from './../PlacingAnOrder.module.scss';
import styles from './Recipient.module.scss';
import { Checkbox } from '../../../common/FormElements/Checkbox/Checkbox';

export type RecipientType = {
    name: string;
    surname: string;
    phone: string;
    email: string;
    agree: boolean;
};

export const Recipient: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<RecipientType>();

    return (
        <section className={classes.orderBlock}>
            <form className={styles.recipientForm}>
                <h2
                    className={classes.blockTitle}
                    style={{ gridArea: 'title' }}
                >
                    Получатель
                </h2>
                <div className="form-block" style={{ gridArea: 'name' }}>
                    <label htmlFor="name">Имя</label>
                    <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Например, Иван"
                        register={register}
                        options={{ required: 'Поле обязательное' }}
                        className={cn({
                            inputError: errors.name,
                            inputCorrect: !errors.name && dirtyFields.name,
                        })}
                    />
                    <ErrorMessage error={errors.name} />
                </div>
                <div className="form-block" style={{ gridArea: 'surname' }}>
                    <label htmlFor="surname">Фамилия</label>
                    <Field
                        type="text"
                        id="surname"
                        name="surname"
                        placeholder="Например, Иванов"
                        register={register}
                        options={{ required: 'Поле обязательное' }}
                        className={cn({
                            inputError: errors.surname,
                            inputCorrect:
                                !errors.surname && dirtyFields.surname,
                        })}
                    />
                    <ErrorMessage error={errors.surname} />
                </div>
                <div className="form-block" style={{ gridArea: 'phone' }}>
                    <label htmlFor="phone">Номер телефона</label>
                    <Field
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="+7 (9__)___-__-__"
                        register={register}
                        options={{ required: 'Поле обязательное' }}
                        className={cn({
                            inputError: errors.phone,
                            inputCorrect: !errors.phone && dirtyFields.phone,
                        })}
                    />
                    <ErrorMessage error={errors.phone} />
                </div>
                <div className="form-block" style={{ gridArea: 'email' }}>
                    <label htmlFor="email">Эл. почта</label>
                    <Field
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Например, smart@gmail.com"
                        register={register}
                        options={{ required: 'Поле обязательное' }}
                        className={cn({
                            inputError: errors.email,
                            inputCorrect: !errors.email && dirtyFields.email,
                        })}
                    />
                    <ErrorMessage error={errors.email} />
                </div>
                <div style={{ gridArea: 'checkbox' }}>
                    <Checkbox
                        text="Не перезванивать мне для подтверждения заказа"
                        name="agree"
                        register={register}
                        className={cn({
                            inputError: errors.agree,
                        })}
                    />
                    <ErrorMessage error={errors.agree} />
                </div>
            </form>
        </section>
    );
};
