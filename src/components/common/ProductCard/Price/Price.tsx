import classes from './Price.module.scss';

type PropsType = {
    price: number;
};

export const Price: React.FC<PropsType> = ({ price }) => {
    return <p className={classes.price}>{price}₽</p>;
};
