import { useSelector } from 'react-redux';
import { OfferType } from '../../../redux/offers/offersReducer';
import { OfferCard } from '../OfferCard/OfferCard';
import classes from './OfferCardsGroup.module.scss';
import { getOfferById } from '../../../redux/offers/offersSelectors';

type PropsType = {
    id1: number;
    id2: number;
};

export const OfferCardsGroup: React.FC<PropsType> = ({ id1, id2 }) => {
    const offer1 = useSelector(getOfferById(id1))!;
    const offer2 = useSelector(getOfferById(id2))!;

    return (
        <div className={classes.offerCards}>
            <OfferCard title={offer1.title} img={offer1.img} />
            <OfferCard title={offer2.title} img={offer2.img} />
        </div>
    );
};
