import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../features/auth/Login';
import Register from '../features/auth/Register';

import './App.css';
import Layout from './Layout';
import CalligraphyPage from '../features/calligraphy/CalligraphyPage';
import MainPage from '../features/main/MainPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/calligraphy" element={<CalligraphyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
