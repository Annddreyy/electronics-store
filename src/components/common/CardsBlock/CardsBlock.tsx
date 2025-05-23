import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/store';
import { v4 } from 'uuid';
import classes from './CardsBlock.module.scss';

type Props = {
    selector: (state: AppState) => any[];
    Card: React.FC<any>;
};

export const CardsBlock: React.FC<Props> = ({ selector, Card }) => {
    const cards = useSelector(selector);
    const cardsElem = cards.map((card) => <Card {...card} key={v4()} />);

    return <section className={classes.cardsBlock}>{cardsElem}</section>;
};
