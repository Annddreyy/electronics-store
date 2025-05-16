import img from './../../../../../assets/productDefault.png';
import classes from './ProductImages.module.scss';

export const ProductImages: React.FC = () => {
    return (
        <div className={classes.productImages}>
            <img src={img} alt="" />
            <div className={classes.slider}>
                <button>&lt;</button>
                <div className={classes.images}>
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                    <img src={img} alt="" />
                </div>
                <button>&gt;</button>
            </div>
        </div>
    );
};
