import classes from './FavoriteProductForm.module.scss';

export const FavoriteProductForm: React.FC = () => {
    return (
        <section className={classes.form}>
            <h3>Войдите или зарегистрируйтес</h3>
            <button className="button-primary">Войти</button>
        </section>
    );
};
