import { CSSProperties, useState } from 'react';
import checkedImg from './../../../../assets/input/check.png';
import uncheckedImg from './../../../../assets/input/uncheck.png';
import classes from './Checkbox.module.scss';

type PropsType = {
    text: string;
    style?: CSSProperties;
};

export const Checkbox: React.FC<PropsType> = ({ text, style }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <div style={style}>
            <label className={classes.label}>
                <span>
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
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
