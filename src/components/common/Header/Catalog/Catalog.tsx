import { NavLink } from 'react-router-dom';
import { Navigation } from '../../../pages/Main/TopPart/Navigation/Navigation';
import { TopLinksType } from '../../../pages/Main/TopPart/TopPart';
import type7 from './../../../../assets/menu-icons/electric skate.png';
import type11 from './../../../../assets/menu-icons/smart watch.png';
import type9 from './../../../../assets/menu-icons/аксессуары.png';
import type1 from './../../../../assets/menu-icons/гироскутер.png';
import type3 from './../../../../assets/menu-icons/моноколеса.png';
import type4 from './../../../../assets/menu-icons/сигвеи и мини-сигвеи.png';
import type10 from './../../../../assets/menu-icons/умные игрушки.png';
import type6 from './../../../../assets/menu-icons/электровелосипед.png';
import type8 from './../../../../assets/menu-icons/электромобили.png';
import type2 from './../../../../assets/menu-icons/электросамокаты.png';
import type5 from './../../../../assets/menu-icons/электроскутеры.png';
import cn from 'classnames';

import classes from './Catalog.module.scss';

const linksArray: TopLinksType = {
    links: [
        { img: type1, title: 'Гироскутеры', link: '/' },
        { img: type2, title: 'Электросамокаты', link: '/' },
        { img: type3, title: 'Моноколеса', link: '/' },
        { img: type4, title: 'Сигвеи и мини-сигвеи', link: '/' },
        { img: type5, title: 'Электроскутеры', link: '/' },
        { img: type6, title: 'Электровелосипеды', link: '/' },
        { img: type7, title: 'Электроскейты', link: '/' },
        { img: type8, title: 'Электромобили', link: '/' },
        { img: type9, title: 'Аксессуары', link: '/' },
        { img: type10, title: 'Умные игрушки', link: '/' },
        { img: type11, title: 'Smart Watch', link: '/' },
    ],
};

type PropsType = {
    closeBlock: () => void;
};

export const Catalog: React.FC<PropsType> = ({ closeBlock }) => {
    return (
        <div className={classes.overlay}>
            <section className={classes.catalog}>
                <div className={classes.top}>
                    <h2 className="pageTitle">Каталог</h2>
                    <button onClick={closeBlock}>x</button>
                </div>
                <div className={cn(classes.links, 'navigation')}>
                    {linksArray.links.map((link) => (
                        <NavLink
                            key={link.link}
                            to={link.link}
                            className={classes.link}
                        >
                            <img src={link.img} alt="" />
                            <span className={classes.title}>{link.title}</span>
                        </NavLink>
                    ))}
                </div>
            </section>
        </div>
    );
};
