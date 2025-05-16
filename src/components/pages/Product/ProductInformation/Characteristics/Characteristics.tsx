import classes from './Characteristics.module.scss';
import cn from 'classnames';

type Characteristic = [title: string, value: number | string | boolean | null];

type PropsType = {
    title: string;
    characteristics: Characteristic[];
};

export const Characteristics: React.FC<PropsType> = ({
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
            <tr className={cn(classes.characteristic, 'border-secondary')}>
                <td className={classes.title}>{characteristic[0]}</td>
                <td className="text-gray">{characteristic[1]}</td>
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
