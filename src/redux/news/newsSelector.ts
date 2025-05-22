import { AppState } from '../store';

export const getNews = (state: AppState) => {
    return state.news.news;
};

export const getOneNews = (state: AppState) => {
    return state.news.selectedNews;
};
