import { CompareProduct } from '../../../../api/productsAPI';
import classes from './Buttons.module.scss';
import cn from 'classnames';

type Props = {
    setPreviousStartIndex: () => void;
    setNextStartIndex: () => void;
    startIndex: number;
    compareProducts: CompareProduct[];
};

export const Buttons: React.FC<Props> = ({
    setNextStartIndex,
    setPreviousStartIndex,
    startIndex,
    compareProducts,
}) => {
    return (
        <div className={classes.buttons}>
            <button
                onClick={setPreviousStartIndex}
                disabled={startIndex === 0}
                className={cn('border-secondary', {
                    'bg-secondary': startIndex !== 0,
                    'text-secondary': startIndex === 0,
                })}
            >
                ◀
            </button>
            <button
                onClick={setNextStartIndex}
                disabled={
                    startIndex === compareProducts.length - 1 ||
                    compareProducts.length < 3
                }
                className={cn('border-secondary', {
                    'bg-secondary':
                        startIndex !== compareProducts.length - 1 ||
                        compareProducts.length > 3,
                    'text-secondary':
                        startIndex === compareProducts.length - 1 ||
                        compareProducts.length < 3,
                })}
            >
                ▶
            </button>
        </div>
    );
};
