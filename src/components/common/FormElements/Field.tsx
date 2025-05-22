import { ChangeEvent, CSSProperties } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import classes from './Field.module.scss';
import cn from 'classnames';
import correct from './../../../assets/input/icon-right-correct.png';
import error from './../../../assets/input/icon-right-error.png';

type Field = {
    type: React.HTMLInputTypeAttribute | 'textarea';
    id: string;
    name: string;
    placeholder?: string | undefined;
    register: UseFormRegister<any>;
    options?: RegisterOptions<any>;
    icon?: string;
    className?: string;
    style?: CSSProperties;
    accept?: string;
    list?: string;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Field: React.FC<Field> = ({
    id,
    type,
    name,
    register,
    options,
    icon,
    className,
    placeholder,
    style,
    accept,
    list,
    onChange,
    value,
}) => {
    return (
        <>
            {type !== 'textarea' ? (
                <div className={cn(classes.field, className)}>
                    <img src={icon} alt="" />
                    <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        style={style}
                        {...register(name, options)}
                        accept={accept}
                        list={list}
                        onChange={onChange}
                        value={value}
                    />
                    {className && (
                        <img
                            src={className === 'inputCorrect' ? correct : error}
                            alt=""
                        />
                    )}
                </div>
            ) : (
                <div className={cn(classes.field, className)} style={style}>
                    <img src={icon} alt="" />
                    <textarea
                        id={id}
                        placeholder={placeholder}
                        style={style}
                        {...register(name, options)}
                    ></textarea>
                </div>
            )}
        </>
    );
};
