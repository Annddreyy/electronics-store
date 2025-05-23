import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { getOneNews } from '../redux/news/newsSelector';
import { root } from '../utils/breadCrumbsPaths';
import { createNewHTML } from '../utils/createNewHTML';
import classes from './../components/pages/ArticlePage/ArticlePage.module.scss';

const OneNews: React.FC = () => {
    const oneNews = useSelector(getOneNews);

    let html = createNewHTML(oneNews.html);

    const params = useParams();
    const newsId = params.newsId;

    const path = [
        root.main.path,
        root.main.news.path,
        root.main.news.oneNews(+newsId!, oneNews.title),
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

export default OneNews;
