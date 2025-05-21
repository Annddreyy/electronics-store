import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import classes from './../components/pages/Page404/Page404.module.scss';
import okak from './../assets/okak.png';
import { NavLink } from 'react-router-dom';

const Page404: React.FC = () => {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <Header />
            <div className="container">
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
            </div>
            <Footer />
        </div>
    );
};

export default Page404;
