import React from 'react';
import aos from 'aos';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './theme/App.css';
import './theme/animation.css';
import './theme/responsive.css';

import { Home } from './pages/home/Home';
import { Application } from './pages/Application';
import { routes } from './Routes/Routes';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Test } from './pages/Test';

aos.init({
  /*offset: 100,
  duration: 400,
  easing: 'ease-in-sine',
  delay: 50,*/
});

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={'/test'} element={<Test/>} />
        <Route path={routes.home} element={<Home/>} />
        <Route path={routes.about} element={<About/>} />
        <Route path={routes.contact} element={<Contact/>} />
        <Route path={routes.application} element={<Application/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
