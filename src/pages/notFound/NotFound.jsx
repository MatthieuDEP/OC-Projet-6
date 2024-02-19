import React from 'react';
import './notFound.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <main className="notFound">
            <p className="notFoundNumber">404</p>
            <p className="notFoundText">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="notFoundLink">Retourner sur la page d'accueil</Link>
        </main>
    );
};