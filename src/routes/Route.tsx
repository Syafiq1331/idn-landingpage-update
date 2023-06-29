import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Academic from '../pages/Academic';
import Contact from '../pages/Contact';
import About from '../pages/About';
import NotFoundPage from '../components/NotFoundPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/academic" element={<NotFoundPage />} />
      <Route path="/contact" element={<NotFoundPage />} />
      <Route path="/about" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
