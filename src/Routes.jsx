// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';

const AppRoutes = () => {
  return (
    <React.Fragment>
      {' '}
      {/* Use React.Fragment here */}
      <NavBar />
      <Routes>
        {' '}
        {/* Move Routes inside React.Fragment */}
        {/* Define routes here */}
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default AppRoutes;
