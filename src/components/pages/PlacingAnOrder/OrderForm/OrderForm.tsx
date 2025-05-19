import { useForm } from 'react-hook-form';
import { Checkbox } from '../../../common/FormElements/Checkbox/Checkbox';
import classes from './OrderForm.module.scss';
import { ErrorMessage } from '../../../common/ErrorMessage/ErrorMessage';
import cn from 'classnames';

type PropsType = {
    productsCount: number;
    sum: number;
};

type FormValuesType = {
    agree: boolean;
};

export const OrderForm: React.FC<PropsType> = ({ productsCount, sum }) => {
    let deliveryCost;

    if (sum >= 10000) {
        deliveryCost = 0;
    } else if (sum >= 5000) {
        deliveryCost = 500;
    } else {
        deliveryCost = 2000;
    }

    const {
        register,
        handleSubmit,
        formState: { errors, dirtyFields },
    } = useForm<FormValuesType>();

    const onSubmit = (data: FormValuesType) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.orderForm}>
            <section className={classes.order}>
                <div className={classes.top}>
                    <h2 className="sectionTitle">Итого</h2>
                    <p className={classes.informationRow}>
                        <span className={classes.information}>
                            {productsCount} товара на сумму
                        </span>
                        <span>{sum} ₽</span>
                    </p>
                    <p className={classes.informationRow}>
                        <span className={classes.information}>
                            Стоимость доставки
                        </span>
                        <span>
                            {deliveryCost > 0
                                ? `${deliveryCost} ₽`
                                : 'бесплатно'}
                        </span>
                    </p>
                </div>
                <div className={classes.bottom}>
                    <p className={classes.informationRow}>
                        <span className={classes.information}>К оплате</span>
                        <span className={classes.totalSum}>
                            {sum + deliveryCost} ₽
                        </span>
                    </p>
                    <button className="button-primary">Оформить заказ</button>
                </div>
            </section>
            <div className={classes.checkbox}>
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
    );
};
