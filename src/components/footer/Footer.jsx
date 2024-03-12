// Import de React
import React from 'react';
// Import du fichier de style
import './footer.scss';
// Import de l'image
import logo from '../../images/logoWhite.svg';

// Définition du composant sous forme de fonction
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src={logo} alt="logo Kasa" />
            </div>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};