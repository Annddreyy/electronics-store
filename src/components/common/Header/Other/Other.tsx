import { NavLink } from 'react-router-dom';
import classes from './Other.module.scss';
import cn from 'classnames';
import { LinkType } from '../../../../types';

const links: LinkType[] = [
    { link: '/about-us', title: 'О компании' },
    { link: '/offers', title: 'Акции' },
    { link: '/installment', title: 'Рассрочка 0|0|18' },
    { link: '/warranty-conditions', title: 'Сервис и гарантия' },
    { link: '/opt-dropshipping', title: 'Опт/дропшиппинг' },
    { link: '/contacts', title: 'Контакты' },
];

type PropsType = {
    closeBlock: () => void;
};

export const Other: React.FC<PropsType> = ({ closeBlock }) => {
    const linksElements = links.map((link) => (
        <div className={classes.link}>
            <NavLink to={link.link}>{link.title}</NavLink>
        </div>
    ));
    return (
        <div className={classes.overlay}>
            <section className={classes.catalog}>
                <div className={classes.top}>
                    <h2 className="pageTitle">Ещё</h2>
                    <button onClick={closeBlock}>x</button>
                </div>
                <div className={cn(classes.links, 'navigation')}>
                    {linksElements}
                </div>
            </section>
        </div>
    );
};
