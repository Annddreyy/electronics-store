import { NavLink } from 'react-router-dom';
import { ProductsCount } from './ProductsCount/ProductsCount';
import {
    getCompareProducts,
    getFavoriteProducts,
    getViewedProducts,
} from '../../../../redux/products/productsSelectors';

import cn from 'classnames';

import classes from './TopPart.module.scss';

import eye from './../../../../assets/header/eye.png';
import like from './../../../../assets/header/like.png';
import likeFill from './../../../../assets/header/like-fill.png';
import compare from './../../../../assets/header/compare.png';
import bin from './../../../../assets/header/bin.png';
import logo from './../../../../assets/logo.png';
import search from './../../../../assets/header/search-icon.png';
import { getProducts } from '../../../../redux/order/orderSelectors';
import { useEffect, useState } from 'react';
import { AuthorizationForm } from '../../AuthorizationForm/AuthorizationForm';

export const TopPart: React.FC = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [authFormOpen, setAuthFormOpen] = useState(false);

    const setAuthOpen = () => {
        setAuthFormOpen(true);
    };

    const setAuthClose = () => {
        setAuthFormOpen(false);
    };

    useEffect(() => {
        document.body.style.overflow = authFormOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [authFormOpen]);

    return (
        <header className={`${classes.header} bg-white`}>
            <div className="container">
                <div className={classes.topPart}>
                    <NavLink
                        to={'/'}
                        className={cn({
                            [classes.invisible]: isSearch,
                        })}
                    >
                        <img src={logo} alt="" className={classes.logo} />
                    </NavLink>
                    <div
                        className={cn(classes.information, {
                            [classes.invisible]: isSearch,
                        })}
                    >
                        <div className={classes.phones}>
                            <span className={classes.phone}>
                                +7(812) 660-50-540
                            </span>
                            <span className={classes.phone}>
                                +7(958) 111-95-03
                            </span>
                        </div>
                        <span className={'text-gray-dark-3'}>
                            Пн-вс: с 10:00 до 21:00
                        </span>
                    </div>
                    <div
                        className={cn(classes.buttons, {
                            [classes.searchFull]: isSearch,
                        })}
                    >
                        <div
                            className={cn(classes.searchBlock, {
                                [classes.searchFull]: isSearch,
                            })}
                        >
                            <img
                                src={search}
                                alt=""
                                className={cn({
                                    [classes.invisible]: isSearch,
                                })}
                            />
                            <input
                                type="search"
                                placeholder={
                                    isSearch
                                        ? 'Введите запрос, например "Smart balance"'
                                        : 'Найти'
                                }
                                onClick={() => setIsSearch(true)}
                            />
                        </div>
                        <ProductsCount
                            selector={getViewedProducts}
                            link="/viewed"
                            iconBase={eye}
                            className={cn({
                                [classes.invisible]: isSearch,
                            })}
                        />
                        <ProductsCount
                            selector={getFavoriteProducts}
                            link="/favorite"
                            iconBase={like}
                            iconActive={likeFill}
                            className={cn({
                                [classes.invisible]: isSearch,
                            })}
                        />
                        <ProductsCount
                            selector={getCompareProducts}
                            link="/compare"
                            iconBase={compare}
                            className={cn({
                                [classes.invisible]: isSearch,
                            })}
                        />
                        <ProductsCount
                            selector={getProducts}
                            link="/bin"
                            iconBase={bin}
                            className={cn({
                                [classes.invisible]: isSearch,
                            })}
                        />
                        <button
                            className={cn('button-primary', classes.login, {
                                [classes.invisible]: isSearch,
                            })}
                            onClick={setAuthOpen}
                        >
                            Войти
                        </button>
                    </div>
                    <button
                        onClick={() => setIsSearch(false)}
                        className={cn(classes.quit, {
                            [classes.invisible]: !isSearch,
                        })}
                    >
                        x
                    </button>
                </div>
            </div>
            {authFormOpen && <AuthorizationForm setAuthClose={setAuthClose} />}
        </header>
    );
};
