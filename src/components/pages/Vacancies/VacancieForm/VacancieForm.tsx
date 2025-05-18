import { useForm } from 'react-hook-form';
import { Field } from '../../../common/FormElements/Field';
import classes from './VacancieForm.module.scss';
import cn from 'classnames';
import { ErrorMessage } from '../../../common/ErrorMessage/ErrorMessage';

type FormValuesType = {
    surname: string;
    name: string;
    patronymic?: string | undefined;
    phone: string;
    rezume: File;
    transmittalLetter: string;
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
                <h2 className="sectionTitle">Присоединяйся к команде</h2>
                <div className="form-block">
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
                <div className="form-block">
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
                <div className="form-block">
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
                <div className="form-block">
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
                <div className="form-block">
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
                <div className="form-block">
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
                        placeholder="Введите номер телефона"
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
                <button className="button-primary">Отправить</button>
            </form>
        </>
    );
};
