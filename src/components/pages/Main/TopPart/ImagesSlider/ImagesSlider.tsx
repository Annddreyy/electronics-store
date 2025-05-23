import { useEffect, useState } from 'react';
import { SliderImages } from '../TopPart';
import { v4 } from 'uuid';
import classes from './ImagesSlider.module.scss';
import cn from 'classnames';

export const ImagesSlider: React.FC<SliderImages> = ({ images }) => {
    const imagesElem = images.map((image) => (
        <img src={image.img} key={v4()} />
    ));

    const [currentImage, setCurrentImage] = useState<number>(1);
    const totalImagesCount = images.length;

    const sliderElem = [];
    for (let i = 1; i <= totalImagesCount; i++) {
        sliderElem.push(
            <div
                className={cn(classes.sliderElem, {
                    'bg-white': i <= currentImage,
                    'bg-gray-dark-3': i > currentImage,
                })}
                style={{
                    width: `calc(100% / ${totalImagesCount})`,
                    opacity: `${i > currentImage ? 0.4 : 1}`,
                }}
                key={v4()}
            ></div>,
        );
    }

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentImage((prev) =>
                prev !== totalImagesCount ? prev + 1 : 1,
            );
        }, 2000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className={classes.images}>
            <div className={classes.img}>
                {imagesElem[currentImage - 1]}
                <div className={classes.sliderElements}>{sliderElem}</div>
            </div>
        </div>
    );
};
