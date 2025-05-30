import { NavLink } from 'react-router-dom';
import facebook from './../../../../assets/social/facebook.png';
import instagram from './../../../../assets/social/instagram.png';
import twitter from './../../../../assets/social/twitter.png';
import vk from './../../../../assets/social/vk.png';
import classes from './FooterBottom.module.scss';
import { v4 } from 'uuid';

type SocialLink = {
    icon: string;
    link: `https://${string}`;
};

const socialLinks: SocialLink[] = [
    { icon: vk, link: 'https://vk.com' },
    { icon: facebook, link: 'https://facebook.com' },
    { icon: twitter, link: 'https://twitter.com' },
    { icon: instagram, link: 'https://instagram.com' },
];

export const FooterBottom: React.FC = () => {
    return (
        <div className={classes.footerBottom}>
            <span className={classes.rightsReceived}>
                SmartТехника © 2021 Все права защищены
            </span>
            <div className={classes.socialLinks}>
                {socialLinks.map((link) => (
                    <NavLink to={link.link} key={v4()}>
                        <img src={link.icon} alt={link.link} />
                    </NavLink>
                ))}
            </div>
            <span className={classes.author}>Разработка: Пучков Андрей</span>
        </div>
    );
};
