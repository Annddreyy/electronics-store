import { AppStateType } from './redux/store';

export type LinkType = {
    link: LinkStringType;
    title: string;
};

export type LinkStringType = `/${string}`;

export type SelectorType<T> = (state: AppStateType) => T[];
