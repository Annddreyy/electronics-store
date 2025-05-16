import { useState } from 'react';
import classes from './PasswordInput.module.scss';
import eye from './../../../../assets/input/eye.png';
import eyeOff from './../../../../assets/input/eye-off.png';
import lock from './../../../../assets/input/lock.png';

export const PasswordInput: React.FC = () => {
    const [showingPassword, setShowingPassword] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');

    const changeVisibillity = () => {
        setShowingPassword((prev) => !prev);
    };

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordValue(event.target.value);
    };

    return (
        <div className={classes.input}>
            <div>
                <img src={lock} alt="" />
                <input
                    type={showingPassword ? 'text' : 'password'}
                    onChange={onChangeHandler}
                    value={passwordValue}
                />
            </div>
            <img
                src={showingPassword ? eye : eyeOff}
                onClick={changeVisibillity}
                alt=""
            />
        </div>
    );
};
