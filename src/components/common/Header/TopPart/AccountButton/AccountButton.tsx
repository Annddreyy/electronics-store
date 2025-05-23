import { useState } from 'react';
import profile from './../../../../../assets/header/profile.png';
import profileActive from './../../../../../assets/header/sign in.png';
import { AccoutMenu } from '../../../AccountMenu/AccoutMenu';
import classes from './AccountButton.module.scss';
import cn from 'classnames';

export const AccountButton: React.FC = () => {
    const [isHover, setIsHover] = useState(false);

    const onClickHandler = () => {
        setIsHover((prev) => !prev);
    };

    return (
        <div className={classes.button}>
            <img
                src={isHover ? profileActive : profile}
                alt=""
                onClick={onClickHandler}
            />
            <div
                className={cn(classes.menu, { [classes.invisible]: !isHover })}
                onMouseLeave={() => setIsHover(false)}
            >
                <AccoutMenu />
            </div>
        </div>
    );
};
