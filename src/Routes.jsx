// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Use <Routes> here */}
      <Route exact path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} /> {/* Use "*" for 404 */}
    </Routes>
  );
};

export default AppRoutes;
