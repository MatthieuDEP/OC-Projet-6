import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';

export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="headerLogo">
                <img src={logo} alt="logo Kasa" />
            </Link>
            <nav className="navigation">
                <ul className="navigationList">
                    <li className="navigationListItem"><Link to="/" className="navigationListItemLink">Accueil</Link></li>
                    <li className="navigationListItem"><Link to="/about" className="navigationListItemLink">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};