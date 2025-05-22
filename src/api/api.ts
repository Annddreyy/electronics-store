import axios from 'axios';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'URL',
});

export enum ResponseStatuses {
    OK = 200,
    NOT_FOUND_ERROR = 404,
    SERVER_ERROR = 500,
}

export type DefaultResponse = {
    status: ResponseStatuses;
    messages: string[];
};
