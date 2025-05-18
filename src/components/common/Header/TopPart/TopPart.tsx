import classes from './TopPart.module.scss';
import bin from './../../../../assets/header/bin.png';
import logo from './../../../../assets/logo.png';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { ProductsCount } from './ProductsCount/ProductsCount';
import {
    getBinProducts,
    getCompareProducts,
    getFavorityProducts,
    getViewedProducts,
} from '../../../../redux/products/productsSelectors';
import eye from './../../../../assets/header/eye.png';
import like from './../../../../assets/header/like.png';
import likeFill from './../../../../assets/header/like-fill.png';
import compare from './../../../../assets/header/compare.png';

export const TopPart: React.FC = () => {
    return (
        <header className={`${classes.header} bg-white`}>
            <div className="container">
                <div className={classes.topPart}>
                    <NavLink to={'/'}>
                        <img src={logo} alt="" />
                    </NavLink>
                    <div className={classes.information}>
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
                    <div className={classes.buttons}>
                        <search></search>
                        <ProductsCount
                            selector={getViewedProducts}
                            link="/viewed"
                            iconBase={eye}
                        />
                        <ProductsCount
                            selector={getFavorityProducts}
                            link="/favorite"
                            iconBase={like}
                            iconActive={likeFill}
                        />
                        <ProductsCount
                            selector={getCompareProducts}
                            link="/compare"
                            iconBase={compare}
                        />
                        <ProductsCount
                            selector={getBinProducts}
                            link="/bin"
                            iconBase={bin}
                        />
                        <button
                            className={cn(
                                classes.login,
                                'bg-primary-dark-1',
                                'text-white',
                            )}
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
