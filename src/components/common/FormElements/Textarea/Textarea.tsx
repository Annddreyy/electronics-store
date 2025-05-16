import classes from './Textarea.module.scss';

type PropsType = {
    placeholder?: string | undefined;
    style?: React.CSSProperties;
};

export const Textarea: React.FC<PropsType> = ({ placeholder, style }) => {
    return (
        <div style={style}>
            <textarea
                placeholder={placeholder}
                className={classes.textarea}
                style={style}
            ></textarea>
        </div>
    );
};
