import { useState } from 'react';
import like from './../../../../assets/card/like.png';
import likeAdded from './../../../../assets/card/like_added.png';
import { useDispatch, useSelector } from 'react-redux';
import {
    actions,
    ProductType,
} from '../../../../redux/products/productsReducer';
import { getFavoriteProductById } from '../../../../redux/products/productsSelectors';

type LikeStatusType = 'like' | 'no-like';

type PropsType = {
    product: ProductType;
};

export const LikeButton: React.FC<PropsType> = ({ product }) => {
    const isFavorityProduct = useSelector(getFavoriteProductById(product.id))
        ? 'like'
        : 'no-like';
    const [isLike, setIsLike] = useState<LikeStatusType>(isFavorityProduct);
    const dispatch = useDispatch();

    const clickHandle = () => {
        setIsLike((prev) => (prev === 'like' ? 'no-like' : 'like'));
        if (!isLike) {
            dispatch(actions.deleteFavoriteProduct(product));
        } else {
            dispatch(actions.setFavoriteProduct(product));
        }
    };

    return (
        <button onClick={clickHandle}>
            <img src={isLike === 'like' ? likeAdded : like} alt="" />
        </button>
    );
};
