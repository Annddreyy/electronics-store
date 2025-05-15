import { useSelector } from 'react-redux';
import { getNews } from '../../../../redux/news/newsSelector';
import { NewsCard } from '../../../common/NewsCard/NewsCard';
import classes from './NewsBlock.module.scss';

export const NewsBlock: React.FC = () => {
    const news = useSelector(getNews);
    const newsElem = news.map((n) => <NewsCard {...n} />);
    return <section className={classes.newsBlock}>{newsElem}</section>;
};
