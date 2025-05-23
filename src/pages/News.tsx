import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { CardsBlock } from '../components/common/CardsBlock/CardsBlock';
import { NewsCard } from '../components/common/NewsCard/NewsCard';
import { Paginator } from '../components/common/Paginator/Paginator';
import { getNews } from '../redux/news/newsSelector';
import { root } from '../utils/breadCrumbsPaths';
import { BasePageWithContainer } from './BasePageWithContainer';

const News: React.FC = () => {
    const path = [root.main.path, root.main.news.path];
    return (
        <BasePageWithContainer>
            <BreadCrumbs path={path} />
            <h2 className="pageTitle">Новости</h2>
            <CardsBlock selector={getNews} Card={NewsCard} />
            <Paginator totalItemsCount={100} pageSize={10} />
        </BasePageWithContainer>
    );
};

export default News;
