import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LinkStringType, SelectorType } from '../../../../../types';
import classes from './ProductsCount.module.scss';

type PropsType = {
    selector: SelectorType<any>;
    link: LinkStringType;
    iconBase: string;
    iconActive?: string;
};

export const ProductsCount: React.FC<PropsType> = ({
    selector,
    link,
    iconBase,
    iconActive,
}) => {
    const products = useSelector(selector).length;
    return (
        <NavLink to={link} className={classes.block}>
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
