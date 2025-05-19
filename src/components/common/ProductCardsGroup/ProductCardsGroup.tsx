import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ProductType } from '../../../redux/products/productsReducer';
import { SelectorType } from '../../../types';
import { ProductCard } from '../ProductCard/ProductCard';
import classes from './ProductCardsGroup.module.scss';

type PropsType = {
    title: string;
    selector: SelectorType<ProductType>;
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
                <NavLink to={'/products'} className="text-primary-dark-4">
                    Все товары ▶
                </NavLink>
            </div>
            <div className={classes.productCards}>{productsElem}</div>
        </div>
    );
};
