import { AppStateType } from '../store';

export const getNews = (state: AppStateType) => {
    return state.news.news;
};
