import classes from './BaseInput.module.scss';

type PropsType = {
    type: React.HTMLInputTypeAttribute;
    placeholder?: string | undefined;
    icon?: string;
};

export const BaseInput: React.FC<PropsType> = ({ type, placeholder, icon }) => {
    return (
        <div className={classes.input}>
            <img src={icon} alt="" />
            <input type={type} placeholder={placeholder} />
        </div>
    );
};
