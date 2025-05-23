import { useForm } from 'react-hook-form';
import { Field } from '../FormElements/Field';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { PasswordInput } from '../FormElements/PasswordInput/PasswordInput';
import classes from './AuthorizationForm.module.scss';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { auth } from '../../../redux/auth/authThunks';
import { AppDispatch } from '../../../redux/store';

type FormData = {
    login: string;
    password: string;
};

type Props = {
    setAuthClose: () => void;
};

export const AuthorizationForm: React.FC<Props> = ({ setAuthClose }) => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<FormData>();

    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = (formData: FormData) => {
        alert(1);
        dispatch(auth());
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
                        <label htmlFor="login">Логин</label>
                        <Field
                            type="text"
                            id="login"
                            name="login"
                            // options={{
                            //     required: 'Поле обязательное',
                            // }}
                            register={register}
                            placeholder="Введите логин"
                            className={cn({
                                inputError: errors.login,
                                inputCorrect:
                                    !errors.login && dirtyFields.login,
                            })}
                        />
                        <ErrorMessage error={errors.login} />
                    </div>
                    <div className="form-block">
                        <label htmlFor="password">Пароль</label>
                        <PasswordInput
                            id="password"
                            name="password"
                            // options={{
                            //     required: 'Поле обязательное 1',
                            // }}
                            register={register}
                            placeholder="Введите пароль"
                            className={cn({
                                inputError: errors.password,
                                inputCorrect:
                                    !errors.password && dirtyFields.password,
                            })}
                        />
                        <ErrorMessage error={errors.password} />
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
