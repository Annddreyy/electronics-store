import classes from './CategoryTable.module.scss';

export const CategoryTable: React.FC = () => {
    return (
        <table className={classes.categoryTable}>
            <thead>
                <tr>
                    <th>Категория</th>
                    <th>Вид</th>
                    <th>Мощность (ват)</th>
                    <th>Рекомендуемая ср. скорость (км/ч)</th>
                    <th>Макс. грузоподъемность (кг)</th>
                    <th>Макс. пробег от одного заряда (км)</th>
                    <th>Гарантийный пробег (км)</th>
                    <th>Стоимость ТО</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>A</td>
                    <td>Электросамокат</td>
                    <td>от 1000 W</td>
                    <td>30</td>
                    <td>110</td>
                    <td>40</td>
                    <td>5000</td>
                    <td>3000-7000 руб.</td>
                </tr>
                <tr>
                    <td>B</td>
                    <td>Электросамокат</td>
                    <td>от 500-1000 W</td>
                    <td>18</td>
                    <td>90</td>
                    <td>20</td>
                    <td>2000</td>
                    <td>1500 руб.</td>
                </tr>
                <tr>
                    <td>C</td>
                    <td>Электросамокат</td>
                    <td>до 500 W</td>
                    <td>10</td>
                    <td>65</td>
                    <td>15</td>
                    <td>1000</td>
                    <td>800 руб.</td>
                </tr>
                <tr>
                    <td>D</td>
                    <td>Гироскутер</td>
                    <td>-/-</td>
                    <td>7</td>
                    <td>40</td>
                    <td>5</td>
                    <td>-/-</td>
                    <td>-/-</td>
                </tr>
            </tbody>
        </table>
    );
};
