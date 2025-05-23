import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { CardsBlock } from '../components/common/CardsBlock/CardsBlock';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { OfferCard } from '../components/common/OfferCard/OfferCard';
import { Paginator } from '../components/common/Paginator/Paginator';
import { getOffersSelector } from '../redux/offers/offersSelectors';
import { root } from '../utils/breadCrumbsPaths';

const Offers: React.FC = () => {
    const path = [root.main.path, root.main.offers.path];
    return (
        <>
            <Header />
            <div className="container">
                <BreadCrumbs path={path} />
                <h2 className="pageTitle">Акции</h2>
                <CardsBlock selector={getOffersSelector} Card={OfferCard} />
                <Paginator totalItemsCount={100} pageSize={10} />
            </div>
            <Footer />
        </>
    );
};

export default Offers;
