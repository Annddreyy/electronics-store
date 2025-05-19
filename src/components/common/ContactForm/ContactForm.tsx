import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { Checkbox } from '../FormElements/Checkbox/Checkbox';
import { Field } from '../FormElements/Field';
import classes from './Contact.module.scss';

type FormValuesType = {
    name: string;
    phone: string;
    message: string;
    agree: boolean;
};

type PropsType = {
    formTitle: string;
};

export const ContactForm: React.FC<PropsType> = ({ formTitle }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<FormValuesType>();

    const onSubmit = (data: FormValuesType) => {
        console.log(data);
    };

    return (
        <section>
            <h2 className="pageTitle">{formTitle}</h2>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-block" style={{ gridArea: 'name' }}>
                    <label htmlFor="name">Имя</label>
                    <Field
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Введите имя"
                        register={register}
                        options={{ required: 'Поле обязательное' }}
                        className={cn({
                            inputError: errors.name,
                            inputCorrect: !errors.name && dirtyFields.name,
                        })}
                    />
                    <ErrorMessage error={errors.name} />
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
                        placeholder="Введите номер телефона"
                        className={cn({
                            inputError: errors.phone,
                            inputCorrect: !errors.phone && dirtyFields.phone,
                        })}
                    />
                    <ErrorMessage error={errors.phone} />
                </div>
                <div className="form-block" style={{ gridArea: 'message' }}>
                    <label htmlFor="message">Сообщение</label>
                    <Field
                        id="message"
                        type="textarea"
                        name="message"
                        placeholder="Введите сообщение"
                        register={register}
                        options={{
                            required: 'Поле обязательное',
                            maxLength: {
                                value: 300,
                                message:
                                    'Макисмальная длина сообщения - 300 символов',
                            },
                        }}
                        className={cn({
                            inputError: errors.message,
                            inputCorrect:
                                !errors.message && dirtyFields.message,
                        })}
                        style={{
                            resize: 'none',
                            height: '100%',
                            width: '100%',
                        }}
                    />
                    <ErrorMessage error={errors.message} />
                </div>
                <button
                    className="button-primary"
                    style={{ gridArea: 'button' }}
                >
                    Отправить
                </button>
                <div style={{ gridArea: 'checkbox' }}>
                    <Checkbox
                        text="Отправляя данную форму вы соглашаетесь с политикой конфиденциальности"
                        name="agree"
                        register={register}
                        options={{
                            required: 'Вы должны подтверить свое согласие',
                        }}
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
