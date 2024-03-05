import React from 'react';
import './footer.scss';
import logo from '../../images/logoWhite.svg';

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