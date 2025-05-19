import { FieldError } from 'react-hook-form';
import classes from './ErrorMessage.module.scss';

type PropsType = {
    error: FieldError | undefined;
};

export const ErrorMessage: React.FC<PropsType> = ({ error }) => {
    return (
        <>
            {error && (
                <div className={classes.errorMessage}>{error.message}</div>
            )}
        </>
    );
};
