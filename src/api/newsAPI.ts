import { DefaultResponse, instance } from './api';

export type News = {
    id: number;
    title: string;
    text: string;
    date: Date;
    img?: string;
};

export type SelectedNews = {
    id: number;
    title: string;
    html: string;
    img: string;
};

export type NewsResponse = DefaultResponse & { news: News[] };
export type SelectedNewsResponse = DefaultResponse & {
    selectedNews: SelectedNews;
};

export const newsAPI = {
    async getNews(page: number, pageSize: number) {
        const response = await instance.get<NewsResponse>(
            `/news?page=${page}&page_size=${pageSize}`,
        );
        return response.data;
    },

    async getOneNews(newsId: number) {
        const response = await instance.get<SelectedNewsResponse>(
            `/news/${newsId}`,
        );
        return response.data;
    },
};
