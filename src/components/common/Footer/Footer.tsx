import { Information } from './Information/Information';
import classes from './Footer.module.scss';
import { FooterBottom } from './FooterBottom/FooterBottom';
import cn from 'classnames';

export const Footer: React.FC = () => {
    return (
        <footer className={cn(classes.footer, 'bg-primary-light-8')}>
            <div className="container">
                <Information />
                <FooterBottom />
            </div>
        </footer>
    );
};
