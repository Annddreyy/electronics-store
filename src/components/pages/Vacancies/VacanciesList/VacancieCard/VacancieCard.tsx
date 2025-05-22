import { v4 } from 'uuid';
import { VacancieType } from '../VacanciesList';
import classes from './VacancieCard.module.scss';

export const VacancieCard: React.FC<VacancieType> = ({
    title,
    thooseWho,
    requirements,
    conditions,
}) => {
    const thooseWhoElem = thooseWho.map((t) => <li key={v4()}>{t}</li>);
    const requirementsElem = requirements.map((r) => <li key={v4()}>{r}</li>);
    const conditionsElem = conditions.map((c) => <li key={v4()}>{c}</li>);
    return (
        <details className={classes.vacancieCard}>
            <summary className={classes.title}>{title}</summary>
            <div className={classes.information}>
                <div>
                    <h2 className="sectionTitle">Мы ищем тех, кто:</h2>
                    <ul>{thooseWhoElem}</ul>
                </div>
                <div>
                    <h2 className="sectionTitle">Требования</h2>
                    <ul>{requirementsElem}</ul>
                </div>
                <div>
                    <h2 className="sectionTitle">Условия</h2>
                    <ul>{conditionsElem}</ul>
                </div>
            </div>
        </details>
    );
};
