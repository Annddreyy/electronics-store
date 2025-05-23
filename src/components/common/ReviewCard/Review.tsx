import { Review } from '../../../api/productsAPI';
import { formatDate } from '../../../utils/formatDate';
import { Stars } from '../ProductCard/Statistics/Stars/Stars';
import classes from './Review.module.scss';
import cn from 'classnames';

export const ReviewCard: React.FC<Review> = (review) => {
    return (
        <article className={classes.review}>
            <div className={classes.top}>
                <div className={classes.left}>
                    {review.img ? (
                        <img src="" alt="" className={classes.img} />
                    ) : (
                        <div className={cn(classes.img, 'bg-gray-light-6')}>
                            <span className={classes.letter}>
                                {review.author[0]}
                            </span>
                        </div>
                    )}
                    <div className={classes.block}>
                        <span className={classes.author}>{review.author}</span>
                        <time
                            dateTime={review.date.toDateString()}
                            className={classes.time}
                        >
                            {formatDate(review.date)}
                        </time>
                    </div>
                </div>
                <div className={classes.block}>
                    {<Stars grade={review.grade} />}
                    <span className={classes.grade}>({review.grade} из 5)</span>
                </div>
            </div>
            <h3>{review.title}</h3>
            <p>{review.text}</p>
        </article>
    );
};
