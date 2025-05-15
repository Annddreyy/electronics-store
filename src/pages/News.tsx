import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { Paginator } from '../components/common/Paginator/Paginator';
import { NewsBlock } from '../components/pages/News/NewsBlock/NewsBlock';
import { LinkType } from '../types';

export const News: React.FC = () => {
    const path: LinkType[] = [
        { link: '/', title: 'Главная' },
        { link: '/news', title: 'Новости' },
    ];

    return (
        <>
            <Header />
            <div className="container">
                <BreadCrumbs path={path} />
                <h2 className="pageTitle">Новости</h2>
                <NewsBlock />
                <Paginator
                    totalItemsCount={100}
                    pageSize={10}
                    pagesPerGroup={3}
                />
            </div>
            <Footer />
        </>
    );
};
