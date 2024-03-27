import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './mainHome/Home';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>}>
          
        </Route>
        <Route path='*' element={<Navigate to={'/'}/>}/>
      </Routes>    
  );
}

export default App;
