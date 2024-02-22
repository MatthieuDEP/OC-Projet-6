import React from 'react';
import './home.scss';
import Banner from '../../components/banner/Banner';
import bannerHome from '../../components/banner/bannerHome.jpg'

export default function Home() {
  return (
    <div className="home">
      <Banner styles='banner banner__home' imageSrcUrl={bannerHome} title='Chez vous, partout et ailleurs'/>
      <p>Hello</p>
    </div>
  );
}
