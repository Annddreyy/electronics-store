import { useSelector } from 'react-redux';
import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { CardsBlock } from '../components/common/CardsBlock/CardsBlock';
import { OfferCard } from '../components/common/OfferCard/OfferCard';
import { Paginator } from '../components/common/Paginator/Paginator';
import { getOffers, getPageSize } from '../redux/offers/offersSelectors';
import { root } from '../utils/breadCrumbsPaths';
import { BasePageWithContainer } from './BasePageWithContainer';
import { actions } from '../redux/offers/offersReducer';

const Offers: React.FC = () => {
    const path = [root.main.path, root.main.offers.path];
    const offers = useSelector(getOffers);
    const pageSize = useSelector(getPageSize);
    return (
        <BasePageWithContainer>
            <BreadCrumbs path={path} />
            <h2 className="pageTitle">Акции</h2>
            <CardsBlock cards={offers} Card={OfferCard} />
            <Paginator
                totalItemsCount={offers.length}
                pageSize={pageSize}
                setCurrentPage={actions.setCurrentPage}
            />
        </BasePageWithContainer>
    );
};

export default Offers;
