import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { getOneOffer } from '../redux/offers/offersSelectors';
import { root } from '../utils/breadCrumbsPaths';
import { createNewHTML } from '../utils/createNewHTML';
import classes from './../components/pages/ArticlePage/ArticlePage.module.scss';
import { BasePageWithContainer } from './BasePageWithContainer';

const Offer: React.FC = () => {
    const oneOffer = useSelector(getOneOffer);

    const html = createNewHTML(oneOffer.html);

    const params = useParams();
    const offerId = params.offerId;

    const path = [
        root.main.path,
        root.main.offers.path,
        root.main.offers.offer(+offerId!, oneOffer.title),
    ];

    return (
        <BasePageWithContainer>
            <BreadCrumbs path={path} />
            <h1 className="pageTitle">{oneOffer.title}</h1>
            <div className={classes.article}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <img src={oneOffer.img} alt="" />
            </div>
        </BasePageWithContainer>
    );
};

export default Offer;
