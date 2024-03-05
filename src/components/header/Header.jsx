import React from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.jpg';

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