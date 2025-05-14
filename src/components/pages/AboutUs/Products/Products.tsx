import classes from './Products.module.scss';
import img1 from './../../../../assets/menu-icons/icons for menu 1.png';
import img2 from './../../../../assets/menu-icons/icons for menu 3.png';
import img3 from './../../../../assets/menu-icons/icons for menu 5.png';
import img4 from './../../../../assets/menu-icons/icons for menu 2.png';
import img5 from './../../../../assets/menu-icons/icons for menu 4.png';
import img6 from './../../../../assets/menu-icons/icon-more.png';

export const Products: React.FC = () => {
    return (
        <div className={classes.products}>
            <div className={classes.product}>
                <img src={img1} alt="" />
                <span>гироскутеров</span>
            </div>
            <div className={classes.product}>
                <img src={img2} alt="" />
                <span>сигвеев и мини сигвеев</span>
            </div>
            <div className={classes.product}>
                <img src={img3} alt="" />
                <span>электросамокатов, стандартных и полноприводных</span>
            </div>
            <div className={classes.product}>
                <img src={img4} alt="" />
                <span>электроскейтов</span>
            </div>
            <div className={classes.product}>
                <img src={img5} alt="" />
                <span>электровелосипедов</span>
            </div>
            <div className={classes.product}>
                <img src={img6} alt="" />
                <span>и многое другое</span>
            </div>
        </div>
    );
};
