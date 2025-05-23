import { Grade } from '../../../../api/productsAPI';
import { Reviews } from './Reviews/Reviews';
import { Stars } from './Stars/Stars';
import classes from './Statistics.module.scss';

type Props = {
    grade: Grade;
    commentsCount: number;
};

export const Statistics: React.FC<Props> = ({ grade, commentsCount }) => {
    return (
        <div className={classes.statistics}>
            <Stars grade={grade} />
            <Reviews commentsCount={commentsCount} />
        </div>
    );
};
