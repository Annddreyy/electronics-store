import { useSelector } from 'react-redux';
import { getOfferById } from '../../../redux/offers/offersSelectors';
import { OfferCard } from '../OfferCard/OfferCard';
import classes from './OfferCardsGroup.module.scss';
import { v4 } from 'uuid';

type Props = {
    id1: number;
    id2: number;
};

export const OfferCardsGroup: React.FC<Props> = ({ id1, id2 }) => {
    const offer1 = useSelector(getOfferById(id1))!;
    const offer2 = useSelector(getOfferById(id2))!;

    return (
        <div className={classes.offerCards}>
            <OfferCard {...offer1} key={v4()} />
            <OfferCard {...offer2} key={v4()} />
        </div>
    );
};
