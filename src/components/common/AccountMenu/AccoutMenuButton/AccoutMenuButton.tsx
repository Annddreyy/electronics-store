import { NavLink } from 'react-router-dom';
import { Link } from '../../../../types';
import classes from './AccoutMenuButton.module.scss';

export const AccoutMenuButton: React.FC<Link> = ({ link, title }) => {
    return (
        <NavLink to={`/personal-cabinet${link}`} className={classes.button}>
            {title}
        </NavLink>
    );
};
