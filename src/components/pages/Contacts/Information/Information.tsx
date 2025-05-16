import { ContactsInformation } from './ContactsInformation/ContactsInformation';
import { Map } from './Map/Map';
import classes from './Information.module.scss';

export const Information: React.FC = () => {
    return (
        <section className={classes.information}>
            <ContactsInformation />
            <Map />
        </section>
    );
};
