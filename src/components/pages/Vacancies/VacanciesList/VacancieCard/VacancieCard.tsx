import { VacancieType } from '../VacanciesList';
import classes from './VacancieCard.module.scss';

export const VacancieCard: React.FC<VacancieType> = ({
    title,
    thooseWho,
    requirements,
    conditions,
}) => {
    const thooseWhoElem = thooseWho.map((t) => <li>{t}</li>);
    const requirementsElem = requirements.map((r) => <li>{r}</li>);
    const conditionsElem = conditions.map((c) => <li>{c}</li>);
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
