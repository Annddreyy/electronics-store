import { Review } from '../../../../common/Review/Review';

export const Reviews: React.FC = () => {
    return (
        <div>
            <h2 className="sectionTitle">
                Отзывы на гироскутер Smart Balance Well 6.5
            </h2>
            <Review
                authorName="Александр"
                date={new Date(2021, 5, 7)}
                grade={4}
                title="Оличный самокат!"
                text="Катаюсь каждый день после работы, заряд держит отлично!"
            />
        </div>
    );
};
