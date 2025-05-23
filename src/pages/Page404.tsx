import { NavLink } from 'react-router-dom';
import okak from './../assets/okak.png';
import classes from './../components/pages/Page404/Page404.module.scss';
import { BasePageWithContainer } from './BasePageWithContainer';

const Page404: React.FC = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <BasePageWithContainer>
                <div className={classes.top}>
                    <img src={okak} alt="" />
                    <div className={classes.right}>
                        <h1 className={classes.title}>Ошибка 404</h1>
                        <NavLink to="/">
                            <button className="button-primary">
                                На главную
                            </button>
                        </NavLink>
                    </div>
                </div>
            </BasePageWithContainer>
        </div>
    );
};

export default Page404;
