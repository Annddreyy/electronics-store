import classes from './TopPart.module.scss';
import eye from './../../../../assets/header/eye.png';
import compare from './../../../../assets/header/compare.png';
import like from './../../../../assets/header/like.png';
import bin from './../../../../assets/header/bin.png';
import logo from './../../../../assets/logo.png';
import cn from 'classnames';

export const TopPart: React.FC = () => {
    return (
        <header className={`${classes.header} bg-white`}>
            <div className="container">
                <div className={classes.topPart}>
                    <img src={logo} alt="" />
                    <div className={classes.information}>
                        <div className={classes.phones}>
                            <span className={classes.phone}>
                                +7(812) 660-50-540
                            </span>
                            <span className={classes.phone}>
                                +7(958) 111-95-03
                            </span>
                        </div>
                        <span className={'text-gray-dark-3'}>
                            Пн-вс: с 10:00 до 21:00
                        </span>
                    </div>
                    <div className={classes.buttons}>
                        <search></search>
                        <button>
                            <img src={eye} alt="" />
                        </button>
                        <button>
                            <img src={like} alt="" />
                        </button>
                        <button>
                            <img src={compare} alt="" />
                        </button>
                        <button>
                            <img src={bin} alt="" />
                        </button>
                        <button
                            className={cn(
                                classes.login,
                                'bg-primary-dark-1',
                                'text-white',
                            )}
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
