import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { getOneOffer } from '../redux/offers/offersSelectors';
import { LinkType } from '../types';
import { createNewHTML } from '../utils/createNewHTML';
import classes from './../components/pages/ArticlePage/ArticlePage.module.scss';

const Offer: React.FC = () => {
    const oneOffer = useSelector(getOneOffer);

    const html = createNewHTML(oneOffer.html);

    const params = useParams();
    const offerId = params.offerId;

    const path: LinkType[] = [
        { link: '/', title: 'Главная' },
        { link: '/offers', title: 'Акции' },
        { link: `/offers/${offerId}`, title: oneOffer.title },
    ];

    return (
        <>
            <Header />
            <div className="container">
                <BreadCrumbs path={path} />
                <h1 className="pageTitle">{oneOffer.title}</h1>
                <div className={classes.article}>
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                    <img src={oneOffer.img} alt="" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Offer;
