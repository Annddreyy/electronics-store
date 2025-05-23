import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Product } from '../../../api/productsAPI';
import { Selector } from '../../../types';
import { ProductCard } from '../ProductCard/ProductCard';
import classes from './ProductCardsGroup.module.scss';

type Props = {
    title: string;
    selector: Selector<Product[]>;
};

export const ProductCardsGroup: React.FC<Props> = ({ title, selector }) => {
    const products = useSelector(selector).slice(0, 4);

    const productsElem = products.map((product) => (
        <ProductCard {...product} key={product.id} />
    ));

    return (
        <div className={classes.productsGroup}>
            <div className={classes.top}>
                <h2 className="pageTitle">{title}</h2>
                <NavLink to={'/products'} className="text-primary-dark-4">
                    Все товары ▶
                </NavLink>
            </div>
            <div className={classes.productCards}>{productsElem}</div>
        </div>
    );
};
