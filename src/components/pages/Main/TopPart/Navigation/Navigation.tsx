import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.scss';
import { TopLinksType } from '../TopPart';
import cn from 'classnames';

export const Navigation: React.FC<TopLinksType> = ({ links }) => {
    return (
        <div className={classes.links}>
            {links.map((link) => (
                <NavLink
                    key={link.link}
                    to={link.link}
                    className={cn(classes.link, 'bg-secondary')}
                >
                    <img src={link.img} alt="" />
                    <span className={classes.title}>{link.title}</span>
                </NavLink>
            ))}
        </div>
    );
};
