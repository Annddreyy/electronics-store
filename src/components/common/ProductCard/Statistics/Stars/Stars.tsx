import { v4 } from 'uuid';
import star from './../../../../../assets/card/star.png';
import starFill from './../../../../../assets/card/starFill.png';

type Props = {
    grade: number;
};

export const Stars: React.FC<Props> = ({ grade }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<img src={i < grade ? starFill : star} alt="" key={v4()} />);
    }
    return <div>{stars}</div>;
};
