import { useSelector } from 'react-redux';
import { getReceivingMethod } from '../../../../../redux/order/orderSelectors';
import { ChangeButton } from '../ChangeButton/ChangeButton';
import classes from './../../PlacingAnOrder.module.scss';
import styles from './MethodOfReceivingFill.module.scss';

type PropsType = {
    changeStage: () => void;
};

export const MethodOfReceivingFill: React.FC<PropsType> = ({ changeStage }) => {
    const information = useSelector(getReceivingMethod);
    return (
        <section className={classes.orderBlock}>
            <h2 className={classes.blockTitle}>Способ получения</h2>
            <div className={styles.selectedInformation}>
                {information.method === 'Доставка' ? (
                    <div>
                        <p>Доставка:</p>
                        <p>{information.addressDelivery}</p>
                        <p>{information.apartament}</p>
                        <p>{information.date}</p>
                        <p>{information.time}</p>
                    </div>
                ) : (
                    <div>
                        <p>Самовывоз из:</p>
                        <p>{information.addressSelfPickUp}</p>
                        <p>{information.workingTime}</p>
                    </div>
                )}
                <ChangeButton changeStage={changeStage} />
            </div>
        </section>
    );
};
