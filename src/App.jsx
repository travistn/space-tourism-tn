import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './containers/Home';
import Destination from './containers/Destination';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
      </Routes>
    </>
  );
};

export default App;
