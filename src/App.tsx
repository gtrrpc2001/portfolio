import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './mainHome/Home';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/portfolio' element={<Home/>}>
          
        </Route>
        <Route path='*' element={<Navigate to={'/portfolio'} replace={true}/>}/>
      </Routes>
    </Provider>    
  );
}

export default App;
