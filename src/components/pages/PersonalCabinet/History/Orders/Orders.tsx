import { Order } from '../../../../../api/orderAPI';
import { OrderCard } from './OrderCard/OrderCard';
import { v4 } from 'uuid';
import classes from './Orders.module.scss';

type Props = {
    orders: Order[];
};

export const Orders: React.FC<Props> = ({ orders }) => {
    const ordersElem = orders.map((order) => (
        <OrderCard {...order} key={v4()} />
    ));
    return <div className={classes.orders}>{ordersElem}</div>;
};
