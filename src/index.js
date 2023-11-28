import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { VideojuegosApp } from './VideojuegosApp';
import WelcomeScreen from './componentes/WelcomeScreen'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router>
    <Routes>
      <Route path="/videojuegos" element={<VideojuegosApp />} />
      <Route path="/" element={<WelcomeScreen />} />
    </Routes>
  </Router>
);


