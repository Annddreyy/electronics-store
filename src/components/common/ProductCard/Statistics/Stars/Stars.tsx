import starFill from './../../../../../assets/card/starFill.png';
import star from './../../../../../assets/card/star.png';
import classes from './Stars.module.scss';

type PropsType = {
    grade: number;
};

export const Stars: React.FC<PropsType> = ({ grade }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<img src={i < grade ? starFill : star} />);
    }
    return <div className={classes.stars}>{stars}</div>;
};
