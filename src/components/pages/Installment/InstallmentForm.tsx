import { useForm } from 'react-hook-form';
import { Field } from '../../common/FormElements/Field';
import { ErrorMessage } from '../../common/ErrorMessage/ErrorMessage';
import cn from 'classnames';
import classes from './InstallmentForm.module.scss';

type FormDataType = {
    name: string;
    phone: string;
};

export const InstallmentForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<FormDataType>();

    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <h2 className="sectionTitle">Оформить РАССРОЧКУ</h2>
            <div className="formContainer">
                <div className="form-block">
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
                        placeholder="Не указан"
                        style={{ width: '100%' }}
                        className={cn({
                            inputError: errors.phone,
                            inputCorrect: !errors.phone && dirtyFields.phone,
                        })}
                    />
                    <ErrorMessage error={errors.phone} />
                </div>
                <button className="button-primary">Отправить</button>
            </div>
        </form>
    );
};
