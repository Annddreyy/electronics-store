import { NewsType } from '../../../redux/news/newsReducer';
import classes from './NewsCard.module.scss';
import cn from 'classnames';

export const NewsCard: React.FC<NewsType> = ({ title, text, date, img }) => {
    const dateFormatter = Intl.DateTimeFormat('ru', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    const dateString = dateFormatter.format(date);

    return (
        <article className={cn(classes.news, 'bg-primary-light-8')}>
            {img && <img src={img} alt="" />}
            <div className={classes.information}>
                <h3 className={classes.title}>{title}</h3>
                <p>{text}</p>
                <div className={classes.bottom}>
                    <button className={'text-primary-dark-4'}>
                        Подробнее ▶
                    </button>
                    <time dateTime="2021-06-05 00:00" className={'text-gray'}>
                        {dateString}
                    </time>
                </div>
            </div>
        </article>
    );
};
