import { useLocation } from 'react-router-dom';
import { AccoutMenu } from '../components/common/AccountMenu/AccoutMenu';
import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { Favorites } from '../components/pages/PersonalCabinet/Favorites/Favorites';
import { History } from '../components/pages/PersonalCabinet/History/History';
import { Main } from '../components/pages/PersonalCabinet/Main/Main';
import { NewPssword } from '../components/pages/PersonalCabinet/NewPassword/NewPassword';
import { PersonalData } from '../components/pages/PersonalCabinet/PersonalData/PersonalData';
import { root } from '../utils/breadCrumbsPaths';
import classes from './../components/pages/PersonalCabinet/PersonalCabinet.module.scss';
import { BasePageWithContainer } from './BasePageWithContainer';

const Pages = {
    MAIN: root.main.personalCabinet.main.path.link,
    FAVORITES: root.main.personalCabinet.favorites.path.link,
    HISTORY: root.main.personalCabinet.history.path.link,
    NEW_PASSWORD: root.main.personalCabinet.pass.path.link,
    PERSONAL_DATA: root.main.personalCabinet.personalData.path.link,
} as const;

const pagesElem = {
    [Pages.MAIN]: <Main />,
    [Pages.FAVORITES]: <Favorites />,
    [Pages.HISTORY]: <History />,
    [Pages.NEW_PASSWORD]: <NewPssword />,
    [Pages.PERSONAL_DATA]: <PersonalData />,
};

const pages = {
    [Pages.MAIN]: ['Общие сведения', pagesElem[Pages.MAIN]],
    [Pages.FAVORITES]: ['Избранное', pagesElem[Pages.FAVORITES]],
    [Pages.HISTORY]: ['История покупок', pagesElem[Pages.HISTORY]],
    [Pages.NEW_PASSWORD]: ['Смена пароля', pagesElem[Pages.NEW_PASSWORD]],
    [Pages.PERSONAL_DATA]: ['Личные данные', pagesElem[Pages.PERSONAL_DATA]],
};

const PersonalCabinet: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname as `/${string}`;
    const currentPage = `${location.pathname}`;

    const path = [
        root.main.path,
        root.main.personalCabinet.path,
        { link: currentPath, title: pages[currentPage][0] as string },
    ];

    return (
        <BasePageWithContainer>
            <BreadCrumbs path={path} />
            <h1 className="pageTitle">{pages[currentPage][0]}</h1>
            <div className={classes.information}>
                <AccoutMenu />
                {pages[currentPage][1]}
            </div>
        </BasePageWithContainer>
    );
};

export default PersonalCabinet;
