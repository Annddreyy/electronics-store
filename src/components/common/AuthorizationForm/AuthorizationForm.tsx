import { useForm } from 'react-hook-form';
import classes from './AuthorizationForm.module.scss';
import { Field } from '../FormElements/Field';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import cn from 'classnames';
import { PasswordInput } from '../FormElements/PasswordInput/PasswordInput';

type FormDataType = {
    login: string;
    password: string;
};

type PropsType = {
    setAuthClose: () => void;
};

export const AuthorizationForm: React.FC<PropsType> = ({ setAuthClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<FormDataType>();

    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
    };

    return (
        <div className={classes.overlay}>
            <form
                className={classes.authForm}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={classes.top}>
                    <h2 className="sectionTitle">Вход</h2>
                    <button
                        className={classes.closeButton}
                        onClick={setAuthClose}
                    >
                        x
                    </button>
                </div>
                <div className={classes.bottom}>
                    <div className="form-block">
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
                                inputError: errors.login,
                                inputCorrect:
                                    !errors.login && dirtyFields.login,
                            })}
                        />
                        <ErrorMessage error={errors.login} />
                    </div>
                    <div className="form-block">
                        <label htmlFor="phone">Телефон</label>
                        <PasswordInput
                            id="password"
                            name="password"
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
                                inputError: errors.login,
                                inputCorrect:
                                    !errors.login && dirtyFields.login,
                            })}
                        />
                        <ErrorMessage error={errors.login} />
                    </div>
                    <button
                        className={cn('text-primary', classes.forgotPassword)}
                    >
                        Забыли пароль
                    </button>
                    <div className={classes.checkbox}>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Запомнить меня</label>
                    </div>
                    <button className="button-primary">Войти</button>
                    <button className="text-primary">Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
};
