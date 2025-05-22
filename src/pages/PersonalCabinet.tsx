import { useLocation } from 'react-router-dom';
import { AccoutMenu } from '../components/common/AccountMenu/AccoutMenu';
import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { Favorites } from '../components/pages/PersonalCabinet/Favorites/Favorites';
import { History } from '../components/pages/PersonalCabinet/History/History';
import { Main } from '../components/pages/PersonalCabinet/Main/Main';
import { NewPssword } from '../components/pages/PersonalCabinet/NewPassword/NewPassword';
import { PersonalData } from '../components/pages/PersonalCabinet/PersonalData/PersonalData';
import { Link } from '../types';
import classes from './../components/pages/PersonalCabinet/PersonalCabinet.module.scss';

enum PagesEnum {
    MAIN = '/main',
    FAVORITES = '/favorites',
    HISTORY = '/history',
    NEW_PASSWORD = '/pass',
    PERSONAL_DATA = '/personal-data',
}

const pagesElem = {
    [PagesEnum.MAIN]: <Main />,
    [PagesEnum.FAVORITES]: <Favorites />,
    [PagesEnum.HISTORY]: <History />,
    [PagesEnum.NEW_PASSWORD]: <NewPssword />,
    [PagesEnum.PERSONAL_DATA]: <PersonalData />,
};

const pages = {
    [PagesEnum.MAIN]: ['Общие сведения', pagesElem[PagesEnum.MAIN]],
    [PagesEnum.FAVORITES]: ['Избранное', pagesElem[PagesEnum.FAVORITES]],
    [PagesEnum.HISTORY]: ['История покупок', pagesElem[PagesEnum.HISTORY]],
    [PagesEnum.NEW_PASSWORD]: [
        'Смена пароля',
        pagesElem[PagesEnum.NEW_PASSWORD],
    ],
    [PagesEnum.PERSONAL_DATA]: [
        'Личные данные',
        pagesElem[PagesEnum.PERSONAL_DATA],
    ],
};

const PersonalCabinet: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname as `/${string}`;
    const currentPage = `/${location.pathname.split('/').at(-1)}` as PagesEnum;

    const path: Link[] = [
        { link: '/', title: 'Главная' },
        { link: '/personal-cabinet/main', title: 'Личный кабинет' },
        { link: currentPath, title: pages[currentPage][0] as string },
    ];
    return (
        <>
            <Header />
            <div className="container">
                <BreadCrumbs path={path} />
                <h1 className="pageTitle">{pages[currentPage][0]}</h1>
                <div className={classes.information}>
                    <AccoutMenu />
                    {pages[currentPage][1]}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PersonalCabinet;
