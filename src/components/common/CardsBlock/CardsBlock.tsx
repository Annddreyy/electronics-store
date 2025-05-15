import { useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store';
import React from 'react';
import classes from './CardsBlock.module.scss';

type PropsType = {
    selector: (state: AppStateType) => any[];
    Card: React.FC<any>;
};

export const CardsBlock: React.FC<PropsType> = ({ selector, Card }) => {
    const cards = useSelector(selector);
    const cardsElem = cards.map((card) => <Card {...card} />);

    return <section className={classes.cardsBlock}>{cardsElem}</section>;
};
