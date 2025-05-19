import { ChangeButton } from '../ChangeButton/ChangeButton';
import classes from './../../PlacingAnOrder.module.scss';
import styles from './PayMethodFill.module.scss';

type PropsType = {
    type: string;
};

export const PayMethodFill: React.FC<PropsType> = ({ type }) => {
    return (
        <section className={classes.orderBlock}>
            <h2 className={classes.blockTitle}>Способ получения</h2>
            <div className={styles.selectedInformation}>
                <p className={styles.type}>{type}</p>
                <ChangeButton />
            </div>
        </section>
    );
};
