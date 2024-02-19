import React from 'react';
import './layout.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Layout({ children }) {
    return (
        <div className="container">
            <Header />
            {children}
            <Footer />
        </div>
    );
};
