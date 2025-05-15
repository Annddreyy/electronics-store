import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { AboutUs } from './pages/AboutUs';
import { WarrantyConditions } from './pages/WarrantyConditons';
import { News } from './pages/News';

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
        </Routes>
    );
};

export default App;
