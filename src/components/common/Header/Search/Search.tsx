import classes from './Search.module.scss';

type Props = {
    closeBlock: () => void;
};

export const Search: React.FC<Props> = ({ closeBlock }) => {
    return (
        <div className={classes.overlay}>
            <section className={classes.catalog}>
                <div className={classes.top}>
                    <h2 className="pageTitle">Поиск</h2>
                    <button onClick={closeBlock}>x</button>
                </div>
                <input
                    type="search"
                    placeholder={'Введите запрос, например "Smart balance"'}
                />
            </section>
        </div>
    );
};
