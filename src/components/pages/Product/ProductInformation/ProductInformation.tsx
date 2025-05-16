import { useState } from 'react';
import { createNewHTML } from '../../../../utils/createNewHTML';
import { Characteristics } from './Characteristics/Characteristics';
import { ProductDescription } from './ProductDescription/ProductDescription';
import { Reviews } from './Reviews/Reviews';
import classes from './ProductInformation.module.scss';
import cn from 'classnames';

enum TabsEnum {
    ProductDescription,
    Characteristics,
    Reviews,
}

export const ProductInformation: React.FC = () => {
    const [currentTab, setCurrentTab] = useState<TabsEnum>(TabsEnum.Reviews);

    const html = createNewHTML(`
        <абзац>
            Вопрос безопасности всегда стоит очень остро, в этом году производители решили его следующим образом — снабдили модель качественной задней и передней подсветкой, поэтому пользователь может не переживать о том, что его будет незаметно на дороге в тёмное время суток.
        </абзац>
        <абзац>
            На руле имеется яркий качественный дисплей, где отображается вся актуальная и необходимая информация — скорость, пробег и др. Кроме того, на руле имеется кнопка включения и выключения подсветки, звуковой сигнал и кнопка настроек. Таким образом, все необходимое для управления самокатом находится у пользователя под рукой.
        </абзац>
        <абзац>
            Для комфорта прогулок электросамокат снабжён передним и задним амортизаторами. Вы можете перемещаться не только по ровному городскому асфальту, но и по неровностям, которые не затруднят ваше перемещение.
        </абзац>
        <абзац>
            Складной механизм и небольшой вес (11 кг) делают модель эргономичной. В сложенном виде самокат занимает совсем мало места — его легко перевозить как в багажнике машины, так и в общественном транспорте. При складывании самокат фиксируется с помощью крючка к заднему крылу. А для того, чтобы разложить его, необходимо, нажав на заднее крыло, приподнять руль. Характерный щелчок говорит о том, что самокат разложен полностью и готов к эксплуатации.
        </абзац>
        <абзац>
            Стоит отметить, что электросамокат очень быстро стартует — вам не надо отталкиваться или разгоняться. Выдерживает до 120 кг, в процессе изготовления использовались только качественные материалы.
        </абзац>
        <абзац>
            Быстрый, лёгкий, компактный — прекрасный выбор для ценителей удобства!
        </абзац>
    `);

    const characteristics = Object.entries({
        'Тип:': null,
        'Макс. скорость до (км/ч)': 25,
        'Мощность двигателя': 300,
        'Пробег на одном заряде': 36,
        'Тип переднего тормоза': 'Дисковый маханический',
        'Круиз-контроль': true,
    });

    const tabs: Record<TabsEnum, React.ReactNode> = {
        [TabsEnum.ProductDescription]: (
            <ProductDescription
                title="Описание гироскутера Smart Balance Well 6.5"
                html={html}
            />
        ),
        [TabsEnum.Characteristics]: (
            <Characteristics
                title="Характеристики гироскутера Smart Balance Well 6.5"
                characteristics={characteristics}
            />
        ),
        [TabsEnum.Reviews]: <Reviews />,
    };

    return (
        <section>
            <div className={cn(classes.buttons, 'bg-secondary')}>
                <button
                    onClick={() => setCurrentTab(TabsEnum.ProductDescription)}
                    data-type={
                        currentTab === TabsEnum.ProductDescription
                            ? 'active'
                            : undefined
                    }
                >
                    Описание
                </button>
                <button
                    onClick={() => setCurrentTab(TabsEnum.Characteristics)}
                    data-type={
                        currentTab === TabsEnum.Characteristics
                            ? 'active'
                            : undefined
                    }
                >
                    Характеристики
                </button>
                <button
                    onClick={() => setCurrentTab(TabsEnum.Reviews)}
                    data-type={
                        currentTab === TabsEnum.Reviews ? 'active' : undefined
                    }
                >
                    Отзывы (1)
                </button>
            </div>
            {tabs[currentTab]}
        </section>
    );
};
