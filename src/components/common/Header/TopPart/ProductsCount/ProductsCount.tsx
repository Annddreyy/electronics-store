import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LinkString, Selector } from '../../../../../types';
import classes from './ProductsCount.module.scss';
import cn from 'classnames';

type Props = {
    selector: Selector<any>;
    link: LinkString;
    iconBase: string;
    iconActive?: string;
    className?: string;
};

export const ProductsCount: React.FC<Props> = ({
    selector,
    link,
    iconBase,
    iconActive,
    className,
}) => {
    const products = useSelector(selector).length;
    return (
        <NavLink to={link} className={cn(classes.block, className)}>
            {iconActive ? (
                <img src={products > 0 ? iconActive : iconBase} alt="" />
            ) : (
                <img src={iconBase} alt="" />
            )}
            {products > 0 && (
                <span className={classes.products}>{products}</span>
            )}
        </NavLink>
    );
};
