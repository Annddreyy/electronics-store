import { CSSProperties } from 'react';
import classes from './BaseInput.module.scss';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import cn from 'classnames';

type PropsType = {
    type: React.HTMLInputTypeAttribute;
    id: string;
    name: string;
    placeholder?: string | undefined;
    register: UseFormRegister<any>;
    options?: RegisterOptions<any>;
    icon?: string;
    className?: string;
    style?: CSSProperties;
};

export const BaseInput: React.FC<PropsType> = ({
    type,
    id,
    name,
    placeholder,
    register,
    options,
    icon,
    className,
    style,
}) => {
    return (
        <div className={cn(classes.input, className)}>
            <img src={icon} alt="" />
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                style={style}
                {...register(name, options)}
            />
        </div>
    );
};
