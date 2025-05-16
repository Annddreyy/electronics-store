import classes from './BuyConditions.module.scss';
import shippingImg from './../../../../../assets/product/shipping.png';
import purseImg from './../../../../../assets/product/purse.png';

export const BuyConditions: React.FC = () => {
    return (
        <div className={classes.information}>
            <div className={classes.block}>
                <img src={shippingImg} alt="" />
                <div className={classes.text}>
                    <strong>Доставка</strong>
                    <p>
                        Доставим по Санкт-Петербургу в течение 2 часов
                        и бесплатно. Стоимость доставки в другие города
                        уточняйте у менеджера.
                    </p>
                </div>
            </div>
            <div className={classes.block}>
                <img src={purseImg} alt="" />
                <div className={classes.text}>
                    <strong>Оплата</strong>
                    <p>
                        Принимаем к оплате как наличный, так и безналичный
                        расчёт. Возможна оплата электронными кошельками.
                    </p>
                </div>
            </div>
        </div>
    );
};
