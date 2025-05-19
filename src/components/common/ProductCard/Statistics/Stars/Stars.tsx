import star from './../../../../../assets/card/star.png';
import starFill from './../../../../../assets/card/starFill.png';

type PropsType = {
    grade: number;
};

export const Stars: React.FC<PropsType> = ({ grade }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<img src={i < grade ? starFill : star} alt="" />);
    }
    return <div>{stars}</div>;
};
