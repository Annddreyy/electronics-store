import { NavLink } from 'react-router-dom';
import { LinkType } from '../../../../types';
import logo from './../../../../assets/logo.png';
import classes from './Information.module.scss';
import cn from 'classnames';

type FooterLinksType = {
    group: string;
    links: LinkType[];
};

const links: FooterLinksType[] = [
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

export const Information: React.FC = () => {
    const linksGroups = links.map((group) => (
        <div className={classes.linksGroup}>
            <h3 className={cn(classes.groupTitle, 'text-gray')}>
                {group.group}
            </h3>
            <div className={classes.links}>
                {group.links.map((link) => (
                    <NavLink to={link.link} className={'text-black'}>
                        {link.title}
                    </NavLink>
                ))}
            </div>
        </div>
    ));

    return (
        <div className={cn(classes.information, 'text-gray')}>
            <div className={classes.contacts}>
                <img src={logo} alt="" />
                <div className={classes.connection}>
                    <p className={classes.phone}>+7 (958) 111-95-03</p>
                    <p className={classes.phone}>+7 (812) 660-50-54</p>
                    <p className={cn(classes.time, 'text-gray')}>
                        Пн-вс: с 10:00 до 21:00
                    </p>
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
