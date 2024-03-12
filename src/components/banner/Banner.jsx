// Import de React
import React from 'react';
// Import du fichier de style
import './banner.scss'

// Définition du composant sous forme de fonction
export default function Banner({ title, imageSrcUrl, styles = '' }) {
    return (
        <div className={styles}>
            <h1 className='banner__title'>{title}</h1>
            <div className='banner__image'>
                <img src={imageSrcUrl} alt="bannière" />
            </div>
        </div>
    );
};