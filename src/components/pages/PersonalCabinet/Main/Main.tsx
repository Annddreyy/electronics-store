import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import { getUser } from '../../../../redux/auth/authSelectors';
import { formatDate } from '../../../../utils/formatDate';
import classes from './Main.module.scss';

export const Main: React.FC = () => {
    const userData = useSelector(getUser);

    return (
        <>
            {userData.isAuth ? (
                <section className={classes.data}>
                    <h2 className="sectionTitle">{userData.name}</h2>
                    <div className={classes.top}>
                        <img src={userData.avatar} alt="" />
                        <div>
                            <p>
                                Дата регистрации:{' '}
                                {formatDate(userData.dateOfRegistration, {
                                    month: '2-digit',
                                })}
                            </p>
                            <p>Заказов: {userData.ordersCount}</p>
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
                        <NavLink
                            to="/personal-cabinet/pass"
                            className={classes.link}
                        >
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
            ) : (
                <Navigate to={'/'} />
            )}
        </>
    );
};
