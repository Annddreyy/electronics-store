import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { ContactForm } from '../components/common/ContactForm/ContactForm';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';
import { Information } from '../components/pages/Contacts/Information/Information';
import { root } from '../utils/breadCrumbsPaths';

const Contacts: React.FC = () => {
    const path = [root.main.path, root.main.contacts.path];
    return (
        <>
            <Header />
            <div className="container">
                <BreadCrumbs path={path} />
                <h1 className="pageTitle">Контакты</h1>
                <Information />
                <ContactForm formTitle="Связаться с нами" />
            </div>
            <Footer />
        </>
    );
};

export default Contacts;
