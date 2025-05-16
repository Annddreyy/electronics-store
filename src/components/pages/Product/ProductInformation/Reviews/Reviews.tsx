import { Review } from '../../../../common/Review/Review';
import classes from './Reviews.module.scss';

export const Reviews: React.FC = () => {
    return (
        <div>
            <h2 className="sectionTitle">
                Отзывы на гироскутер Smart Balance Well 6.5
            </h2>
            <div className={classes.reviewsBottom}>
                <div className={classes.reviews}>
                    <Review
                        authorName="Александр"
                        date={new Date(2021, 5, 7)}
                        grade={4}
                        title="Оличный самокат!"
                        text="Катаюсь каждый день после работы, заряд держит отлично!"
                    />
                    <Review
                        authorName="Александр"
                        date={new Date(2021, 5, 7)}
                        grade={4}
                        title="Оличный самокат!"
                        text="Катаюсь каждый день после работы, заряд держит отлично!"
                    />
                    <Review
                        authorName="Александр"
                        date={new Date(2021, 5, 7)}
                        grade={4}
                        title="Оличный самокат!"
                        text="Катаюсь каждый день после работы, заряд держит отлично!"
                    />
                    <Review
                        authorName="Александр"
                        date={new Date(2021, 5, 7)}
                        grade={4}
                        title="Оличный самокат!"
                        text="Катаюсь каждый день после работы, заряд держит отлично!"
                    />
                </div>
                <div className={classes.addReview}>
                    <strong>Напишите свое мнение о товаре</strong>
                    <p>Сделайте выбор других покупателей легче</p>
                    <button className="button-primary">Написать отзыв</button>
                </div>
            </div>
        </div>
    );
};
