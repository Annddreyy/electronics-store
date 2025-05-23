import { NavLink } from 'react-router-dom';
import menu from './../../../../assets/header/menu-icon.png';
import { Link } from '../../../../types';
import classes from './Nav.module.scss';
import { v4 } from 'uuid';

const links: Link[] = [
    { link: '/catalog', title: 'Каталог товаров' },
    { link: '/about-us', title: 'О компании' },
    { link: '/offers', title: 'Акции' },
    { link: '/installment', title: 'Рассрочка 0|0|18' },
    { link: '/warranty-conditions', title: 'Сервис и гарантия' },
    { link: '/opt-dropshipping', title: 'Опт/дропшиппинг' },
    { link: '/contacts', title: 'Контакты' },
];

export const Nav: React.FC = () => {
    const linksElements = links.map((link) => (
        <li key={v4()}>
            <NavLink to={link.link}>{link.title}</NavLink>
        </li>
    ));

    return (
        <nav className={classes.nav}>
            <div className="container">
                <ul>
                    <li className="bg-primary-dark-4">
                        <NavLink to={links[0].link}>
                            <img src={menu} alt="меню" />
                            <span>{links[0].title}</span>
                        </NavLink>
                    </li>
                    {linksElements.slice(1, linksElements.length)}
                </ul>
            </div>
        </nav>
    );
};
