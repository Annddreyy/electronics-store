import img from './../../assets/news/img.png';

export type NewsType = {
    id: number;
    title: string;
    text: string;
    date: Date;
    img?: string;
};

type SelectedNewsType = {
    id: number;
    title: string;
    html: string;
    img: string;
};

const initialState: {
    news: NewsType[];
    selectedNews: SelectedNewsType;
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
    selectedNews: {
        id: 1,
        title: 'News',
        html: `
            <абзац>
                Противоположная точка зрения подразумевает, что реплицированные с зарубежных источников, современные исследования набирают популярность среди определённых слоёв населения, а значит, должны быть функционально разнесены на независимые элементы. Каждый из нас понимает очевидную вещь: социально-экономическое развитие влечёт за собой процесс внедрения и модернизации модели развития. 
            </абзац>
            <абзац>
                Имеется спорная точка зрения, гласящая примерно следующее: элементы политического процесса представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. Безусловно, глубокий уровень погружения предполагает независимые способы реализации своевременного выполнения сверхзадачи. 
            </абзац>
            <абзац>
                Лишь многие известные личности будут превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Учитывая ключевые сценарии поведения, сложившаяся структура организации создаёт предпосылки для системы обучения кадров, соответствующей насущным потребностям. Не следует, однако, забывать, что консультация с широким активом создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса экспериментов, поражающих по своей масштабности и грандиозности.
            </абзац>
            <заголовок>Бонусы и акции в честь открытия</заголовок>
            <абзац>
                А ещё явные признаки победы институционализации освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Равным образом, реализация намеченных плановых заданий не даёт нам иного выбора, кроме определения первоочередных требований. Каждый из нас понимает очевидную вещь: выбранный нами инновационный путь, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для распределения внутренних резервов и ресурсов. Кстати, активно развивающиеся страны третьего мира, вне зависимости от их уровня, должны быть в равной степени предоставлены сами себе. 
            </абзац>
            <абзац>
                Высокий уровень вовлечения представителей целевой аудитории является чётким доказательством простого факта: высококачественный прототип будущего проекта обеспечивает актуальность переосмысления внешнеэкономических политик. Противоположная точка зрения подразумевает, что сделанные на базе интернет-аналитики выводы могут быть разоблачены. В частности, высокотехнологичная концепция общественного уклада, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для позиций, занимаемых участниками в отношении поставленных задач.
            </абзац>
        `,
        img: img,
    },
};

type InitialStateType = typeof initialState;

export const newsReducer = (
    state = initialState,
    action: any,
): InitialStateType => {
    return state;
};
