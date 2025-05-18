import { LinkType } from '../../../types';
import { AccoutMenuButton } from './AccoutMenuButton/AccoutMenuButton';
import classes from './AccoutMenu.module.scss';

export const AccoutMenu: React.FC = () => {
    const buttonsLinks: LinkType[] = [
        { link: '/main', title: 'Общие сведения' },
        { link: '/personal-data', title: 'Личные данные' },
        { link: '/history', title: 'История покупок' },
        { link: '/favorites', title: 'Избранное' },
        { link: '/pass', title: 'Сменить пароль' },
        { link: '/logot', title: 'Выйти' },
    ];
    const buttonsElem = buttonsLinks.map((button) => (
        <AccoutMenuButton {...button} />
    ));
    return <section className={classes.links}>{buttonsElem}</section>;
};
