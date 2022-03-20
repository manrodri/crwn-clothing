import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/homepage/homepage-component';
import Auth from './pages/Auth/auth.components';
import Shop from "./pages/shop/shop.component";



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<HomePage/>}/>
        <Route path='shop' element={<Shop/>} />
        <Route path='auth' element={<Auth/>}/>
      </Route>
    </Routes>

  );
};

export default App;;
