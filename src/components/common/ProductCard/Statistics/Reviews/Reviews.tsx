import classes from './Reviews.module.scss';
import reviewIcon from './../../../../../assets/card/message-square.png';

type Props = {
    commentsCount: number;
};

export const Reviews: React.FC<Props> = ({ commentsCount }) => {
    return (
        <span className={classes.reviews}>
            <img src={reviewIcon} alt="" />({commentsCount})
        </span>
    );
};
