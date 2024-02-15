import React from 'react';
import ReactDOM from 'react-dom/client';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Housing from './pages/housing/Housing';
import NotFound from './pages/NotFound/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing" element={<Housing />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
