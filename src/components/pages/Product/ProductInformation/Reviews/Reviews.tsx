import { v4 } from 'uuid';
import { ReviewType } from '../../../../../redux/products/productsReducer';
import { Review } from '../../../../common/Review/Review';
import classes from './Reviews.module.scss';

type PropsType = {
    title: string;
    reviews: ReviewType[];
};

export const Reviews: React.FC<PropsType> = ({ reviews, title }) => {
    const reviewsElem = reviews.map((review) => (
        <Review {...review} key={v4()} />
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
