import cn from 'classnames';
import classes from './ChangeButton.module.scss';

type Props = {
    changeStage: () => void;
};

export const ChangeButton: React.FC<Props> = ({ changeStage }) => {
    return (
        <button
            className={cn('button-primary-outlined', classes.button)}
            onClick={changeStage}
        >
            Изменить
        </button>
    );
};
