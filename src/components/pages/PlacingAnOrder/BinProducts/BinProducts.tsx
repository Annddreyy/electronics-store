import { ProductCard } from './ProductCard/ProductCard';
import classes from './BinProducts.module.scss';
import img from './../../../../assets/card/productDefault.png';

export type ProductCardType = {
    img: string;
    title: string;
    count: number;
    oldPrice?: number;
    price: number;
};

export const BinProducts: React.FC = () => {
    const products: ProductCardType[] = [
        {
            img: img,
            title: 'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
            count: 3,
            oldPrice: 1200,
            price: 1400,
        },
        {
            img: img,
            title: 'Гироскутер Smart Balance Premium 10.5 Зелёный граффити',
            count: 3,
            oldPrice: 1200,
            price: 1400,
        },
        {
            img: img,
            title: 'Гироскутер Smart Balance Premium 10.5 Зелёный граффити',
            count: 2,
            price: 1400,
        },
    ];

    const productsElem = products.map((product) => (
        <ProductCard {...product} />
    ));
    return (
        <section className={classes.binProducts}>
            <h2 className="sectionTitle">Ваш заказ</h2>
            <table>
                <tbody>{productsElem}</tbody>
            </table>
        </section>
    );
};
