import { JSX } from 'react';
import { ProductTypes } from '../../../common/ProductCardsWithSorting/ProductCardsWithSorting';
import classes from './TopPart.module.scss';

type Props = {
    compareCards: JSX.Element[];
    setDifferentProducts: () => void;
    changeProductType: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const TopPart: React.FC<Props> = ({
    compareCards,
    setDifferentProducts,
    changeProductType,
}) => {
    return (
        <div className={classes.top}>
            <div className={classes.left}>
                <div className={classes.field}>
                    <select name="type" id="type" onChange={changeProductType}>
                        <option value={ProductTypes.ALL}>
                            {ProductTypes.ALL}
                        </option>
                        <option value={ProductTypes.BESTSELLER}>
                            {ProductTypes.BESTSELLER}
                        </option>
                        <option value={ProductTypes.NEW}>
                            {ProductTypes.NEW}
                        </option>
                    </select>
                </div>
                <div className={classes.check}>
                    <input
                        type="checkbox"
                        id="differentProducts"
                        onChange={setDifferentProducts}
                    />
                    <label htmlFor="differentProducts">
                        Только различающиеся
                    </label>
                </div>
            </div>
            {compareCards}
        </div>
    );
};
