import { NavLink } from 'react-router-dom';
import { TopLinksType } from '../TopPart';
import classes from './Navigation.module.scss';

export const Navigation: React.FC<TopLinksType> = ({ links }) => {
    return (
        <div className={classes.links}>
            {links.map((link) => (
                <NavLink
                    key={link.link}
                    to={link.link}
                    className={classes.link}
                >
                    <img src={link.img} alt="" />
                    <span className={classes.title}>{link.title}</span>
                </NavLink>
            ))}
        </div>
    );
};
