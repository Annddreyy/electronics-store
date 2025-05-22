import classes from './Products.module.scss';
import img1 from './../../../../assets/menu-icons/icons for menu 1.png';
import img2 from './../../../../assets/menu-icons/icons for menu 3.png';
import img3 from './../../../../assets/menu-icons/icons for menu 5.png';
import img4 from './../../../../assets/menu-icons/icons for menu 2.png';
import img5 from './../../../../assets/menu-icons/icons for menu 4.png';
import img6 from './../../../../assets/menu-icons/icon-more.png';
import { v4 } from 'uuid';

export const Products: React.FC = () => {
    const products = [
        { img: img1, title: 'гироскутеров' },
        { img: img2, title: 'сигвеев и мини сигвеев' },
        { img: img3, title: 'электросамокатов, стандартных и полноприводных' },
        { img: img4, title: 'электроскейтов' },
        { img: img5, title: 'электровелосипедов' },
        { img: img6, title: 'и многое другое' },
    ];

    const productsElem = products.map((product) => (
        <div className={classes.product} key={v4()}>
            <img src={product.img} alt="" />
            <span>{product.title}</span>
        </div>
    ));
    return <div className={classes.products}>{productsElem}</div>;
};
