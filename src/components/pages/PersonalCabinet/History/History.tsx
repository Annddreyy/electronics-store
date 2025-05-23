import { Orders } from './Orders/Orders';
import { Paginator } from '../../../common/Paginator/Paginator';
import classes from './History.module.scss';

export const History: React.FC = () => {
    return (
        <section className={classes.history}>
            <h2 className="sectionTitle">История покупок</h2>
            <Orders />
            <Paginator totalItemsCount={100} pageSize={5} pagesPerGroup={3} />
        </section>
    );
};
