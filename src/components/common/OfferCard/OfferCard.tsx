import { NavLink } from 'react-router-dom';
import { Offer } from '../../../api/offersAPI';
import classes from './OfferCard.module.scss';

export const OfferCard: React.FC<Offer> = ({ id, title, img }) => {
    return (
        <NavLink
            to={`/offers/${id}`}
            style={{ display: 'inline-block', width: '100%' }}
        >
            <article className={classes.card}>
                <h3 className={classes.title}>{title}</h3>
                <img src={img} alt="" className={classes.img} />
            </article>
        </NavLink>
    );
};
