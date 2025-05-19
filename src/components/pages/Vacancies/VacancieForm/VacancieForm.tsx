import { useForm } from 'react-hook-form';
import { Field } from '../../../common/FormElements/Field';
import classes from './VacancieForm.module.scss';
import cn from 'classnames';
import { ErrorMessage } from '../../../common/ErrorMessage/ErrorMessage';
import { Checkbox } from '../../../common/FormElements/Checkbox/Checkbox';

type FormValuesType = {
    surname: string;
    name: string;
    patronymic?: string | undefined;
    phone: string;
    rezume: File;
    transmittalLetter: string;
    agree: boolean;
};

export const VacancieForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<FormValuesType>();

    const onSubmit = (formData: FormValuesType) => {
        console.log(onSubmit);
    };

    return (
        <>
            <form
                className={classes.vacancieForm}
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="sectionTitle" style={{ gridArea: 'title' }}>
                    Присоединяйся к команде
                </h2>
                <div className="form-block" style={{ gridArea: 'name' }}>
                    <label htmlFor="name">Имя</label>
                    <Field
                        type="text"
                        id="name"
                        name="name"
                        register={register}
                        placeholder="Введите имя"
                        options={{
                            required: 'Это поле обязательное',
                        }}
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
                        register={register}
                        placeholder="Введите фамилию"
                        options={{
                            required: 'Это поле обязательное',
                        }}
                        className={cn({
                            inputError: errors.surname,
                            inputCorrect:
                                !errors.surname && dirtyFields.surname,
                        })}
                    />
                    <ErrorMessage error={errors.surname} />
                </div>
                <div className="form-block" style={{ gridArea: 'patronymic' }}>
                    <label htmlFor="patronymic">Отчество</label>
                    <Field
                        type="text"
                        id="patronymic"
                        name="patronymic"
                        register={register}
                        placeholder="Введите отчество"
                        className={cn({
                            inputError: errors.patronymic,
                            inputCorrect:
                                !errors.patronymic && dirtyFields.patronymic,
                        })}
                    />
                    <ErrorMessage error={errors.surname} />
                </div>
                <div className="form-block" style={{ gridArea: 'phone' }}>
                    <label htmlFor="phone">Телефон</label>
                    <Field
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
                        className={cn({
                            inputError: errors.phone,
                            inputCorrect: !errors.phone && dirtyFields.phone,
                        })}
                    />
                    <ErrorMessage error={errors.phone} />
                </div>
                <div className="form-block" style={{ gridArea: 'rezume' }}>
                    <label htmlFor="rezume">Добавьте файл резюме</label>
                    <Field
                        type="file"
                        id="rezume"
                        name="rezume"
                        options={{
                            required: 'Это поле обязательное',
                        }}
                        register={register}
                        placeholder="Введите номер телефона"
                        style={{ width: '100%' }}
                        className={cn({
                            inputError: errors.rezume,
                            inputCorrect: !errors.rezume && dirtyFields.rezume,
                        })}
                        accept=".docx"
                    />
                    <ErrorMessage error={errors.rezume} />
                </div>
                <div
                    className="form-block"
                    style={{ gridArea: 'transmittalLetter' }}
                >
                    <label htmlFor="transmittalLetter">
                        Сопроводительное письмо
                    </label>
                    <Field
                        type="textarea"
                        id="transmittalLetter"
                        name="transmittalLetter"
                        options={{
                            required: 'Это поле обязательное',
                        }}
                        register={register}
                        placeholder="Введите сообщение"
                        style={{ width: '100%', resize: 'vertical' }}
                        className={cn({
                            inputError: errors.transmittalLetter,
                            inputCorrect:
                                !errors.transmittalLetter &&
                                dirtyFields.transmittalLetter,
                        })}
                    />
                    <ErrorMessage error={errors.transmittalLetter} />
                </div>
                <button
                    className="button-primary"
                    style={{ gridArea: 'button' }}
                >
                    Отправить
                </button>
                <div
                    style={{ gridArea: 'checkbox' }}
                    className={classes.checkbox}
                >
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
                <div
                    style={{ gridArea: 'phone-information' }}
                    className={classes.phoneInformation}
                >
                    <p className="sectionTitle" style={{ fontWeight: 600 }}>
                        Номер отдела кадров
                    </p>
                    <p className={classes.phoneNumber}>+7 (996) 067-00-96</p>
                </div>
            </form>
        </>
    );
};
