import React from 'react';
import { Footer } from '../components/common/Footer/Footer';
import { Header } from '../components/common/Header/Header';

export const BasePage: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};
