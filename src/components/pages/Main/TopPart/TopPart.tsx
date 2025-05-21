import { LinkType } from '../../../../types';
import { ImagesSlider } from './ImagesSlider/ImagesSlider';
import { Navigation } from './Navigation/Navigation';

import classes from './TopPart.module.scss';

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

import img2 from './../../../../assets/slider/i.webp';
import img1 from './../../../../assets/slider/slider.png';

export type TopLinksType = {
    links: (LinkType & { img: string })[];
};

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

type SliderImageType = {
    img: string;
};

export type SliderImagesType = {
    images: SliderImageType[];
};

const imagesArray: SliderImagesType = {
    images: [
        { img: img1 },
        { img: img2 },
        { img: img1 },
        { img: img2 },
        { img: img1 },
    ],
};

export const TopPart = () => {
    return (
        <section className={classes.topPart}>
            <Navigation links={linksArray.links} />
            <ImagesSlider images={imagesArray.images} />
        </section>
    );
};
