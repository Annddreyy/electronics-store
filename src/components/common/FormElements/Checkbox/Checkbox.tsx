import { CSSProperties, useState } from 'react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import checkedImg from './../../../../assets/input/check.png';
import uncheckedImg from './../../../../assets/input/uncheck.png';
import classes from './Checkbox.module.scss';
import cn from 'classnames';

type Props = {
    text: string;
    style?: CSSProperties;
    name: string;
    register: UseFormRegister<any>;
    options?: RegisterOptions<any>;
    className?: string;
};

export const Checkbox: React.FC<Props> = ({
    text,
    style,
    register,
    options,
    name,
    className,
}) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div style={style}>
            <label className={cn(classes.label, className)}>
                <span>
                    <input
                        type="checkbox"
                        checked={checked}
                        onClick={handleCheckboxChange}
                        {...register(name, options)}
                    />
                    <div>
                        <img src={checked ? checkedImg : uncheckedImg} alt="" />
                    </div>
                </span>
                <span>{text}</span>
            </label>
        </div>
    );
};
