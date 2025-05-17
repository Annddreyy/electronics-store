import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { ContactForm } from '../components/pages/Contacts/ContactForm/ContactForm';
import { Information } from '../components/pages/Contacts/Information/Information';
import { LinkType } from '../types';

export const Contacts: React.FC = () => {
    const path: LinkType[] = [
        { link: '/', title: 'Главная' },
        { link: '/contacts', title: 'Контакты' },
    ];

    return (
        <>
            <Header />
            <div className="container">
                <BreadCrumbs path={path} />
                <h1 className="pageTitle">Контакты</h1>
                <Information />
                <ContactForm />
            </div>
            <Footer />
        </>
    );
};
