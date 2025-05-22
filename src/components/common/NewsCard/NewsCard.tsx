import { NavLink } from 'react-router-dom';
import { formatDate } from '../../../utils/formatDate';
import classes from './NewsCard.module.scss';
import { News } from '../../../api/newsAPI';

export const NewsCard: React.FC<News> = ({ id, title, text, date, img }) => {
    const dateString = formatDate(date);
    return (
        <NavLink to={`/news/${id}`}>
            <article className={classes.news}>
                {img && <img src={img} alt="" />}
                <div className={classes.information}>
                    <h3 className={classes.title}>{title}</h3>
                    <p>{text}</p>
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
