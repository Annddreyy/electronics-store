import React from 'react';
import { Header } from '../components/common/Header/Header';
import { Footer } from '../components/common/Footer/Footer';
import { useSelector } from 'react-redux';
import { getOneNews } from '../redux/news/newsSelector';
import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { useParams } from 'react-router-dom';
import { LinkType } from '../types';
import { createNewHTML } from '../utils/createNewHTML';
import classes from './../components/pages/ArticlePage/ArticlePage.module.scss';

export const OneNews: React.FC = () => {
    const oneNews = useSelector(getOneNews);

    let html = createNewHTML(oneNews.html);

    const params = useParams();
    const newsId = params.newsId;

    const path: LinkType[] = [
        { link: '/', title: 'Главная' },
        { link: '/news', title: 'Новости' },
        { link: `/news/${newsId}`, title: oneNews.title },
    ];

    return (
        <>
            <Header />
            <div className="container">
                <BreadCrumbs path={path} />
                <h1 className="pageTitle">{oneNews.title}</h1>
                <div className={classes.article}>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                    <img src={oneNews.img} alt="" />
                </div>
            </div>
            <Footer />
        </>
    );
};
