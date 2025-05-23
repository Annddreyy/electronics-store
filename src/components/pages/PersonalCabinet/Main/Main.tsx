import { NavLink } from 'react-router-dom';
import classes from './Main.module.scss';
import img from './../../../../assets/img.png';
import cn from 'classnames';

export const Main: React.FC = () => {
    return (
        <section className={classes.data}>
            <h2 className="sectionTitle">Андрей</h2>
            <div className={classes.top}>
                <img src={img} alt="" />
                <div>
                    <p>Дата регистрации: 02.04.2021</p>
                    <p>Заказов: 1</p>
                </div>
            </div>
            <p>
                Добро пожаловать в панель управления. Здесь вы можете{' '}
                <NavLink
                    to="/personal-cabinet/personal-data"
                    className={classes.link}
                >
                    изменить свои регистрационные данные
                </NavLink>{' '}
                и{' '}
                <NavLink to="/personal-cabinet/pass" className={classes.link}>
                    cменить пароль
                </NavLink>
                . Зарегистрированные пользователи имеют доступ к 
                <NavLink
                    to="/personal-cabinet/history"
                    className={classes.link}
                >
                    истории заказов
                </NavLink>{' '}
                и возможность{' '}
                <NavLink
                    to="/personal-cabinet/history"
                    className={classes.link}
                >
                    добавлять в избранное товары для будущих покупок
                </NavLink>
                .
            </p>
            <NavLink
                to="/personal-cabinet/parsonal-data"
                className={cn('button-primary', classes.button)}
            >
                Панель управения
            </NavLink>
        </section>
    );
};
