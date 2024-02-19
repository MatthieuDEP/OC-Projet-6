import React from 'react';
import ReactDOM from 'react-dom/client';
import  { BrowserRouter } from 'react-router-dom';
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
