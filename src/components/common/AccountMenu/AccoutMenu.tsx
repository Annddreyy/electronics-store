import { Link } from '../../../types';
import { AccoutMenuButton } from './AccoutMenuButton/AccoutMenuButton';
import { v4 } from 'uuid';
import classes from './AccoutMenu.module.scss';

export const AccoutMenu: React.FC = () => {
    const buttonsLinks: Link[] = [
        { link: '/main', title: 'Общие сведения' },
        { link: '/personal-data', title: 'Личные данные' },
        { link: '/history', title: 'История покупок' },
        { link: '/favorites', title: 'Избранное' },
        { link: '/pass', title: 'Сменить пароль' },
        { link: '/logot', title: 'Выйти' },
    ];
    const buttonsElem = buttonsLinks.map((button) => (
        <AccoutMenuButton {...button} key={v4()} />
    ));
    return <section className={classes.links}>{buttonsElem}</section>;
};
