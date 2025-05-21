import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { AboutUs } from './pages/AboutUs';
import { WarrantyConditions } from './pages/WarrantyConditons';
import { News } from './pages/News';
import { OneNews } from './pages/OneNews';
import { Offers } from './pages/Offers';
import { Offer } from './pages/Offer';
import { Product } from './pages/Product';
import { Contacts } from './pages/Contacts';
import { Wholesale } from './pages/Wholesale';
import { Dropshipping } from './pages/Dropshipping';
import { Vacancies } from './pages/Vacancies';
import { PersonalCabinet } from './pages/PersonalCabinet';
import { Installment } from './pages/Installment';
import { PlacingAnOrder } from './pages/PlacingAnOrder';
import { Viewed } from './pages/Viewed';
import { Page404 } from './pages/Page404';
import { FavoriteProducts } from './pages/FavoriteProducts';
import { FeatureComporasion } from './pages/FeatureComporasion';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route
                path="/warranty-conditions"
                element={<WarrantyConditions />}
            />

            <Route path="/news" element={<News />} />
            <Route path="/news/:newsId" element={<OneNews />} />

            <Route path="/offers" element={<Offers />} />
            <Route path="offers/:offerId" element={<Offer />} />

            <Route path="products/:productId" element={<Product />} />

            <Route path="/contacts" element={<Contacts />} />

            <Route path="/wholesale" element={<Wholesale />} />

            <Route path="/dropshipping" element={<Dropshipping />} />

            <Route path="/vacancies" element={<Vacancies />} />

            <Route path="/personal-cabinet/*" element={<PersonalCabinet />} />

            <Route path="/installment" element={<Installment />} />

            <Route path="/bin" element={<PlacingAnOrder />} />
            <Route path="/viewed" element={<Viewed />} />
            <Route path="/favorite" element={<FavoriteProducts />} />
            <Route path="/compare" element={<FeatureComporasion />} />

            <Route path="*" element={<Page404 />} />
        </Routes>
    );
};

export default App;
