// Import de React
import React from "react";
// Import du fichier de style
import './tag.scss';

// Définition du composant sous forme de fonction
export default function Tag({ id, content }) {
    return (
        <p className="tag" key={id}>{content}</p>
    );
};