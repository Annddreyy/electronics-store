import classes from './NextButton.module.scss';
import cn from 'classnames';

type PropsType = {
    setNextOrderStage: () => void;
};

export const NextButton: React.FC<PropsType> = ({ setNextOrderStage }) => {
    return (
        <button
            className={cn('button-primary', classes.button)}
            onClick={setNextOrderStage}
        >
            Далее
        </button>
    );
};
