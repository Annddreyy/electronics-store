import { NavLink } from 'react-router-dom';
import logo from './../../../assets/logo.png';

import menu from './../../../assets/header/menu-icon.png';
import eye from './../../../assets/header/eye.png';
import compare from './../../../assets/header/compare.png';
import like from './../../../assets/header/like.png';
import likeFill from './../../../assets/header/like-fill.png';
import bin from './../../../assets/header/bin.png';

import classes from './Header.module.scss';

export const Header: React.FC = () => {
    return (
        <>
            <header className={`${classes.header} bg-white`}>
                <div className="container">
                    <div className={classes.topPart}>
                        <img src={logo} alt="" />
                        <div className={classes.information}>
                            <div className={classes.phones}>
                                <span className={classes.phone}>
                                    +7(812) 660-50-540
                                </span>
                                <span className={classes.phone}>
                                    +7(958) 111-95-03
                                </span>
                            </div>
                            <span className={classes.time}>
                                Пн-вс: с 10:00 до 21:00
                            </span>
                        </div>
                        <div className={classes.buttons}>
                            <search></search>
                            <button>
                                <img src={eye} alt="" />
                            </button>
                            <button>
                                <img src={like} alt="" />
                            </button>
                            <button>
                                <img src={compare} alt="" />
                            </button>
                            <button>
                                <img src={bin} alt="" />
                            </button>
                            <button className={classes.login}>Войти</button>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="bg-primary-dark-7">
                <div className="container">
                    <ul>
                        <li className="bg-primary-dark-4">
                            <NavLink to={'/catalog'}>
                                <img src={menu} alt="" />
                                <span>Каталог товаров</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/about-company'}>О компании</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/promotions'}>Акции</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/installment-plan'}>
                                Рассрочка 0|0|18
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/service'}>Сервис и гарантия</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/opt-dropshipping'}>
                                Опт/дропшиппинг
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contacts'}>Контакты</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};
