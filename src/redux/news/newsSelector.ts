import { AppState } from '../store';

export const getNews = (state: AppState) => {
    return state.news.news;
};

export const getOneNews = (state: AppState) => {
    return state.news.selectedNews;
};

export const getCurrentPage = (state: AppState) => {
    return state.news.currentPage;
};

export const getPageSize = (state: AppState) => {
    return state.news.pageSize;
};
