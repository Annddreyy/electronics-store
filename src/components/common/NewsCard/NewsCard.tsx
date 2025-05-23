import { NavLink } from 'react-router-dom';
import { formatDate } from '../../../utils/formatDate';
import { News } from '../../../api/newsAPI';
import classes from './NewsCard.module.scss';

export const NewsCard: React.FC<News> = (news) => {
    const dateString = formatDate(news.date);
    return (
        <NavLink to={`/news/${news.id}`}>
            <article className={classes.news}>
                {news.img && <img src={news.img} alt="" />}
                <div className={classes.information}>
                    <h3 className={classes.title}>{news.title}</h3>
                    <p>{news.text}</p>
                    <div className={classes.bottom}>
                        <button className={'text-primary-dark-4'}>
                            Подробнее ▶
                        </button>
                        <time dateTime="2021-06-05 00:00">{dateString}</time>
                    </div>
                </div>
            </article>
        </NavLink>
    );
};
