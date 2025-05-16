import classes from './AddressCard.module.scss';

type PropsType = {
    address: string;
    phone: string;
};

export const AddressCard: React.FC<PropsType> = ({ address, phone }) => {
    return (
        <article className={classes.addressCard}>
            <address className={classes.address}>{address}</address>
            <p className={classes.phone}>{phone}</p>
        </article>
    );
};
