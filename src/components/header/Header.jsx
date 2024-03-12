// Import de React
import React from 'react';
// Import du fichier de style
import './header.scss';
// Import de la librairie React Router
import { Link, NavLink } from 'react-router-dom';
// Import de l'image
import logo from '../../images/logo.jpg';

// Définition du composant sous forme de fonction
export default function Header() {
    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={logo} alt="logo Kasa" />
            </Link>
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item"><NavLink to="/" className="navigation__link">Accueil</NavLink></li>
                    <li className="navigation__item"><NavLink to="/about" className="navigation__link">A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};