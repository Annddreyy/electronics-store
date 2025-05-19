import classes from './ChangeButton.module.scss';
import cn from 'classnames';

export const ChangeButton: React.FC = () => {
    return (
        <button className={cn('button-primary-outlined', classes.button)}>
            Изменить
        </button>
    );
};
