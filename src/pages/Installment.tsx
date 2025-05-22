import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { InstallmentForm } from './../components/pages/Installment/InstallmentForm';
import { Link } from '../types';
import imgTop from './../assets/installment/img.png';
import imgBottom from './../assets/installment/img_2.png';
import classes from './../components/pages/Installment/Installment.module.scss';
import cn from 'classnames';

const Installment: React.FC = () => {
    const path: Link[] = [
        { link: '/', title: 'Главная' },
        { link: '/installment', title: 'Рассрочка 0|0|18' },
    ];

    return (
        <>
            <Header />
            <div className={cn('container', classes.installment)}>
                <BreadCrumbs path={path} />
                <h1 className="pageTitle">Рассрочка 0|0|18</h1>
                <img src={imgTop} alt="" />
                <h2 className="sectionTitle">Как работает рассрочка</h2>
                <p>
                    ТЕПЕРЬ КАРТУ ХАЛВА МОЖНО ОФОРМИТЬ В СЕТИ НАШИХ МАГАЗИНОВ
                    СОВЕРШЕННО БЕСПЛАТНО. Это займёт не более 10 минут. С собой
                    необходимо иметь лишь паспорт.
                </p>
                <br />
                <p>
                    С картой «Халва» сотрудничают более 200 000 партнёров
                    от продуктовых магазинов до компаний продающих крупную
                    бытовую технику и даже мебель, у которых покупки можно
                    делать в бесплатную рассрочку. Сумма каждой такой покупки
                    делится на равные части (по количеству месяцев рассрочки
                    у партнёра). Раз в месяц «части» по всем покупкам
                    суммируются и выставляются единым Платежом по рассрочке
                    (дата выставления платежа равна дате оформления карты).
                </p>
                <br />
                <p>
                    <mark>
                        Проценты по вашей рассрочке за покупку в нашем магазине
                        платит за вас НАШ МАГАЗИН
                    </mark>
                </p>
                <br />
                <img src={imgBottom} alt="" />
                <p>
                    Подключите подписку "Халва Десятка" и делайте любые покупки
                    у партнеров с единым увеличенным сроком рассрочки 10
                    месяцев.
                </p>
                <br />
                <p>Можно расширить срок до 18-ти месяцев.</p>
                <br />
                <div className={classes.bottom}>
                    <InstallmentForm />
                    <div className={classes.information}>
                        <h2>Мобильное приложение "Совкомбанк - Халва"</h2>
                        <p>Мобильный банковский офис, который всегда с вами:</p>
                        <ul>
                            <li>контроль вашей карты «Халва»</li>
                            <li>наиболее востребованные банковские функции</li>
                            <li>круглосуточный чат с поддержкой</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Installment;
