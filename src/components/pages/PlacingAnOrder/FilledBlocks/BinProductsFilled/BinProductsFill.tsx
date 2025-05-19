import { ChangeButton } from '../ChangeButton/ChangeButton';
import classes from './../../PlacingAnOrder.module.scss';
import styles from './BinProductsFill.module.scss';

type PropsType = {
    images: string[];
};

export const BinProductsFill: React.FC<PropsType> = ({ images }) => {
    const imagesElem = images.map((img) => <img src={img} alt="" />);
    return (
        <section className={classes.orderBlock}>
            <h2 className={classes.blockTitle}>Ваш заказ</h2>
            <div className={styles.selectedInformation}>
                <div className={styles.images}>{imagesElem}</div>
                <ChangeButton />
            </div>
        </section>
    );
};
