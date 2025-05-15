import { useSelector } from 'react-redux';
import { getOfferById } from '../../../redux/offers/offersSelectors';
import { OfferCard } from '../OfferCard/OfferCard';
import classes from './OfferCardsGroup.module.scss';

type PropsType = {
    id1: number;
    id2: number;
};

export const OfferCardsGroup: React.FC<PropsType> = ({ id1, id2 }) => {
    const offer1 = useSelector(getOfferById(id1))!;
    const offer2 = useSelector(getOfferById(id2))!;

    return (
        <div className={classes.offerCards}>
            <OfferCard {...offer1} />
            <OfferCard {...offer2} />
        </div>
    );
};
