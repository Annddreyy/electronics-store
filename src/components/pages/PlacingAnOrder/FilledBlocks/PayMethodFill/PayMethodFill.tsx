import { useSelector } from 'react-redux';
import { getPayMethod } from '../../../../../redux/order/orderSelectors';
import { ChangeButton } from '../ChangeButton/ChangeButton';
import classes from './../../PlacingAnOrder.module.scss';
import styles from './PayMethodFill.module.scss';

type Props = {
    changeStage: () => void;
};

export const PayMethodFill: React.FC<Props> = ({ changeStage }) => {
    const type = useSelector(getPayMethod);
    return (
        <section className={classes.orderBlock}>
            <h2 className={classes.blockTitle}>Способ получения</h2>
            <div className={styles.selectedInformation}>
                <p className={styles.type}>{type}</p>
                <ChangeButton changeStage={changeStage} />
            </div>
        </section>
    );
};
