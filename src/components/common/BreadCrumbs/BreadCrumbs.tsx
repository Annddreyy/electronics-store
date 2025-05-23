import { NavLink } from 'react-router-dom';
import { Link } from '../../../types';
import { v4 } from 'uuid';
import classes from './BreadCrumbs.module.scss';

type Props = {
    path: Link[];
};

export const BreadCrumbs: React.FC<Props> = ({ path }) => {
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
