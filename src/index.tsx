// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importar 'react-dom/client'
import { AppRoutes } from './routes';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root')!); // Cria o root
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

