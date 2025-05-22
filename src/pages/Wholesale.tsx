import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { ContactForm } from '../components/common/ContactForm/ContactForm';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { Link } from '../types';

const Wholesale: React.FC = () => {
    const path: Link[] = [
        { link: '/', title: 'Главная' },
        { link: '/wholesale', title: 'Оптом' },
    ];

    return (
        <>
            <Header />
            <div className="container">
                <BreadCrumbs path={path} />
                <h1 className="pageTitle">Оптом</h1>
                <p>
                    Наш интернет-магазин специализируется на продаже различных
                    моделей электротранспорта:
                </p>
                <br />
                <ul>
                    <li>гироскутеров</li>
                    <li>мини-сигвеева</li>
                    <li>моноколес</li>
                    <li>электросамокатов</li>
                </ul>
                <br />
                <p>
                    Мы продаём гироскутеры как в розницу, так и оптом, по
                    специальным ценам. Приглашаем к сотрудничеству оптовых
                    покупателей!
                </p>
                <br />
                <p>
                    Вы хотите купить гироскутер в Москве оптом? Познакомьтесь с
                    нашими оптовыми ценами, и вы убедитесь: наше предложение
                    действительно выгодное. С нами сотрудничают десятки
                    партнёров в Москве и регионах, закупая гироскутеры оптом:
                    цена намного ниже розничной, что позволяет получать хороший
                    доход от бизнеса.
                </p>
                <br />
                <p>
                    Продавая гироскутеры оптом в Москве, мы готовы организовать
                    доставку любых моделей и в регионы России. Сотрудничайте с
                    нами – это выгодно!
                </p>
                <br />
                <p>Самые выгодные цены - от 5000 руб.!</p>
                <ContactForm formTitle="Заполните форму и мы свяжемся с вами" />
            </div>
            <Footer />
        </>
    );
};

export default Wholesale;
