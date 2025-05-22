import { NavLink } from 'react-router-dom';
import { LinkType } from '../../../types';
import classes from './BreadCrumbs.module.scss';
import { v4 } from 'uuid';

type PropsType = {
    path: LinkType[];
};

export const BreadCrumbs: React.FC<PropsType> = ({ path }) => {
    const linkElems = path.map((link, index) => (
        <NavLink
            to={link.link}
            className={classes.link}
            data-active={index === path.length - 1 || undefined}
            key={v4()}
        >
            {link.title}
        </NavLink>
    ));
    return <div className={classes.links}>{linkElems}</div>;
};
