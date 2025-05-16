import classes from './Reviews.module.scss';
import reviewIcon from './../../../../../assets/card/message-square.png';

type PropsType = {
    commentsCount: number;
};

export const Reviews: React.FC<PropsType> = ({ commentsCount }) => {
    return (
        <span className={classes.reviews}>
            <img src={reviewIcon} alt="" />({commentsCount})
        </span>
    );
};
