import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';

export const FeatureComporasion: React.FC = () => {
    const path = [
        { link: '/', title: 'Главная' },
        { link: '/compare', title: 'Сранвнение товаров' },
    ];
    return (
        <>
            <Header />
            <div className="container">
                <h1 className="pageTitle">Сравнение товаров</h1>
            </div>
            <Footer />
        </>
    );
};
