import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Article } from './Article';
import { Link, Selector } from './../types';

type Props = {
    selector: Selector<any>; // типизируй под свой state
    pathBuilder: (id: number, title: string) => Link[];
};

export const ArticleWrapper: React.FC<Props> = ({ selector, pathBuilder }) => {
    const { newsId, offerId } = useParams();
    const id = Number(newsId || offerId);

    const item = useSelector(selector);
    const title = item?.title ?? '';

    const path = pathBuilder(id, title);

    return <Article selector={selector} path={path} />;
};
