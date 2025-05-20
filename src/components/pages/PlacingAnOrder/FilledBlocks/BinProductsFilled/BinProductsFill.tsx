import { Stage } from '../../../../../pages/PlacingAnOrder';
import { ChangeButton } from '../ChangeButton/ChangeButton';
import classes from './../../PlacingAnOrder.module.scss';
import styles from './BinProductsFill.module.scss';

type PropsType = {
    images: string[];
    changeStage: () => void;
};

export const BinProductsFill: React.FC<PropsType> = ({
    images,
    changeStage,
}) => {
    const imagesElem = images.map((img) => <img src={img} alt="" />);
    return (
        <section className={classes.orderBlock}>
            <h2 className={classes.blockTitle}>Ваш заказ</h2>
            <div className={styles.selectedInformation}>
                <div className={styles.images}>{imagesElem}</div>
                <ChangeButton changeStage={changeStage} />
            </div>
        </section>
    );
};
