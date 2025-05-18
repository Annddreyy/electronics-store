import { useSelector } from 'react-redux';
import { AppStateType } from '../../../../../redux/store';
import { NavLink } from 'react-router-dom';
import classes from './ProductsCount.module.scss';

type PropsType = {
    selector: (state: AppStateType) => any[];
    link: `/${string}`;
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
    console.log(iconActive);
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
