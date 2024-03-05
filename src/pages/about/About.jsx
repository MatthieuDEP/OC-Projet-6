import React from 'react';
import './about.scss';
import Banner from '../../components/banner/Banner';
import bannerAbout from '../../images/bannerAbout.jpg';
import Collapse from '../../components/collapse/Collapse';

export default function about() {
    return (
        <main className="about">
            <Banner styles='banner banner__about' imageSrcUrl={bannerAbout}/>
            <div className='collapses collapses__about'>
                <Collapse styles='collapse__about' title='Fiabilité'>
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                    régulièrement vérifiées par nos équipes.</p>
                </Collapse>
                <Collapse styles='collapse__about' title='Respect'>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                    perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>
                <Collapse styles='collapse__about' title='Service'>
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                    perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>
                <Collapse styles='collapse__about' title='Sécurité'>
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                    correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                    locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                    également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collapse>
            </div>
        </main>
    );
};