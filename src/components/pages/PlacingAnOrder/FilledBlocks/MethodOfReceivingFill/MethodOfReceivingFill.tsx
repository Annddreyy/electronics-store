import { useSelector } from 'react-redux';
import { formatDate } from '../../../../../utils/formatDate';
import { ChangeButton } from '../ChangeButton/ChangeButton';
import classes from './../../PlacingAnOrder.module.scss';
import styles from './MethodOfReceivingFill.module.scss';
import { getReceivingMethod } from '../../../../../redux/order/orderSelectors';

export type SelfPickUpType = {
    method: 'Самовывоз';
    addressSelfPickUp: string;
    workingTime: string;
    changeStage: () => void;
};

export type DeliveryType = {
    method: 'Доставка';
    date: Date;
    addressDelivery: string;
    appartment: string;
    time: string;
    changeStage: () => void;
};

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
                        <p>{information.appartment}</p>
                        <p>{formatDate(information.date)}</p>
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
