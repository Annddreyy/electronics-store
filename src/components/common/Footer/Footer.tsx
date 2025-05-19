import { Information } from './Information/Information';
import { FooterBottom } from './FooterBottom/FooterBottom';
import classes from './Footer.module.scss';

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
