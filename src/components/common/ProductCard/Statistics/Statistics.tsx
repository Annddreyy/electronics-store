import { Reviews } from './Reviews/Reviews';
import { Stars } from './Stars/Stars';

import classes from './Statistics.module.scss';

type PropsType = {
    grade: number;
    commentsCount: number;
};

export const Statistics: React.FC<PropsType> = ({ grade, commentsCount }) => {
    return (
        <div className={classes.statistics}>
            <Stars grade={grade} />
            <Reviews commentsCount={commentsCount} />
        </div>
    );
};
