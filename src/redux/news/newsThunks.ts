import { ResponseStatuses } from '../../api/api';
import { newsAPI } from '../../api/newsAPI';
import { BaseThunkType } from '../store';
import { actions, Actions } from './newsReducer';

export const getNews =
    (page = 1, pageSize = 1): BaseThunkType<Actions> =>
    async (dispatch) => {
        const response = await newsAPI.getNews(page, pageSize);
        if (response.status === ResponseStatuses.OK) {
            dispatch(actions.setNews(response.news));
        } else {
            console.error('При получении новостей произошла ошибка');
        }
    };

export const getOneNews =
    (newsId: number): BaseThunkType<Actions> =>
    async (disptch) => {
        const response = await newsAPI.getOneNews(newsId);
        if (response.status === ResponseStatuses.OK) {
            disptch(actions.setSelectedNews(response.selectedNews));
        } else {
            console.error(
                'При получении информации о новости произошла ошибка!',
            );
        }
    };
