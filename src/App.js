import React from 'react';
import Contact from './Contact';
import Auth from './Auth';
import {Route, BrowserRouter, Routes } from 'react-router-dom';

const App = () =>{
  return (
    <div className={App}>
      <BrowserRouter>
        <Routes>
          <Route path='/auth' element={<Auth/>} />
          <Route path='/' element={<Contact />} />
        </Routes>
      </BrowserRouter>
       

    </div>
  );
}

export default App;
