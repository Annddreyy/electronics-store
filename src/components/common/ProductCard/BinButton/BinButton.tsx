import cardAdded from './../../../../assets/card/card_added.png';
import cardHover from './../../../../assets/card/card_hover.png';
import cardDefault from './../../../../assets/card/card.png';
import { useState } from 'react';

type BinButtonStatus = 'default' | 'added' | 'hover';

export const BinButton: React.FC = () => {
    const [binStatus, setBinStatus] = useState<BinButtonStatus>('default');

    const clickHandler = () => {
        setBinStatus((prev) => (prev !== 'added' ? 'added' : 'default'));
    };

    const mouseOverHandler = () => {
        setBinStatus((prev) => (prev !== 'added' ? 'hover' : 'added'));
    };

    const mouseOutHandler = () => {
        setBinStatus((prev) => (prev !== 'added' ? 'default' : 'added'));
    };

    const switchBinButtonImage = (status: BinButtonStatus) => {
        switch (status) {
            case 'added':
                return cardAdded;
            case 'hover':
                return cardHover;
            case 'default':
                return cardDefault;
        }
    };

    return (
        <button
            onClick={clickHandler}
            onMouseOver={mouseOverHandler}
            onMouseOut={mouseOutHandler}
        >
            <img src={switchBinButtonImage(binStatus)} alt="" />
        </button>
    );
};
