import { AppState } from './redux/store';

export type Link = {
    link: LinkString;
    title: string;
};

export type LinkString = `/${string}`;

export type Selector<T> = (state: AppState) => T;
