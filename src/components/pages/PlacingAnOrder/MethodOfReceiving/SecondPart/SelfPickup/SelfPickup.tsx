import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '../../../../../common/ErrorMessage/ErrorMessage';
import { Field } from '../../../../../common/FormElements/Field';
import { MapComponent } from './../../../../Contacts/Information/Map/Map';
import styles from './SelfPickup.module.scss';

type FormDataValues = {
    magazine: string;
};

export const SelfPickup: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<FormDataValues>();

    const onSubmit = (formData: FormDataValues) => {
        console.log(formData);
    };

    const magazines = [
        { address: 'address1', workingTime: 'ПН-ВС 09:00 - 22:00' },
        { address: 'address2', workingTime: 'ПН-ВС 09:00 - 22:00' },
        { address: 'address3', workingTime: 'ПН-ВС 09:00 - 22:00' },
        { address: 'address4', workingTime: 'ПН-ВС 09:00 - 22:00' },
        { address: 'address5', workingTime: 'ПН-ВС 09:00 - 22:00' },
        { address: 'address6', workingTime: 'ПН-ВС 09:00 - 22:00' },
        { address: 'address7', workingTime: 'ПН-ВС 09:00 - 22:00' },
        { address: 'address8', workingTime: 'ПН-ВС 09:00 - 22:00' },
        { address: 'address9', workingTime: 'ПН-ВС 09:00 - 22:00' },
        { address: 'address10', workingTime: 'ПН-ВС 09:00 - 22:00' },
    ];

    const magazinesElems = magazines.map((magazine, index) => (
        <div className={cn('form-block', styles.radio)}>
            <Field
                type="radio"
                id={`magazine_${index}`}
                name="magazine"
                register={register}
                options={{
                    required: 'Это поле обязательное',
                }}
                className={cn({
                    inputError: errors.magazine,
                })}
                style={{ border: 'none' }}
            />
            <label htmlFor={`magazine_${index}`}>
                <div className={styles.radioInformation}>
                    <p className={styles.address}>{magazine.address}</p>
                    <p className={styles.workingTime}>{magazine.workingTime}</p>
                </div>
            </label>
            <ErrorMessage error={errors.magazine} />
        </div>
    ));

    return (
        <div className={styles.information}>
            <form onBlur={handleSubmit(onSubmit)}>
                <h3>Товар доступен в 15 магазинах</h3>
                <div className={styles.magazines}>{magazinesElems}</div>
            </form>
            <MapComponent />
        </div>
    );
};
