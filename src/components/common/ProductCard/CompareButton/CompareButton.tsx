import { useState } from 'react';
import compare from './../../../../assets/card/compare.png';
import compareAdd from './../../../../assets/card/compare_ added.png';

type AddedStatus = 'added' | 'no-added';

export const CompareButton: React.FC = () => {
    const [isAdded, setIsAdded] = useState<AddedStatus>('no-added');

    const clickHandle = () => {
        setIsAdded((prev) => (prev === 'added' ? 'no-added' : 'added'));
    };

    return (
        <button onClick={clickHandle}>
            <img src={isAdded === 'added' ? compareAdd : compare} alt="" />
        </button>
    );
};
