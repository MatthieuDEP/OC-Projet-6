import React from 'react';
import './notFound.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <main className="notFound">
            <p className="notFound__number">404</p>
            <p className="notFound__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="notFound__link">Retourner sur la page d'accueil</Link>
        </main>
    );
};