import { NavLink } from 'react-router-dom';
import { Catalog } from '../Catalog/Catalog';
import classes from './BottomNav.module.scss';
import { useEffect, useState } from 'react';
import { Other } from '../Other/Other';

import homeIcon from './../../../../assets/header/bottom_nav/home-icon.png';
import catalogIcon from './../../../../assets/header/bottom_nav/menu-icon.png';
import cartIcon from './../../../../assets/header/bottom_nav/cart-icon.png';
import searchIcon from './../../../../assets/header/bottom_nav/search-icon.png';
import moreIcon from './../../../../assets/header/bottom_nav/more-icon.png';

import homeIconActive from './../../../../assets/header/bottom_nav_active/home-icon.png';
import catalogIconActive from './../../../../assets/header/bottom_nav_active/menu-icon.png';
import cartIconActive from './../../../../assets/header/bottom_nav_active/cart-icon.png';
import searchIconActive from './../../../../assets/header/bottom_nav_active/search-icon.png';
import moreIconActive from './../../../../assets/header/bottom_nav_active/more-icon.png';
import { Search } from '../Search/Search';

enum CurrentBlockType {
    NONE,
    CATALOG,
    SEARCH,
    OTHER,
}

export const BottomNav: React.FC = () => {
    const [currentBlock, setCurrentBlock] = useState(CurrentBlockType.NONE);
    const blocks = {
        [CurrentBlockType.CATALOG]: (
            <Catalog
                closeBlock={() => setCurrentBlock(CurrentBlockType.NONE)}
            />
        ),
        [CurrentBlockType.OTHER]: (
            <Other closeBlock={() => setCurrentBlock(CurrentBlockType.NONE)} />
        ),
        [CurrentBlockType.SEARCH]: (
            <Search closeBlock={() => setCurrentBlock(CurrentBlockType.NONE)} />
        ),
        [CurrentBlockType.NONE]: <></>,
    };

    useEffect(() => {
        document.body.style.overflow =
            currentBlock !== CurrentBlockType.NONE ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [currentBlock]);

    return (
        <>
            <nav className={classes.bottomNav}>
                <NavLink to="/">
                    <button
                        onClick={() => setCurrentBlock(CurrentBlockType.NONE)}
                    >
                        <img src={homeIcon} alt="" />
                        <span>Главная</span>
                    </button>
                </NavLink>
                <button
                    onClick={() => setCurrentBlock(CurrentBlockType.CATALOG)}
                >
                    <img
                        src={
                            currentBlock === CurrentBlockType.CATALOG
                                ? catalogIconActive
                                : catalogIcon
                        }
                        alt=""
                    />
                    <span>Каталог</span>
                </button>
                <NavLink to="/bin">
                    <button
                        onClick={() => setCurrentBlock(CurrentBlockType.NONE)}
                    >
                        <img src={cartIcon} alt="" />
                        <span>Корзина</span>
                    </button>
                </NavLink>
                <button
                    onClick={() => setCurrentBlock(CurrentBlockType.SEARCH)}
                >
                    <img
                        src={
                            currentBlock === CurrentBlockType.SEARCH
                                ? searchIconActive
                                : searchIcon
                        }
                        alt=""
                    />
                    <span>Поиск</span>
                </button>
                <button onClick={() => setCurrentBlock(CurrentBlockType.OTHER)}>
                    <img
                        src={
                            currentBlock === CurrentBlockType.OTHER
                                ? moreIconActive
                                : moreIcon
                        }
                        alt=""
                    />
                    <span>Ещё</span>
                </button>
            </nav>
            {blocks[currentBlock]}
        </>
    );
};
