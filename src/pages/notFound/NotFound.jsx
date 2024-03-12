// Import de React
import React from 'react';
// Import du fichier de style
import './notFound.scss';
// Import depuis la librairie React Router
import { Link } from 'react-router-dom';

// Définition du composant sous forme de fonction
export default function NotFound() {
    return (
        <main className="notFound">
            <p className="notFound__number">404</p>
            <p className="notFound__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="notFound__link">Retourner sur la page d'accueil</Link>
        </main>
    );
};