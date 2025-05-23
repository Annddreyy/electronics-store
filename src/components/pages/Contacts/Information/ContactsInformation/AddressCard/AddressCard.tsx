import classes from './AddressCard.module.scss';

type Props = {
    address: string;
    phone: string;
};

export const AddressCard: React.FC<Props> = ({ address, phone }) => {
    return (
        <article className={classes.addressCard}>
            <address className={classes.address}>{address}</address>
            <p className={classes.phone}>{phone}</p>
        </article>
    );
};
