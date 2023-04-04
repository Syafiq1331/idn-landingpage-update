import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Academic from '../pages/Academic';
import Contact from '../pages/Contact';
import About from '../pages/About';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/academic" element={<Academic />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
