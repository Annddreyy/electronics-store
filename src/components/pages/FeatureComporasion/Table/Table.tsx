import React from 'react';
import { v4 } from 'uuid';
import { Characteristics } from '../../../../api/productsAPI';
import cn from 'classnames';
import classes from './Table.module.scss';

type Props = {
    isDifferent: boolean;
    characteristics: {
        characteristics: Characteristics;
    }[];
    characteristicsSet: Set<string>;
};

export const Table: React.FC<Props> = ({
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
        const cells = values.map((value) => (
            <div key={v4()} className={classes.td}>
                {value}
            </div>
        ));

        return (
            <React.Fragment key={v4()}>
                {!isDifferent ? (
                    <div
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
            </React.Fragment>
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
