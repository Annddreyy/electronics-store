import { Stage } from '../../../../../pages/PlacingAnOrder';
import classes from './ChangeButton.module.scss';
import cn from 'classnames';

type PropsType = {
    changeStage: () => void;
};

export const ChangeButton: React.FC<PropsType> = ({ changeStage }) => {
    return (
        <button
            className={cn('button-primary-outlined', classes.button)}
            onClick={changeStage}
        >
            Изменить
        </button>
    );
};
