import { formatDate } from '../../../utils/formatDate';
import { Stars } from '../ProductCard/Statistics/Stars/Stars';
import classes from './Review.module.scss';
import cn from 'classnames';

type PropsType = {
    img?: string;
    authorName: string;
    date: Date;
    grade: number;
    title: string;
    text: string;
};

export const Review: React.FC<PropsType> = ({
    img,
    authorName,
    date,
    grade,
    title,
    text,
}) => {
    return (
        <article className={classes.review}>
            <div className={classes.top}>
                {img ? (
                    <img src="" alt="" className={classes.img} />
                ) : (
                    <div className={cn(classes.img, 'bg-gray-light-6')}>
                        <span className={classes.letter}>{authorName[0]}</span>
                    </div>
                )}
                <div className={classes.block}>
                    <span className={classes.author}>{authorName}</span>
                    <time
                        dateTime={date.toDateString()}
                        className={classes.time}
                    >
                        {formatDate(date)}
                    </time>
                </div>
                <div className={classes.block}>
                    {<Stars grade={grade} />}
                    <span className={classes.grade}>({grade} из 5)</span>
                </div>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </article>
    );
};
