import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage-component';
import SignIn from './pages/signIn/signIn.components';

const Shop = () => {
  return (
    <div>I am the shop component</div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage />}></Route>
        <Route path='shop' element={<Shop></Shop>} />
        <Route path='sign-in' element={<SignIn />}></Route>
      </Route>
    </Routes>

  );
};

export default App;;
