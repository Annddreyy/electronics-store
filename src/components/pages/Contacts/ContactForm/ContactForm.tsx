import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../../common/ErrorMessage/ErrorMessage';
import { BaseInput } from '../../../common/FormElements/BaseInput';
import { Checkbox } from '../../../common/FormElements/Checkbox/Checkbox';
import { Textarea } from '../../../common/FormElements/Textarea/Textarea';
import classes from './Contact.module.scss';

type FormValuesType = {
    name: string;
    phone: string;
    message: string;
    agree: boolean;
};

export const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<FormValuesType>();

    const onSubmit = (data: FormValuesType) => {
        console.log(data);
        console.log(errors);
    };

    return (
        <section>
            <h2 className="pageTitle">Связаться с нами</h2>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-block" style={{ gridArea: 'name' }}>
                    <label htmlFor="name">Имя</label>
                    <BaseInput
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Введите имя"
                        register={register}
                        options={{ required: 'Это поле является обязательным' }}
                        style={{ width: '100%' }}
                        className={cn({
                            inputError: errors.name,
                            inputCorrect: !errors.name && dirtyFields.name,
                        })}
                    />
                    <ErrorMessage error={errors.name} />
                </div>
                <div className="form-block" style={{ gridArea: 'phone' }}>
                    <label htmlFor="phone">Телефон</label>
                    <BaseInput
                        type="text"
                        id="phone"
                        name="phone"
                        options={{
                            required: 'Это поле является обязательным',
                            pattern: {
                                value: /^\+7\(\d{3}\)-(\d{3})-(\d{2})-(\d{2})$/,
                                message: 'Шаблон: +7(999)-999-99-99',
                            },
                        }}
                        register={register}
                        placeholder="Введите номер телефона"
                        style={{ width: '100%' }}
                        className={cn({ inputError: errors.phone })}
                    />
                    <ErrorMessage error={errors.phone} />
                </div>
                <div className="form-block" style={{ gridArea: 'message' }}>
                    <label htmlFor="">Сообщение</label>
                    <Textarea
                        placeholder="Введите сообщение"
                        style={{
                            resize: 'none',
                            height: '100%',
                            width: '100%',
                        }}
                    />
                </div>
                <button
                    className="button-primary"
                    style={{ gridArea: 'button' }}
                >
                    Отправить
                </button>
                <Checkbox
                    text="Отправляя данную форму вы соглашаетесь с политикой конфиденциальности"
                    style={{ gridArea: 'checkbox' }}
                />
            </form>
        </section>
    );
};
