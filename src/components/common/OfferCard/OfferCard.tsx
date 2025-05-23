import { NavLink } from 'react-router-dom';
import { Offer } from '../../../api/offersAPI';
import classes from './OfferCard.module.scss';

export const OfferCard: React.FC<Offer> = (offer) => {
    return (
        <NavLink
            to={`/offers/${offer.id}`}
            style={{ display: 'inline-block', width: '100%' }}
        >
            <article className={classes.card}>
                <h3 className={classes.title}>{offer.title}</h3>
                <img src={offer.img} alt="" className={classes.img} />
            </article>
        </NavLink>
    );
};
