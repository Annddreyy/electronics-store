import classes from './OfferCard.module.scss';
import cn from 'classnames';

type PropsType = {
    title: string;
    img: string;
};

export const OfferCard: React.FC<PropsType> = ({ title, img }) => {
    return (
        <article className={cn(classes.card, 'bg-primary-light-8')}>
            <h3 className={classes.title}>{title}</h3>
            <img src={img} alt="" className={classes.img} />
        </article>
    );
};
