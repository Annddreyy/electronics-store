import classes from './BottomNav.module.scss';

export const BottomNav: React.FC = () => {
    return (
        <nav className={classes.bottomNav}>
            <button>главная</button>
            <button>каталог</button>
            <button>корзина</button>
            <button>поиск</button>
            <button>еще</button>
        </nav>
    );
};
