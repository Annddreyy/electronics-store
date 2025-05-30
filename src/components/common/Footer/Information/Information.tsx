import { NavLink } from 'react-router-dom';
import { v4 } from 'uuid';
import { Link } from '../../../../types';
import logo from './../../../../assets/logo.png';
import classes from './Information.module.scss';

type FooterLinks = {
    group: string;
    links: Link[];
};

export const Information: React.FC = () => {
    const links: FooterLinks[] = [
        {
            group: 'Для клиента',
            links: [
                { link: '/how-buy', title: 'Как купить' },
                { link: '/delivery-and-payment', title: 'Доставка и оплата' },
                { link: '/credit', title: 'Кредит' },
                {
                    link: '/confidentiality-politics',
                    title: 'Политка конфиденциальности',
                },
                { link: '/faq', title: 'Вопросы и ответы (F.A.Q.)' },
                { link: '/warranty-conditions', title: 'Сервис и гаратия' },
            ],
        },
        {
            group: 'О магазине',
            links: [
                { link: '/reviews', title: 'Отзывы' },
                { link: '/advantages', title: 'Наши преимущества' },
                { link: '/history', title: 'История компании' },
                { link: '/cooperation', title: 'Сотрудничество' },
                { link: '/affiliate-program', title: 'Партнёрская программа' },
                { link: '/vacancies', title: 'Вакансии' },
                { link: '/news', title: 'Новости' },
            ],
        },
        {
            group: 'Сотрудничество',
            links: [
                { link: '/wholesale', title: 'Оптом' },
                { link: '/dropshipping', title: 'Дропшиппинг' },
            ],
        },
    ];

    const linksGroups = links.map((group) => (
        <div className={classes.linksGroup} key={v4()}>
            <h3 className={classes.groupTitle}>{group.group}</h3>
            <div className={classes.links}>
                {group.links.map((link) => (
                    <NavLink to={link.link} className={classes.link} key={v4()}>
                        {link.title}
                    </NavLink>
                ))}
            </div>
        </div>
    ));

    return (
        <div className={classes.information}>
            <div className={classes.contacts}>
                <img src={logo} alt="" />
                <div className={classes.connection}>
                    <p className={classes.phone}>+7 (958) 111-95-03</p>
                    <p className={classes.phone}>+7 (812) 660-50-54</p>
                    <p className={classes.time}>Пн-вс: с 10:00 до 21:00</p>
                </div>
                <div className={classes.addresses}>
                    <address>Проспект Стачек 67 к.5</address>
                    <address>Лиговский проспект 205</address>
                    <address>Гражданский проспект, 116 к.5</address>
                </div>
            </div>
            {linksGroups}
        </div>
    );
};
