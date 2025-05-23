import { BreadCrumbs } from '../components/common/BreadCrumbs/BreadCrumbs';
import { ContactForm } from '../components/common/ContactForm/ContactForm';
import { Information } from '../components/pages/Contacts/Information/Information';
import { root } from '../utils/breadCrumbsPaths';
import { BasePageWithContainer } from './BasePageWithContainer';

const Contacts: React.FC = () => {
    const path = [root.main.path, root.main.contacts.path];
    return (
        <BasePageWithContainer>
            <BreadCrumbs path={path} />
            <h1 className="pageTitle">Контакты</h1>
            <Information />
            <ContactForm formTitle="Связаться с нами" />
        </BasePageWithContainer>
    );
};

export default Contacts;
