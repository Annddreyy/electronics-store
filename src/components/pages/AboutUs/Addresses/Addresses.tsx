import classes from './Addresses.module.scss';

export const Addresses: React.FC = () => {
    return (
        <address className={classes.addresses}>
            <ul>
                <li>ул. Ленсовета 81;</li>
                <li>ул. Дыбенко 23к1;</li>
                <li>пр. Энгельса 113 к 2.</li>
            </ul>
        </address>
    );
};
