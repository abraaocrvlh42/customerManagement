// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importar 'react-dom/client'
import { AppRoutes } from './routes';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root')!); // Cria o root
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

