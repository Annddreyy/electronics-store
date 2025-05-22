import { useState } from 'react';
import classes from './ProductImages.module.scss';
import cn from 'classnames';
import { v4 } from 'uuid';

type PropsType = {
    images: string[];
};

export const ProductImages: React.FC<PropsType> = ({ images }) => {
    const [imageIndex, setImageIndex] = useState<number>(0);
    const imagesElem = images.map((img, index) => (
        <img
            src={img}
            alt=""
            data-selected={index === imageIndex || undefined}
            key={v4()}
        />
    ));

    const onPrevImageHandler = () => {
        setImageIndex((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const onNextImageHandler = () => {
        setImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
    };

    return (
        <div className={classes.productImages}>
            <img
                src={images[imageIndex]}
                className={classes.selectedImg}
                alt=""
            />
            <div className={classes.slider}>
                <button
                    onClick={onPrevImageHandler}
                    disabled={imageIndex === 0}
                    className={cn('border-secondary', {
                        'bg-secondary': imageIndex !== 0,
                        'text-secondary': imageIndex === 0,
                    })}
                >
                    ◀
                </button>
                <div className={classes.images}>{imagesElem}</div>
                <button
                    onClick={onNextImageHandler}
                    disabled={imageIndex === images.length - 1}
                    className={cn('border-secondary', {
                        'bg-secondary': imageIndex !== images.length - 1,
                        'text-secondary': imageIndex === images.length - 1,
                    })}
                >
                    ▶
                </button>
            </div>
        </div>
    );
};
