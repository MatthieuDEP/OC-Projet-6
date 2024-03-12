// Import de React
import React from "react";
// Import du fichier de style
import './card.scss'
// Import depuis la librairie React Router
import { Link } from "react-router-dom";

// Définition du composant sous forme de fonction
export default function Card ({ id, title, cover }) {
    return (
        <Link className="card" key={id} to={`/housing/${id}`}>
            <h2 className="card__title">{title}</h2>
            <div className="card__image">
                <img src={cover} alt={title} />
            </div>
        </Link>
    );
};