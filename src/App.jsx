import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './containers/Home';
import Destination from './containers/Destination';
import Crew from './containers/Crew';
import Technology from './containers/Technology';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </>
  );
};

export default App;
