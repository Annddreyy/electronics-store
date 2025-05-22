import classes from './Price.module.scss';

type Props = {
    price: number;
};

export const Price: React.FC<Props> = ({ price }) => {
    return <p className={classes.price}>{price}₽</p>;
};
