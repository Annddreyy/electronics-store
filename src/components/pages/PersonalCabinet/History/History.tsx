import { useSelector } from 'react-redux';
import { actions } from '../../../../redux/order/orderReducer';
import { getOrders, getPageSize } from '../../../../redux/order/orderSelectors';
import { Orders } from './Orders/Orders';
import { Paginator } from '../../../common/Paginator/Paginator';
import classes from './History.module.scss';

export const History: React.FC = () => {
    const orders = useSelector(getOrders);
    const pageSize = useSelector(getPageSize);

    return (
        <section className={classes.history}>
            <h2 className="sectionTitle">История покупок</h2>
            <Orders orders={orders} />
            <Paginator
                totalItemsCount={orders.length}
                pageSize={pageSize}
                setCurrentPage={actions.setCurrentPage}
            />
        </section>
    );
};
