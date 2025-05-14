import img from './../../assets/news/news-img.png';

export type NewsType = {
    id: number;
    title: string;
    text: string;
    date: Date;
    img?: string;
};

const initialState: {
    news: NewsType[];
} = {
    news: [
        {
            id: 1,
            title: 'Название1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae odio omnis quas dolorum commodi culpa nam? Ex, nemo nisi.',
            date: new Date(2025, 5, 12),
            img: img,
        },
        {
            id: 2,
            title: 'Название2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae odio omnis quas dolorum commodi culpa nam? Ex, nemo nisi.',
            date: new Date(2025, 5, 12),
            img: img,
        },
        {
            id: 3,
            title: 'Название3',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae odio omnis quas dolorum commodi culpa nam? Ex, nemo nisi.',
            date: new Date(2025, 5, 12),
            img: img,
        },
        {
            id: 3,
            title: 'Название3',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae odio omnis quas dolorum commodi culpa nam? Ex, nemo nisi.',
            date: new Date(2025, 5, 12),
            img: img,
        },
        {
            id: 4,
            title: 'Название4',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae odio omnis quas dolorum commodi culpa nam? Ex, nemo nisi.',
            date: new Date(2025, 5, 12),
            img: img,
        },
        {
            id: 5,
            title: 'Название5',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae odio omnis quas dolorum commodi culpa nam? Ex, nemo nisi.',
            date: new Date(2025, 5, 12),
            img: img,
        },
        {
            id: 6,
            title: 'Название6',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae odio omnis quas dolorum commodi culpa nam? Ex, nemo nisi.',
            date: new Date(2025, 5, 12),
            img: img,
        },
        {
            id: 7,
            title: 'Название7',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae odio omnis quas dolorum commodi culpa nam? Ex, nemo nisi.',
            date: new Date(2025, 5, 12),
            img: img,
        },
        {
            id: 8,
            title: 'Название8',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae odio omnis quas dolorum commodi culpa nam? Ex, nemo nisi.',
            date: new Date(2025, 5, 12),
            img: img,
        },
        {
            id: 9,
            title: 'Название9',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae odio omnis quas dolorum commodi culpa nam? Ex, nemo nisi.',
            date: new Date(2025, 5, 12),
            img: img,
        },
        {
            id: 10,
            title: 'Название10',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae odio omnis quas dolorum commodi culpa nam? Ex, nemo nisi.',
            date: new Date(2025, 5, 12),
            img: img,
        },
    ],
};

type InitialStateType = typeof initialState;

export const newsReducer = (
    state = initialState,
    action: any,
): InitialStateType => {
    return state;
};
