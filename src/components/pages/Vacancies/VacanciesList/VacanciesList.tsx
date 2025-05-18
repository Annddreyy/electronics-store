import { VacancieCard } from './VacancieCard/VacancieCard';

export type VacancieType = {
    title: string;
    thooseWho: string[];
    requirements: string[];
    conditions: string[];
};

export type VacanciesType = {
    vacancies: VacancieType[];
};

export const VacanciesList: React.FC<VacanciesType> = ({ vacancies }) => {
    const vacanciesElem = vacancies.map((vacancie) => (
        <VacancieCard {...vacancie} />
    ));
    return <section>{vacanciesElem}</section>;
};
