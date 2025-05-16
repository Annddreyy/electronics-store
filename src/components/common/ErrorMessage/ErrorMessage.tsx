import { FieldError } from 'react-hook-form';

type PropsType = {
    error: FieldError | undefined;
};

export const ErrorMessage: React.FC<PropsType> = ({ error }) => {
    return <>{error && <div className="errorMessage">{error.message}</div>}</>;
};
