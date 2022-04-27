import React from 'react';
import aos from 'aos';
import { HashRouter, Route, Routes } from 'react-router-dom';

import './theme/App.css';
import './theme/animation.css';
import './theme/responsive.css';

import { Home } from './pages/Home';
import { ApplicationForm } from './pages/ApplicationForm';
import { routes } from './Routes/Routes';

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
        <Route path={routes.home} element={<Home/>} />
        <Route path={routes.application} element={<ApplicationForm/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
