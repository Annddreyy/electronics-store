import { Order } from '../../../../../../api/orderAPI';
import { v4 } from 'uuid';
import { formatDate } from '../../../../../../utils/formatDate';
import classes from './Order.module.scss';

export const OrderCard: React.FC<Order> = (order) => {
    const stringDate = formatDate(order.date, { month: '2-digit' });

    const productsCount = order.products.length;
    const productsSum = order.products.reduce(
        (sum, product) => sum + product.price,
        0,
    );

    const productsElem = order.products.map((product) => (
        <div className={classes.product} key={v4()}>
            <h3>{product.title}</h3>
            <img src={product.img} alt="" />
            <p>
                <strong>Цена:</strong> {product.price}₽
            </p>
        </div>
    ));

    const historyElem = order.history.map((history) => (
        <div className={classes.stage} key={v4()}>
            <span className={classes.date}>
                {formatDate(history.date, { month: '2-digit' })}
            </span>
            <span className={classes.status} data-status={history.status}>
                {history.status}
            </span>
        </div>
    ));

    return (
        <details className={classes.order}>
            <summary className={classes.title}>
                <div className={classes.left}>
                    <div className={classes.orderNumber}>
                        <span>Заказ #{order.id} </span>
                        <span className={classes.date}>от {stringDate}</span>
                    </div>
                    <div>
                        {productsCount} товара на сумму {productsSum}₽
                    </div>
                    <div
                        className={classes.status}
                        data-status={order.history.at(-1)?.status}
                    >
                        {order.history.at(-1)?.status}
                    </div>
                </div>
            </summary>
            <div className={classes.information}>
                <div className={classes.orderComposition}>
                    <h3>Состав заказа:</h3>
                    <div className={classes.products}>{productsElem}</div>
                </div>
                <div className={classes.history}>
                    <h3>История выполнения заказа:</h3>
                    <div className={classes.historyElems}>{historyElem}</div>
                </div>
            </div>
        </details>
    );
};
