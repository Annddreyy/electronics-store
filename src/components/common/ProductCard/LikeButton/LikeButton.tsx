import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../../../api/productsAPI';
import { getFavoriteProductById } from '../../../../redux/products/productsSelectors';
import like from './../../../../assets/card/like.png';
import likeAdded from './../../../../assets/card/like_added.png';
import { actions } from '../../../../redux/products/productsReducer';

type LikeStatus = 'like' | 'no-like';

type Props = {
    product: Product;
};

export const LikeButton: React.FC<Props> = ({ product }) => {
    const isFavorityProduct = useSelector(getFavoriteProductById(product.id))
        ? 'like'
        : 'no-like';
    const [isLike, setIsLike] = useState<LikeStatus>(isFavorityProduct);
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
