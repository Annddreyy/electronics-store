import { NavLink } from 'react-router-dom';
import { LinkType } from '../../../../types';
import logo from './../../../../assets/logo.png';
import classes from './Information.module.scss';

type FooterLinksType = {
    group: string;
    links: LinkType[];
};

const links: FooterLinksType[] = [
    {
        group: 'Для клиента',
        links: [
            { link: '/news', title: 'Как купить' },
            { link: '/news', title: 'Доставка и оплата' },
            { link: '/news', title: 'Кредит' },
            { link: '/news', title: 'Политка конфиденциальности' },
            { link: '/news', title: 'Вопросы и ответы (F.A.Q.)' },
            { link: '/news', title: 'Сервис и гаратия' },
        ],
    },
    {
        group: 'О магазине',
        links: [
            { link: '/news', title: 'Отзывы' },
            { link: '/news', title: 'Наши преимущества' },
            { link: '/news', title: 'История компании' },
            { link: '/news', title: 'Сотрудничество' },
            { link: '/news', title: 'Партнёрская программа' },
            { link: '/news', title: 'Вакансии' },
        ],
    },
    {
        group: 'Сотрудничество',
        links: [
            { link: '/news', title: 'Отптом' },
            { link: '/news', title: 'Дропшиппинг' },
        ],
    },
];

export const Information: React.FC = () => {
    const linksGroups = links.map((group) => (
        <div className={classes.linksGroup}>
            <h3 className={classes.groupTitle}>{group.group}</h3>
            <div className={classes.links}>
                {group.links.map((link) => (
                    <NavLink to={link.link}>{link.title}</NavLink>
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
