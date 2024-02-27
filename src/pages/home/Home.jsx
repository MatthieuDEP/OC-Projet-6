import React from 'react';
import './home.scss';
import Banner from '../../components/banner/Banner';
import bannerHome from '../../images/bannerHome.jpg'
import Card from '../../components/card/Card';
import housingData from '../../data/housing.json';

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
