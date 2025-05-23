import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from './components/common/Loading/Loading';
import Main from './pages/Main';
import { getOneNews } from './redux/news/newsSelector';
import { root } from './utils/breadCrumbsPaths';
import { getOneOffer } from './redux/offers/offersSelectors';

const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const WarrantyConditions = React.lazy(
    () => import('./pages/WarrantyConditons'),
);
const News = React.lazy(() => import('./pages/News'));
const Offers = React.lazy(() => import('./pages/Offers'));
const Product = React.lazy(() => import('./pages/Product'));
const Contacts = React.lazy(() => import('./pages/Contacts'));
const Wholesale = React.lazy(() => import('./pages/Wholesale'));
const Dropshipping = React.lazy(() => import('./pages/Dropshipping'));
const Vacancies = React.lazy(() => import('./pages/Vacancies'));
const PersonalCabinet = React.lazy(() => import('./pages/PersonalCabinet'));
const Installment = React.lazy(() => import('./pages/Installment'));
const PlacingAnOrder = React.lazy(() => import('./pages/PlacingAnOrder'));
const Viewed = React.lazy(() => import('./pages/Viewed'));
const Page404 = React.lazy(() => import('./pages/Page404'));
const FavoriteProducts = React.lazy(() => import('./pages/FavoriteProducts'));
const FeatureComporasion = React.lazy(
    () => import('./pages/FeatureComporasion'),
);
const ArticleWrapper = React.lazy(() => import('./pages/ArticleWrapper'));

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />

            <Route
                path="/news"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <News />
                    </React.Suspense>
                }
            />
            <Route
                path="/news/:newsId"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <ArticleWrapper
                            selector={getOneNews}
                            pathBuilder={(id, title) => [
                                root.main.path,
                                root.main.news.path,
                                root.main.news.oneNews(id, title),
                            ]}
                        />
                    </React.Suspense>
                }
            />

            <Route
                path="/offers"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <Offers />
                    </React.Suspense>
                }
            />
            <Route
                path="offers/:offerId"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <ArticleWrapper
                            selector={getOneOffer}
                            pathBuilder={(id, title) => [
                                root.main.path,
                                root.main.offers.path,
                                root.main.offers.offer(id, title),
                            ]}
                        />
                    </React.Suspense>
                }
            />

            <Route
                path="products/:productId"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <Product />
                    </React.Suspense>
                }
            />

            <Route
                path="/personal-cabinet/*"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <PersonalCabinet />
                    </React.Suspense>
                }
            />

            <Route
                path="/about-us"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <AboutUs />
                    </React.Suspense>
                }
            />
            <Route
                path="/warranty-conditions"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <WarrantyConditions />
                    </React.Suspense>
                }
            />
            <Route
                path="/contacts"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <Contacts />
                    </React.Suspense>
                }
            />
            <Route
                path="/wholesale"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <Wholesale />
                    </React.Suspense>
                }
            />
            <Route
                path="/dropshipping"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <Dropshipping />
                    </React.Suspense>
                }
            />
            <Route
                path="/vacancies"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <Vacancies />
                    </React.Suspense>
                }
            />
            <Route
                path="/installment"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <Installment />
                    </React.Suspense>
                }
            />

            <Route
                path="/bin"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <PlacingAnOrder />
                    </React.Suspense>
                }
            />
            <Route
                path="/viewed"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <Viewed />
                    </React.Suspense>
                }
            />
            <Route
                path="/favorite"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <FavoriteProducts />
                    </React.Suspense>
                }
            />
            <Route
                path="/compare"
                element={
                    <React.Suspense fallback={<Loading />}>
                        <FeatureComporasion />
                    </React.Suspense>
                }
            />

            <Route path="*" element={<Page404 />} />
        </Routes>
    );
};

export default App;
