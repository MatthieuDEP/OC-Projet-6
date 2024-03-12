// Import de React
import React from 'react';
// Import du fichier de style
import './layout.scss';
// Import des composants
import Header from '../header/Header';
import Footer from '../footer/Footer';

// Définition du composant sous forme de fonction
export default function Layout({ children }) {
    return (
        <div className="container">
            <Header />
            {children}
            <Footer />
        </div>
    );
};
