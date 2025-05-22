import { v4 } from 'uuid';
import { ReviewCard } from '../../../../common/ReviewCard/Review';
import classes from './Reviews.module.scss';
import { Review } from '../../../../../api/productsAPI';

type Props = {
    title: string;
    reviews: Review[];
};

export const Reviews: React.FC<Props> = ({ reviews, title }) => {
    const reviewsElem = reviews.map((review) => (
        <ReviewCard {...review} key={v4()} />
    ));

    return (
        <div>
            <h2 className="sectionTitle">{title}</h2>
            <div className={classes.reviewsBottom}>
                <div className={classes.reviews}>{reviewsElem}</div>
                <div className={classes.addReview}>
                    <strong>Напишите свое мнение о товаре</strong>
                    <p>Сделайте выбор других покупателей легче</p>
                    <button className="button-primary">Написать отзыв</button>
                </div>
            </div>
        </div>
    );
};
