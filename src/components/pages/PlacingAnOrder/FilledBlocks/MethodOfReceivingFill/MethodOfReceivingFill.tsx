import { formatDate } from '../../../../../utils/formatDate';
import { ChangeButton } from '../ChangeButton/ChangeButton';
import classes from './../../PlacingAnOrder.module.scss';
import styles from './MethodOfReceivingFill.module.scss';

type SelfPickUpType = {
    method: 'Самовывоз';
    addressSelfPickUp: string;
    workingTime: string;
};

type DeliveryType = {
    method: 'Доставка';
    date: Date;
    addressDelivery: string;
    appartment: string;
    time: string;
};

type PropsType = SelfPickUpType | DeliveryType;

export const MethodOfReceivingFill: React.FC<PropsType> = (props) => {
    return (
        <section className={classes.orderBlock}>
            <h2 className={classes.blockTitle}>Способ получения</h2>
            <div className={styles.selectedInformation}>
                {props.method === 'Доставка' ? (
                    <div>
                        <p>Доставка:</p>
                        <p>{props.addressDelivery}</p>
                        <p>{props.appartment}</p>
                        <p>{formatDate(props.date)}</p>
                        <p>{props.time}</p>
                    </div>
                ) : (
                    <div>
                        <p>Самовывоз из:</p>
                        <p>{props.addressSelfPickUp}</p>
                        <p>{props.workingTime}</p>
                    </div>
                )}
                <ChangeButton />
            </div>
        </section>
    );
};
