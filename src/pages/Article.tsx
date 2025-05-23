import { useSelector } from 'react-redux';
import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { Link, Selector } from '../types';
import { createNewHTML } from '../utils/createNewHTML';
import classes from './../components/pages/ArticlePage/ArticlePage.module.scss';
import { BasePageWithContainer } from './BasePageWithContainer';

type Props = {
    selector: Selector<any>;
    path: Link[];
};

export const Article: React.FC<Props> = ({ selector, path }) => {
    const article = useSelector(selector);
    const html = createNewHTML(article.html);

    return (
        <BasePageWithContainer>
            <BreadCrumbs path={path} />
            <h1 className="pageTitle">{article.title}</h1>
            <div className={classes.article}>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <img src={article.img} alt="" />
            </div>
        </BasePageWithContainer>
    );
};
