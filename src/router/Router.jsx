// Import de React
import React from 'react';
// Import depuis la librairie React Router
import { Routes, Route } from 'react-router-dom';
// Import des composants
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Housing from '../pages/housing/Housing';
import NotFound from '../pages/notFound/NotFound';

// Définition du composant sous forme de fonction
export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};