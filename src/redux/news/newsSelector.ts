import { AppStateType } from '../store';

export const getNews = (state: AppStateType) => {
    return state.news.news;
};

export const getOneNews = (state: AppStateType) => {
    return state.news.selectedNews;
};
