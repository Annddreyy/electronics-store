import { NavLink } from 'react-router-dom';
import menu from './../../../../assets/header/menu-icon.png';
import classes from './Nav.module.scss';
import { LinkType } from '../../../../types';

const links: LinkType[] = [
    { link: '/catalog', title: 'Каталог товаров' },
    { link: '/about-company', title: 'О компании' },
    { link: '/promotions', title: 'Акции' },
    { link: '/installment-plan', title: 'Рассрочка 0|0|18' },
    { link: '/service', title: 'Сервис и гарантия' },
    { link: '/opt-dropshipping', title: 'Опт/дропшиппинг' },
    { link: '/contacts', title: 'Контакты' },
];

export const Nav: React.FC = () => {
    const linksElements = links.map((link) => (
        <li>
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
                    {linksElements}
                </ul>
            </div>
        </nav>
    );
};
