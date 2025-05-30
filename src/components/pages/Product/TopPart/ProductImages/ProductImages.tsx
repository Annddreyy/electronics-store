import { useState } from 'react';
import { v4 } from 'uuid';
import classes from './ProductImages.module.scss';
import cn from 'classnames';

type Props = {
    images: string[];
};

export const ProductImages: React.FC<Props> = ({ images }) => {
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
