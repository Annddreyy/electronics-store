import { BuyConditions } from './BuyConditions/BuyConditions';
import { MainInformation } from './MainInformation/MainInformation';
import { ProductImages } from './ProductImages/ProductImages';
import classes from './TopPart.module.scss';

export const TopPart: React.FC = () => {
    return (
        <section className={classes.topPart}>
            <ProductImages />
            <div className={classes.productMainInformation}>
                <h1 className="pageTitle">
                    Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)
                </h1>
                <MainInformation grade={3} commentsCount={10} />
                <BuyConditions />
            </div>
        </section>
    );
};
