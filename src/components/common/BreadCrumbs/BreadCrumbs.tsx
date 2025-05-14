import { NavLink } from 'react-router-dom';
import { LinkType } from '../../../types';
import classes from './BreadCrumbs.module.scss';

type PropsType = {
    path: LinkType[];
};

export const BreadCrumbs: React.FC<PropsType> = ({ path }) => {
    const linkElems = path.map((link, index) => (
        <NavLink
            to={link.link}
            className={classes.link}
            data-active={index === path.length - 1 || undefined}
        >
            {link.title}
        </NavLink>
    ));
    return <div className={classes.links}>{linkElems}</div>;
};
