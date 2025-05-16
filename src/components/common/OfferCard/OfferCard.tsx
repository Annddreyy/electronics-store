import { NavLink } from 'react-router-dom';
import { OfferType } from '../../../redux/offers/offersReducer';
import classes from './OfferCard.module.scss';
import cn from 'classnames';

export const OfferCard: React.FC<OfferType> = ({ id, title, img }) => {
    return (
        <NavLink to={`/offers/${id}`}>
            <article className={cn(classes.card, 'bg-secondary')}>
                <h3 className={classes.title}>{title}</h3>
                <img src={img} alt="" className={classes.img} />
            </article>
        </NavLink>
    );
};
