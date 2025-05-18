import { Orders } from './Orders/Orders';
import classes from './History.module.scss';
import { Paginator } from '../../../common/Paginator/Paginator';

export const History: React.FC = () => {
    return (
        <section className={classes.history}>
            <h2 className="sectionTitle">История покупок</h2>
            <Orders />
            <Paginator totalItemsCount={100} pageSize={5} pagesPerGroup={3} />
        </section>
    );
};
