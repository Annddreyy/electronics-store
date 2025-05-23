import { v4 } from 'uuid';
import { VacancieCard } from './VacancieCard/VacancieCard';

export type Vacancie = {
    title: string;
    thooseWho: string[];
    requirements: string[];
    conditions: string[];
};

export type Vacancies = {
    vacancies: Vacancie[];
};

export const VacanciesList: React.FC<Vacancies> = ({ vacancies }) => {
    const vacanciesElem = vacancies.map((vacancie) => (
        <VacancieCard {...vacancie} key={v4()} />
    ));
    return <section>{vacanciesElem}</section>;
};
