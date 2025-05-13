import { useState } from 'react';
import like from './../../../../assets/card/like.png';
import likeAdded from './../../../../assets/card/like_added.png';

type LikeStatusType = 'like' | 'no-like';

export const LikeButton: React.FC = () => {
    const [isLike, setIsLike] = useState<LikeStatusType>('no-like');

    const clickHandle = () => {
        setIsLike((prev) => (prev === 'like' ? 'no-like' : 'like'));
    };

    return (
        <button onClick={clickHandle}>
            <img src={isLike === 'like' ? likeAdded : like} alt="" />
        </button>
    );
};
