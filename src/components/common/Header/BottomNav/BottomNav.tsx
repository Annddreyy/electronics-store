import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Catalog } from '../Catalog/Catalog';
import { Other } from '../Other/Other';
import classes from './BottomNav.module.scss';

import cartIcon from './../../../../assets/header/bottom_nav/cart-icon.png';
import homeIcon from './../../../../assets/header/bottom_nav/home-icon.png';
import catalogIcon from './../../../../assets/header/bottom_nav/menu-icon.png';
import moreIcon from './../../../../assets/header/bottom_nav/more-icon.png';
import searchIcon from './../../../../assets/header/bottom_nav/search-icon.png';

import { Search } from '../Search/Search';
import catalogIconActive from './../../../../assets/header/bottom_nav_active/menu-icon.png';
import moreIconActive from './../../../../assets/header/bottom_nav_active/more-icon.png';
import searchIconActive from './../../../../assets/header/bottom_nav_active/search-icon.png';

enum CurrentBlock {
    NONE,
    CATALOG,
    SEARCH,
    OTHER,
}

export const BottomNav: React.FC = () => {
    const [currentBlock, setCurrentBlock] = useState(CurrentBlock.NONE);
    const blocks = {
        [CurrentBlock.CATALOG]: (
            <Catalog closeBlock={() => setCurrentBlock(CurrentBlock.NONE)} />
        ),
        [CurrentBlock.OTHER]: (
            <Other closeBlock={() => setCurrentBlock(CurrentBlock.NONE)} />
        ),
        [CurrentBlock.SEARCH]: (
            <Search closeBlock={() => setCurrentBlock(CurrentBlock.NONE)} />
        ),
        [CurrentBlock.NONE]: <></>,
    };

    useEffect(() => {
        document.body.style.overflow =
            currentBlock !== CurrentBlock.NONE ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [currentBlock]);

    return (
        <>
            <nav className={classes.bottomNav}>
                <NavLink to="/">
                    <button onClick={() => setCurrentBlock(CurrentBlock.NONE)}>
                        <img src={homeIcon} alt="" />
                        <span>Главная</span>
                    </button>
                </NavLink>
                <button onClick={() => setCurrentBlock(CurrentBlock.CATALOG)}>
                    <img
                        src={
                            currentBlock === CurrentBlock.CATALOG
                                ? catalogIconActive
                                : catalogIcon
                        }
                        alt=""
                    />
                    <span>Каталог</span>
                </button>
                <NavLink to="/bin">
                    <button onClick={() => setCurrentBlock(CurrentBlock.NONE)}>
                        <img src={cartIcon} alt="" />
                        <span>Корзина</span>
                    </button>
                </NavLink>
                <button onClick={() => setCurrentBlock(CurrentBlock.SEARCH)}>
                    <img
                        src={
                            currentBlock === CurrentBlock.SEARCH
                                ? searchIconActive
                                : searchIcon
                        }
                        alt=""
                    />
                    <span>Поиск</span>
                </button>
                <button onClick={() => setCurrentBlock(CurrentBlock.OTHER)}>
                    <img
                        src={
                            currentBlock === CurrentBlock.OTHER
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
