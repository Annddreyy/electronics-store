import classes from './../PlacingAnOrder.module.scss';

type PropsType = {
    title: string;
};

export const BlockDisabled: React.FC<PropsType> = ({ title }) => {
    return (
        <section className={classes.orderBlock}>
            <h2 className={classes.blockTitleGray}>{title}</h2>
        </section>
    );
};
