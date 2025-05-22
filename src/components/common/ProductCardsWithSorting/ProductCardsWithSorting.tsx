import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    ProductType,
    StatusType,
} from '../../../redux/products/productsReducer';
import { AppStateType } from '../../../redux/store';
import { ProductCard } from '../ProductCard/ProductCard';
import classes from './ProductCardsWithSorting.module.scss';
import { v4 } from 'uuid';

type PropsType = {
    selector: (state: AppStateType) => ProductType[];
};

enum SortTypes {
    FIRST_EXPENSIVE = 'Сначала дорогие',
    FIRST_CHEAP = 'Сначала дешевые',
    FIRST_POPULAR = 'Сначала популярные',
    FIRST_NOT_POPULAR = 'Сначала непопулярные',
}

export enum ProductTypes {
    ALL = 'Все товары',
    NEW = 'Новинки',
    BESTSELLER = 'Хиты продаж',
}

export const ProductCardsWithSorting: React.FC<PropsType> = ({ selector }) => {
    const [selectedProductType, setSelectedProductType] = useState(
        ProductTypes.ALL,
    );
    const [selectedSortType, setSelectedSortType] = useState(
        SortTypes.FIRST_EXPENSIVE,
    );
    const initialProducts = useSelector(selector);
    const [products, setProducts] = useState(initialProducts);

    const productsElem = products.map((product) => (
        <ProductCard {...product} key={v4()} />
    ));

    useEffect(() => {
        let filterString: StatusType | undefined;
        switch (selectedProductType) {
            case ProductTypes.NEW:
                filterString = 'Новинка';
                break;
            case ProductTypes.BESTSELLER:
                filterString = 'Хит продаж';
                break;
        }
        if (filterString) {
            setProducts(
                products.filter((product) =>
                    product.statusList?.includes(filterString as StatusType),
                ),
            );
        } else {
            setProducts(initialProducts);
        }
    }, [selectedProductType]);

    useEffect(() => {
        let sortingFunction:
            | ((a: ProductType, b: ProductType) => number)
            | undefined;
        switch (selectedSortType) {
            case SortTypes.FIRST_EXPENSIVE:
                sortingFunction = (a, b) => a.price - b.price;
                break;
            case SortTypes.FIRST_CHEAP:
                sortingFunction = (a, b) => b.price - a.price;
                break;
            case SortTypes.FIRST_POPULAR:
                sortingFunction = (a, b) => a.grade - b.grade;
                break;
            case SortTypes.FIRST_NOT_POPULAR:
                sortingFunction = (a, b) => b.grade - a.grade;
                break;
            default:
                sortingFunction = undefined;
        }
        if (sortingFunction) {
            setProducts([...initialProducts].sort(sortingFunction));
        } else {
            setProducts(initialProducts);
        }
    }, [selectedSortType]);

    return (
        <section className={classes.block}>
            <div className={classes.top}>
                <div className={classes.field}>
                    <select
                        value={selectedProductType}
                        onChange={(e) =>
                            setSelectedProductType(
                                e.target.value as ProductTypes,
                            )
                        }
                    >
                        <option value={ProductTypes.ALL}>
                            {ProductTypes.ALL}
                        </option>
                        <option value={ProductTypes.NEW}>
                            {ProductTypes.NEW}
                        </option>
                        <option value={ProductTypes.BESTSELLER}>
                            {ProductTypes.BESTSELLER}
                        </option>
                    </select>
                </div>
                <div className={classes.field}>
                    <select
                        value={selectedProductType}
                        onChange={(e) =>
                            setSelectedSortType(e.target.value as SortTypes)
                        }
                    >
                        <option value={SortTypes.FIRST_EXPENSIVE}>
                            {SortTypes.FIRST_EXPENSIVE}
                        </option>
                        <option value={SortTypes.FIRST_CHEAP}>
                            {SortTypes.FIRST_CHEAP}
                        </option>
                        <option value={SortTypes.FIRST_POPULAR}>
                            {SortTypes.FIRST_POPULAR}
                        </option>
                        <option value={SortTypes.FIRST_NOT_POPULAR}>
                            {SortTypes.FIRST_NOT_POPULAR}
                        </option>
                    </select>
                </div>
            </div>
            <div className={classes.cards}>{productsElem}</div>
        </section>
    );
};
