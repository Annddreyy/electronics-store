import classes from './NewsCard.module.scss';
import news from './../../../assets/news/news-img.png';

type PropsType = {
    title: string;
    text: string;
    date: Date;
    img?: string;
};

export const NewsCard: React.FC<PropsType> = ({ title, text, date, img }) => {
    const dateFormatter = Intl.DateTimeFormat('ru', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });

    const dateString = dateFormatter.format(date);

    return (
        <article className={classes.news}>
            {img && <img src={img} alt="" />}
            <div className={classes.information}>
                <h3 className={classes.title}>{title}</h3>
                <p>{text}</p>
                <div className={classes.bottom}>
                    <button>Подробнее ▶</button>
                    <time dateTime="2021-06-05 00:00">{dateString}</time>
                </div>
            </div>
        </article>
    );
};
