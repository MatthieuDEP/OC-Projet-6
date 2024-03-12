// Import de React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import depuis la librairie React Router
import  { BrowserRouter } from 'react-router-dom';
// Import des composants
import Router from './router/Router';
import Layout from './components/layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Layout>
      <Router />
    </Layout>
  </BrowserRouter>
);
