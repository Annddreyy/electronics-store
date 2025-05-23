import { useSelector } from 'react-redux';
import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { CardsBlock } from '../components/common/CardsBlock/CardsBlock';
import { NewsCard } from '../components/common/NewsCard/NewsCard';
import { Paginator } from '../components/common/Paginator/Paginator';
import { getNews, getPageSize } from '../redux/news/newsSelector';
import { root } from '../utils/breadCrumbsPaths';
import { BasePageWithContainer } from './BasePageWithContainer';
import { actions } from '../redux/news/newsReducer';

const News: React.FC = () => {
    const path = [root.main.path, root.main.news.path];
    const news = useSelector(getNews);
    console.log(news.length);
    const pageSize = useSelector(getPageSize);
    console.log(pageSize);

    return (
        <BasePageWithContainer>
            <BreadCrumbs path={path} />
            <h2 className="pageTitle">Новости</h2>
            <CardsBlock cards={news} Card={NewsCard} />
            <Paginator
                totalItemsCount={news.length}
                pageSize={pageSize}
                setCurrentPage={actions.setCurrentPage}
            />
        </BasePageWithContainer>
    );
};

export default News;
