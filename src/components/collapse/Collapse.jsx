// Imports de React
import React, { useState } from "react";
// Import du fichier de style
import './collapse.scss'
// Import de l'image
import arrow from '../../images/arrow.svg'

// Définition du composant sous forme de fonction
export default function Collapse({title, children, styles = ''}) {
    
    // Utilisation de useState pour suivre l'état du collapse
    const [isCollapsed, setIsCollapsed] = useState(true);

    // Fonction pour gérer l'ouverture et la fermeture du collapse
    function openCollapse () {
        setIsCollapsed(!isCollapsed)
    };

    return (
        <div className={styles}>
            <button className="collapse">
                <h3 className="collapse__title">{title}</h3>
                <div className={isCollapsed ? "arrow--up" : "arrow--down"} onClick={openCollapse}>
                    <img src={arrow} alt="flèche déroulante" />
                </div>
            </button>
            <div className={isCollapsed ? "content content--hide" : "content content--show"}>
                <div className="content__text">
                    {children}
                </div>
            </div>
        </div>
    );
};