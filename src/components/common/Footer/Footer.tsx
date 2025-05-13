import { Information } from './Information/Information';
import classes from './Footer.module.scss';
import { FooterBottom } from './FooterBottom/FooterBottom';

export const Footer: React.FC = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <Information />
                <FooterBottom />
            </div>
        </footer>
    );
};
