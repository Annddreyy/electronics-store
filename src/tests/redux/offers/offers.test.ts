import { Offer, SelectedOffer } from '../../../api/offersAPI';
import { actions, offersReducer } from '../../../redux/offers/offersReducer';

const initialState = {
    offers: [] as Offer[],
    selectedOffer: {} as SelectedOffer,
    currentPage: 0,
    pageSize: 10,
};

describe('test offers reducer', () => {
    it('check set news', () => {
        const action = actions.setOffers([
            { id: 1, title: 'Сигвеи до 30% на сигвеи', img: 'img' },
            { id: 2, title: 'Неделя смарт часов', img: 'img' },
            { id: 3, title: 'Распродажа до -50%', img: 'img' },
            {
                id: 4,
                title: 'Smart Balance Premium по специальной цене',
                img: 'img',
            },
        ]);
        const newState = offersReducer(initialState, action);

        expect(newState.offers.length).toBe(4);
    });

    it('check set selected offer', () => {
        const action = actions.setSelectedOffer({
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
            img: 'img',
        });
        const newState = offersReducer(initialState, action);

        expect(newState.selectedOffer.img).toBe('img');
        expect(newState.selectedOffer.id).toBe(1);
        expect(newState.selectedOffer.title).toBe('News');
        expect(newState.selectedOffer.html).toBe(`
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
        `);
    });

    it('set current page', () => {
        const action = actions.setCurrentPage(10);
        const newState = offersReducer(initialState, action);

        expect(newState.currentPage).toBe(10);
    });

    it('set page size', () => {
        const action = actions.setPageSize(15);
        const newState = offersReducer(initialState, action);

        expect(newState.pageSize).toBe(15);
    });
});
