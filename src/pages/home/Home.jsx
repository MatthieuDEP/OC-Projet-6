// Import de React
import React from 'react';
// Import du fichier de style
import './home.scss';
// Import des composants
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';
// Import de l'image
import bannerHome from '../../images/bannerHome.jpg'
// Import de la data
import housingData from '../../data/housing.json';

// Définition du composant sous forme de fonction
export default function Home() {
  return (
    <main className="home">
      <Banner styles='banner banner__home' imageSrcUrl={bannerHome} title='Chez vous, partout et ailleurs'/>
      <div className='home__gallery'>
        {housingData.map(housing => (
          <Card key={housing.id} id={housing.id} cover={housing.cover} title={housing.title} />
        ))}
      </div>
    </main>
  );
};
