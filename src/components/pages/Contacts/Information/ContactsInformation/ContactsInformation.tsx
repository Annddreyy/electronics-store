import { AddressCard } from './AddressCard/AddressCard';
import { v4 } from 'uuid';
import clockIcon from './../../../../../assets/contacts/clock.png';
import emailIcon from './../../../../../assets/contacts/mail.png';
import classes from './ContactsInformation.module.scss';

export type Address = {
    address: string;
    phone: string;
};

export const ContactsInformation: React.FC = () => {
    const addresses: Address[] = [
        { address: 'СПб, Ул. Дыбенко, д.23 к.1', phone: '+7 (812) 509-23-43' },
        { address: 'СПб, Пр. Энгельса д.113 к.2', phone: '+7 (812) 509-23-43' },
        { address: 'СПб, Ул. Ленсовета д.81', phone: '+7 (812) 602-74-02' },
        { address: 'СПб, Ул. Тарасова д.10', phone: '+7 (967) 555-01-06' },
    ];

    const addressesElem = addresses.map((address) => (
        <AddressCard
            phone={address.phone}
            address={address.address}
            key={v4()}
        />
    ));

    return (
        <div className={classes.contactsInformation}>
            {addressesElem}
            <div className={classes.bottom}>
                <div className={classes.card}>
                    <img src={emailIcon} alt="" />
                    <span className={classes.email}>
                        smart-tekhnika@gmail.com
                    </span>
                </div>
                <div className={classes.card}>
                    <img src={clockIcon} alt="" />
                    <div>
                        <p className={classes.workTime}>Режим работы</p>
                        <p className={classes.time}>Пн-вс с 10:00 до 21:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
