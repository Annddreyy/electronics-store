import cn from 'classnames';
import { CharacteristicsType } from '../../../../redux/products/productsReducer';
import classes from './Table.module.scss';

type PropsType = {
    isDifferent: boolean;
    characteristics: {
        characteristics: CharacteristicsType;
    }[];
    characteristicsSet: Set<string>;
};

export const Table: React.FC<PropsType> = ({
    characteristics,
    characteristicsSet,
    isDifferent,
}) => {
    const characteristicsElem = Array.from(characteristicsSet).map((key) => {
        const values = characteristics.map((c) => {
            let value = c.characteristics[key];
            if (typeof value === 'boolean') {
                value = value ? 'Есть' : 'Нет';
            } else {
                value = c.characteristics[key] || '-';
            }
            return value;
        });

        const allSame = values.every((v) => v === values[0]);
        const cells = values.map((value, index) => (
            <div key={index} className={classes.td}>
                {value}
            </div>
        ));

        return (
            <>
                {!isDifferent ? (
                    <div
                        key={key}
                        className={cn(classes.line, 'bg-yellow-light-8', {
                            [classes.highlight]: allSame,
                        })}
                    >
                        <div className={classes.td}>
                            <strong>{key}</strong>
                        </div>
                        {cells}
                    </div>
                ) : !allSame ? (
                    <div
                        key={key}
                        className={cn(classes.line, 'bg-yellow-light-8', {
                            [classes.highlight]: allSame,
                        })}
                    >
                        <div className={classes.td}>
                            <strong>{key}</strong>
                        </div>
                        {cells}
                    </div>
                ) : (
                    <></>
                )}
            </>
        );
    });
    return (
        <div className={classes.tableWrapper}>
            <div className={classes.characteristicsTable}>
                {characteristicsElem}
            </div>
        </div>
    );
};
