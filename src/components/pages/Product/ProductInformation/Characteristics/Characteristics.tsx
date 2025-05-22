import { v4 } from 'uuid';
import classes from './Characteristics.module.scss';
import cn from 'classnames';

type Characteristic = [title: string, value: number | string | boolean | null];

type Props = {
    title: string;
    characteristics: Characteristic[];
};

export const Characteristics: React.FC<Props> = ({
    title,
    characteristics,
}) => {
    const lines = characteristics.map((characteristic) => {
        if (characteristic[1] === null) {
            characteristic[1] = '-';
        } else if (characteristic[1] === true) {
            characteristic[1] = 'Есть';
        } else if (characteristic[1] === false) {
            characteristic[1] = 'Нет';
        }

        return (
            <tr className={classes.characteristic} key={v4()}>
                <td className={classes.title}>{characteristic[0]}</td>
                <td className={classes.value}>{characteristic[1]}</td>
            </tr>
        );
    });
    return (
        <>
            <h2 className="sectionTitle">{title}</h2>
            <table>
                <tbody>{lines}</tbody>
            </table>
        </>
    );
};
