import { useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import { ProductCard } from '../ProductCard/ProductCard';
import { ProductType } from '../../../redux/products/productsReducer';
import classes from './ProductCardsGroup.module.scss';
import { NavLink } from 'react-router-dom';

type PropsType = {
    title: string;
    selector: (state: AppStateType) => ProductType[];
};

export const ProductCardsGroup: React.FC<PropsType> = ({ title, selector }) => {
    const products = useSelector(selector).slice(0, 4);

    const productsElem = products.map((product) => (
        <ProductCard {...product} key={product.id} />
    ));

    return (
        <div className={classes.productsGroup}>
            <div className={classes.top}>
                <h2 className={classes.title}>{title}</h2>
                <NavLink to={'/products'} className={'text-primary-dark-4'}>
                    Все товары ▶
                </NavLink>
            </div>
            <div className={classes.productCards}>{productsElem}</div>
        </div>
    );
};
