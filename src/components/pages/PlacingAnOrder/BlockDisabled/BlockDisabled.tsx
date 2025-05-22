import classes from './../PlacingAnOrder.module.scss';

type Props = {
    title: string;
};

export const BlockDisabled: React.FC<Props> = ({ title }) => {
    return (
        <section className={classes.orderBlock}>
            <h2 className={classes.blockTitleGray}>{title}</h2>
        </section>
    );
};
