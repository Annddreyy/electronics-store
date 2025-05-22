import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { v4 } from 'uuid';
import { TopLinks } from '../TopPart';
import classes from './Navigation.module.scss';

export const Navigation: React.FC<TopLinks> = ({ links }) => {
    return (
        <div className={cn(classes.links, 'navigation')}>
            {links.map((link) => (
                <NavLink key={v4()} to={link.link} className={classes.link}>
                    <img src={link.img} alt="" />
                    <span className={classes.title}>{link.title}</span>
                </NavLink>
            ))}
        </div>
    );
};
