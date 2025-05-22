import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { ProductCard } from '../components/common/ProductCard/ProductCard';
import { Buttons } from '../components/pages/FeatureComporasion/Buttons/Buttons';
import { Table } from '../components/pages/FeatureComporasion/Table/Table';
import { TopPart } from '../components/pages/FeatureComporasion/TopPart/TopPart';
import { getCompareProducts } from '../redux/products/productsSelectors';
import { Link } from '../types';
import classes from './../components/pages/FeatureComporasion/FeatureComporasion.module.scss';
import { ProductTypes } from '../components/common/ProductCardsWithSorting/ProductCardsWithSorting';
import { v4 } from 'uuid';
import { Product, Status } from '../api/productsAPI';

const FeatureComporasion: React.FC = () => {
    const path: Link[] = [
        { link: '/', title: 'Главная' },
        { link: '/compare', title: 'Сравнение товаров' },
    ];

    const initialProducts = Array.from(
        useSelector(getCompareProducts).values(),
    );
    const [startIndex, setStartIndex] = useState(0);
    const [isDifferent, setIsDifferent] = useState(false);

    const [selectedProductType, setSelectedProductType] = useState(
        ProductTypes.ALL,
    );

    const [products, setProducts] = useState(initialProducts);
    let compareProducts = products.slice(startIndex, startIndex + 3);

    useEffect(() => {
        let filterString: Status | undefined;
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
                    product.statusList?.includes(filterString as Status),
                ),
            );
        } else {
            setProducts(initialProducts);
        }
    }, [selectedProductType]);

    const changeProductType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStartIndex(0);
        setSelectedProductType(event.target.value as ProductTypes);
    };

    // Создание карточек товаров
    const productInformation: Product[] = compareProducts.map(
        (compareProduct) => ({
            id: compareProduct.id,
            title: compareProduct.title,
            img: compareProduct.img,
            price: compareProduct.price,
            type: compareProduct.type,
            promotionPercent: compareProduct.promotionPercent,
            statusList: compareProduct.statusList,
            grade: compareProduct.grade,
            commentsCount: compareProduct.commentsCount,
        }),
    );

    const compareCards = productInformation.map((product) => (
        <ProductCard {...product} key={v4()} />
    ));

    // Создание списка характеристик
    const characteristics = compareProducts.map((compareProduct) => ({
        characteristics: compareProduct.characteristics,
    }));

    const characteristicsSet = new Set<string>();
    characteristics.forEach((characteristic) => {
        const keys = Object.keys(characteristic.characteristics);
        keys.forEach((key) => characteristicsSet.add(key));
    });

    const setNextStartIndex = () => {
        setStartIndex((prev) =>
            prev !== compareProducts.length - 1 ? prev + 1 : prev,
        );
    };

    const setPreviousStartIndex = () => {
        setStartIndex((prev) => (prev !== 0 ? prev - 1 : prev));
    };

    const setDifferentProducts = () => {
        setIsDifferent((prev) => !prev);
    };

    return (
        <>
            <Header />
            <div className="container">
                <BreadCrumbs path={path} />
                <h1 className="pageTitle">Сравнение товаров</h1>
                <div className={classes.information}>
                    <Buttons
                        setNextStartIndex={setNextStartIndex}
                        setPreviousStartIndex={setPreviousStartIndex}
                        startIndex={startIndex}
                        compareProducts={compareProducts}
                    />
                    <TopPart
                        changeProductType={changeProductType}
                        compareCards={compareCards}
                        setDifferentProducts={setDifferentProducts}
                    />
                    <Table
                        characteristics={characteristics}
                        characteristicsSet={characteristicsSet}
                        isDifferent={isDifferent}
                    />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FeatureComporasion;
